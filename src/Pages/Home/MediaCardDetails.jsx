import React from "react";
import { FaCommentAlt, FaShareAlt, FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const MediaCardDetails = () => {
  const pst = useLoaderData();
  return (
    <div className="px-20 my-10">
      {pst.map((p) => (
        <div className="rounded-md shadow-md w-full bg-base-300 dark:text-gray-100">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <img
                src={p.posterImg}
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leading-none">{p.poster}</h2>
                <span className="inline-block text-xs leading-none dark:text-gray-400">Dhaka</span>
              </div>
            </div>
          </div>
          <img
            src={p.postedImg}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  title="Like post"
                  className="flex items-center justify-center"
                >
                  <FaThumbsUp />
                </button>
                <button
                  type="button"
                  title="Add a comment"
                  className="flex items-center justify-center"
                >
                  <FaCommentAlt />
                </button>
                <button
                  type="button"
                  title="Share post"
                  className="flex items-center justify-center"
                >
                  <FaShareAlt />
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm mt-4">{p.post}</p>
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaCardDetails;
