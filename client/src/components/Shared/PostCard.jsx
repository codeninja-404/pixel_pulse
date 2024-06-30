import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="group relative w-[370px]  border border-teal-500 h-[300px] overflow-hidden rounded-lg  my-2">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="Post cover"
          className="h-[190px] w-full object-cover group-hover:h-[140px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col ga-2 ">
        <p className="text-lg font-semibold line-clamp-2 whitespace-pre-line  break-all">
          {post.title}
        </p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          className="z-10 group-hover:bottom-0 bottom-[-200px] absolute left-0 right-0 border border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
          to={`/post/${post.slug}`}
        >
          Read airtcle{" "}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
