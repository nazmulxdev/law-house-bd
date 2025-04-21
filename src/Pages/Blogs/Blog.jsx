import React from "react";
import { TbCalendarStats } from "react-icons/tb";

const Blog = ({ blogAnswer }) => {
  return (
    <div className="max-w-screen-2xl mx-auto p-8 rounded-2xl bg-[#0F0F0F0D] mb-8">
      <h1 className="border-b-2 border-dashed border-[#0F0F0F26] text-3xl font-bold text-black pb-4">
        {blogAnswer.question}
      </h1>
      <p className="text-blue-500 mt-4 text-xl font-medium mb-2">Answer:</p>
      <p className="border-b-2 border-dashed border-[#0F0F0F26] pb-4 text-xl font-medium">
        {blogAnswer.answer}
      </p>
      <p className="mt-4 font-medium text-xl flex gap-2 items-center">
        <TbCalendarStats /> Added at {blogAnswer.time}
      </p>
    </div>
  );
};

export default Blog;
