import React, { use } from "react";
// import { useLoaderData } from "react-router";
import Blog from "./Blog";

const blogsArray = fetch("blogs.json").then((res) => res.json());

const Blogs = () => {
  // const blogDetails = useLoaderData();
  const blogsData = use(blogsArray);
  // console.log(blogDetails);
  return (
    <div className="max-w-screen-2xl mx-auto p-8">
      <h1 className="font-bold text-5xl text-[#0F0F0F]  mb-4 text-center">
        Blogs
      </h1>
      <p className="font-medium text-lg text-[#0F0F0F80] px-32 mb-8 text-center">
        Lets explore some basic concept that will make you a good DEveloper.
      </p>

      <div>
        {blogsData.map((blogAnswer, index) => (
          <Blog key={index} blogAnswer={blogAnswer}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
