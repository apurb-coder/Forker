import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const RecentPost = () => {
  const navigate = useNavigate();
  const { blogNumber } = useParams();
  const [recentPosts, setRecentPosts] = useState(null);

  const handleClickPost = (blognum) => {
    console.log("Clicked blog post:", blognum);
    navigate(`/blogs/${blognum}`);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/recent-posts`
        );
        setRecentPosts(response?.data?.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [blogNumber]);

  console.log(recentPosts);
  return (
    <div className="flex flex-col mt-14">
      <div className="text-3xl font-semibold text-[#3d3d3d]">Recent Posts</div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 pt-10">
        {/* Recent Post will generate inside this */}
        {recentPosts?.map((post) => (
          <div>
            <div
              className="boox hover:cursor-pointer"
              key={post?.id}
              onClick={() => handleClickPost(post?.BlogNumber)}
            >
              <div className="imagee">
                {/* titleImage */}
                <img
                  src={post?.titleImage}
                  alt="title Image"
                  className="rounded-[2rem]"
                />
              </div>
              <div className="author text-[#fd7a33] font-bold pt-3">
                {" "}
                by {post?.authorName} -{" "}
                {moment(post?.createdAt).format("D MMMM YYYY")}
              </div>
              <div className="ins">{post?.title}</div>
              <p>Lorem, ipsum dolor.</p>
              <div className="text-[#fd7a33] underline font-semibold">
                Read More...
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination buttons */}
      <div className="mt-[3rem] space-x-2 flex justify-center">
        <button className="border-[1px] border-gray-400 p-1 text-gray-600 rounded-full font-bold">
          <NavigateBeforeIcon />
        </button>
        {/* TODO: Generate Number of pages through API calls, if current page==1 disable left arrow, if current page==last disable right arrow */}
        <button className="border-[1px] border-gray-400 px-3 py-1 text-gray-600 rounded-full">
          1
        </button>
        <button className="border-[1px] border-gray-400 px-3 py-1 text-gray-600 rounded-full">
          2
        </button>
        <button className="border-[1px] border-gray-400 p-1 text-gray-600 rounded-full font-bold">
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default RecentPost;
