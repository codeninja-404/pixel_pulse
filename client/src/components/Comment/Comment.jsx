import { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);
  return (
    <div>
      <div>
        <img
          className="object-cover h-10 w-10 rounded-full bg-gray-300"
          src={user.profilePicture}
          alt={user.username}
        />
      </div>
      <div className="">
        <div className="">
          {" "}
          <span className="">
            {user ? `@${user.username}` : "anonymous user"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
