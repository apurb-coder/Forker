import express from 'express';
import { BlogPost } from "../models/articles.model.js";

const router = express.Router();

/*
TODO:

* recent posts
* popular posts
* pagination api calls, number of pages
* likes/dislikes handlers
* get blog a certain blog post details by blogNumber field

*/

// GET request for /recent-posts endpoint
router.get("/recent-posts", async (req, res) => {
  try {
    const fieldsToReturn = {
      blogNumber: 1,
      createdAt: 1,
      authorName: 1,
      title: 1,
      content: 1,
      titleImage: 1,
    };

    // -1 matlab descending order (most recent first)
    const recentPosts = await BlogPost.find({}, fieldsToReturn).sort({ createdAt: -1 }).limit(9);

    res.status(200).json({
      success: true,
      data: recentPosts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching recent blog posts",
    });
  }
});

export { router };