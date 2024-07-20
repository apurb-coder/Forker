import React from 'react'
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const RecentPost = () => {
  //Impotant 
  return (
    <div className="flex flex-col mt-14">
      <div className="text-3xl font-semibold text-[#3d3d3d]">Recent Posts</div>
      <div className="grid grid-rows-3 pt-[0.5rem]">
        {/* Recent Post will generate inside this */}
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
}

export default RecentPost