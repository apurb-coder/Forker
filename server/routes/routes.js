import express from 'express';
import { BlogPost } from "../models/articles.model.js";

const router = express.Router();

/*
TODO:

* recent posts - Done
* popular posts - Done
* pagination api calls, number of pages
* likes/dislikes handlers
* get blog a certain blog post details by blogNumber field - Done

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

// GET request for /popular-posts endpoint
router.get("/popular-posts", async (req, res) => {
  try {
    const fieldsToReturn = {
      blogNumber: 1,
      like: 1,
      createdAt: 1,
      authorName: 1,
      title: 1,
      content: 1,
      titleImage: 1,
    };
    // sort by -1 matlab decending order, maltab most liked post first
    const popularPosts = await BlogPost.find({}, fieldsToReturn)
      .sort({ like: -1 })
      .limit(9);

    res.status(200).json({
      success: true,
      data: popularPosts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching popular blog posts",
    });
  }
});

// from client side send with a ?blogNumber=number
router.get("/blog-page", async (req, res) => {
  try {
    const blogNumber = Number(req.query.blogNumber);

    if (!blogNumber) {
      return res.status(400).json({
        success: false,
        error: "Invalid blogNumber parameter",
      });
    }

    

    const blogPost = await BlogPost.findOne({ BlogNumber : blogNumber });

    if (!blogPost) {
      return res.status(404).json({
        success: false,
        error: "Blog post not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blogPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching blog post",
    });
  }
});

export { router };