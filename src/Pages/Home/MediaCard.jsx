import React from "react";
import { Link } from "react-router-dom";

const MediaCard = ({ pst }) => {
  console.log(pst);
  const { poster, posterImg, postedImg, post, _id } = pst;
  return (
    <div className="rounded-md shadow-md mt-6 bg-base-300 dark:text-gray-100">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={posterImg}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none">{poster}</h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400">Dhaka</span>
          </div>
        </div>
      </div>
      <img
        src={postedImg}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="p-3">
        <div className="space-y-3">
          <p className="text-sm mt-4">
            {post.length > 200 ? <>{post.slice(0, 100) + "..."}</> : post}
          </p>
          <div className="text-end">
            <Link to={`/post/${_id}`}>
              <button className="btn btn-xs bg-base-200">See details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
