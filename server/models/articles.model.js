import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  BlogNumber: {
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
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export { BlogPost };
