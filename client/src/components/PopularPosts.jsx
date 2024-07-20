import React, { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const PopularPosts = () => {
  //Impotant
   const { blogNumber } = useParams();
   const [popularPosts,setPopularPosts] = useState(null)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/popular-posts`
        );
        setPopularPosts(response?.data?.data); // handled useState() asynchronous nature, TIPS: set the directly from response instead of assigning varibale indirectly
        // console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    
    fetchBlogData();
  }, []);
  console.log(popularPosts);
  return (
    <div className="flex flex-col mt-14">
      <div className="text-3xl font-semibold text-[#3d3d3d]">Popular Posts</div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 pt-10">
        {/* Recent Post will generate inside this */}
        {popularPosts?.map((post) => (
          <div>
            <a href="" className="boox" key={post.id}>
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
            </a>
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

export default PopularPosts;
