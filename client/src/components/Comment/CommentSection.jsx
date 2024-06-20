import { Alert, Button, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CommentSection = ({ postId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const [commentSuccess, setCommentSuccess] = useState(null);
  const trimmedComment = comment.trim();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCommentError(null);
    setCommentSuccess(null);
    if (comment === "") {
      setCommentError("Please enter a comment");
      return;
    }

    if (trimmedComment === "") {
      setCommentError(
        "Please enter a valid comment containing meaningful characters or words",
      );
      return;
    }
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch(`/api/comment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentError(null);
        setCommentSuccess("Comment successfully submitted");
      }
    } catch (error) {
      setCommentError(error.message);
      setCommentSuccess(null);
    }
  };
  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
          <p>Signed in as : </p>
          <Link
            to={"/dashboard?tab=profile"}
            className="text-xs text-cyan-500 hover:underline"
          >
            @{currentUser.username}
          </Link>
          <img
            src={currentUser.profilePicture}
            alt={currentUser.username}
            className="h-5 w-5 ml-2 object-cover rounded-full"
          />
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5 flex gap-1">
          You must login to comment.
          <Link to={"/sign-in"} className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className=" border border-teal-500 rounded-md p-3"
        >
          <Textarea
            placeholder="Add a comment...."
            rows="3"
            maxLength="200"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className=" flex justify-between items-center mt-5">
            <p className="text-gray-500 text-xs">
              {200 - comment.length} characters remaining
            </p>
            <Button gradientDuoTone="purpleToBlue" outline type="submmit">
              Submit
            </Button>
          </div>
          {commentError && (
            <Alert color="failure" className="mt-5">
              {commentError}
            </Alert>
          )}
          {commentSuccess && (
            <Alert color="success" className="mt-5">
              {commentSuccess}
            </Alert>
          )}
        </form>
      )}
    </div>
  );
};

export default CommentSection;