import React from 'react'
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const RecentPost = () => {
  
  return (
    <div className="flex flex-col mt-14">
      <div className="text-3xl font-semibold text-[#3d3d3d]">Recent Posts</div>
      <div className="grid grid-rows-3 pt-[0.5rem]"></div>
      {/* Pagination buttons */}
      <div className="mt-[3rem] space-x-2">
        <button className="border-[1px] border-gray-400 p-1 text-gray-600 rounded-full font-bold">
          <NavigateBeforeIcon />
        </button>
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
}

export default RecentPost