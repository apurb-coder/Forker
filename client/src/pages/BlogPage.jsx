import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArrowLogo from "../assets/arrow_wxeel0.jpg";

const BlogPage = () => {
  const { blogNumber } = useParams();
  const [blogData, setBlogData] = useState(null);
  // when page 1st reloads call api

   useEffect(() => {
     const fetchBlogData = async () => {
       try {
         const response = await axios.get(
           `${
             import.meta.env.VITE_BACKEND_URL
           }/blog-page?blogNumber=${blogNumber}`
         );
         
         setBlogData(response.data.data); // directly update , assign to other variables : solved useState Asynchronous update problem
        //  console.log("API response:", blogData); // Check the response data structure
       } catch (error) {
         console.error("Error fetching blog data:", error);
       }
     };

     fetchBlogData();
   }, [blogNumber]);

   // Logging the updated state
   useEffect(() => {
     if (blogData) {
       console.log("Blog data updated:", blogData); // Verify the updated state
     }
   }, [blogData]);

   console.log("Current blogNumber:", blogNumber);

  return (
    <div className="flex flex-col mt-16 max-w-[947px] mx-auto">
      {/* Navigation at the top */}
      <div className="flex items-center text-[#3d3d3d] mb-3 space-x-2">
        <div>Blog</div>
        <img src={ArrowLogo} alt="arrowlogo" className="w-[10px] h-[10px]" />
        {/* change here dynamically through api call */}
        <div>Blog Name</div>
      </div>
      {/* articls image */}
      <div className="relative rounded-[2rem]">
        <img
          src="https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="article Img"
          className="rounded-[2rem]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-[2rem]"></div>
        <div className="absolute bottom-[4%] left-[2%] uppercase text-white font-bold text-2xl">
          {/* Title over the Article Image */}
          {blogData?.title}
        </div>
      </div>
      {/* Author and details */}
      <div className="flex justify-between my-3">
        <div className="text-[#F76f32] font-semibold">
          {blogData?.authorName}
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707285106/Frokerassets/Artboard_ne0yo2.jpg"
            alt="like icon"
            className="w-9 h-9 text-orange-500"
          />
          <div className="">{blogData?.like} Likes</div>
        </div>
      </div>
      {/* Title */}
      <div className="text-[#666] font-bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing
      </div>
      {/* Article Content */}
      <div></div>
      {/* PopularPost.jsx */}
    </div>
  );
};

export default BlogPage;
