import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  BlogNumber:{
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  authorName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  titleImage: {
    type: String, // URL to the title image
    required: true,
  },
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
