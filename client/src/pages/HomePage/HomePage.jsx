import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../../components/Shared/CallToAction";
import PostCard from "../../components/Shared/PostCard";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data?.posts);
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <div className="min-h-screen pt-20">
      <div className="flex flex-col gap-6 p-10 md:p-28 text-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Explore a diverse array of resources including articles and tutorials
          covering essential topics in web development, software engineering,
          and various programming languages.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts...
        </Link>
      </div>
      <div className="p-3 max-w-[80rem] mx-auto bg-amber-100 dark:bg-slate-700">
        <CallToAction></CallToAction>
      </div>
      <div className="max-w-6xl mx-auto py-3 flex flex-col gap-8 md:py-7">
        {posts && posts.length > 0 && (
          <div className=" mx-auto flex flex-col gap-7 justify-center ">
            <h2 className="text-2xl font-semibold text-center">Recent posts</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              className=" text-center font-bold text-teal-500 hover:underline"
              to="/search"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
