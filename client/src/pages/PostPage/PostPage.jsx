import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../../components/Shared/CallToAction";
import CommentSection from "../../components/Comment/CommentSection";
import PostCard from "../../components/Shared/PostCard";
const PostPage = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }
  return (
    <main className="min-h-screen pt-20 flex flex-col max-w-6xl mx-auto">
      <h1 className="whitespace-pre-line  break-all text-3xl mt-8 p-3 text-center font-serif max-w=2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>

      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-5 p-3 max-h-[500px] w-full rounded-3xl  object-cover"
      />
      <div className="flex justify-between  border-b border-slate-500 p-3 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      <div className="max-w-4xl mx-auto my-10 w-full">
        <CallToAction />
      </div>
      <CommentSection postId={post._id} />
      <div className="flex flex-col justify-center items-center mb-5 ">
        <h1 className="text-xl mt-5 "> Recent Articles</h1>
        <div className="flex flex-wrap justify-center gap-5">
          {recentPosts &&
            recentPosts.map((post) => (
              <PostCard key={post._id} post={post}></PostCard>
            ))}
        </div>
      </div>
    </main>
  );
};

export default PostPage;
