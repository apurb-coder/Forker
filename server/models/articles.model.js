import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  timeOfPublish: {
    type: Date,
    default: Date.now,
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
