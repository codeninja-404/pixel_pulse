import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/pixel-pulse-d3fc9.appspot.com/o/blog.png?alt=media&token=abe75032-7322-4595-920c-317d6aead330",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);
const Post = mongoose.model("Post", postSchema);
export default Post;
