import React from "react";
import { FaComment, FaShareAlt, FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const MediaCardDetails = () => {
  const pst = useLoaderData();
  return (
    <div className="lg:px-20 bg-white border">
      {pst.map((p) => (
        <div className="rounded-t-sm shadow-md w-full mt-2 lg:mt-10 bg-base-300 ">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <img
                src={p.posterImg}
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm "
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leading-none">{p.poster}</h2>
                <span className="inline-block text-xs leading-none ">Dhaka</span>
              </div>
            </div>
          </div>
          <img src={p.postedImg} alt="" className="object-cover object-center w-full h-72 " />
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="indicator">
                  <span className="indicator-item badge bg-white text-black badge-xs">0</span>
                  <button className="btn btn-sm">
                    <FaThumbsUp />
                  </button>
                </div>
                <div className="indicator">
                  <span className="indicator-item badge bg-white text-black badge-xs">0</span>
                  <button className="btn btn-sm">
                    <FaComment />
                  </button>
                </div>
                <div className="indicator">
                  <span className="indicator-item badge bg-white text-black badge-xs">0</span>
                  <button className="btn btn-sm">
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-md mt-4 border border-base-300 py-6 text-justify">{p.post}</p>
              <div className="md:flex md:items-center md:justify-between gap-3">
                <textarea
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full py-2 text-black text-md border-none outline-none pl-2 bg-white rounded"
                />
                <div className="text-center">
                  <button className="border py-2 px-6 object-contain bg-white text-black rounded-md hover:bg-gray-200 font-semibold">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div>
        <div className="p-12 mb-10 rounded-b-md  border">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src="https://source.unsplash.com/75x75/?portrait"
              alt=""
              className="self-center flex-shrink-0 w-16 h-16 border rounded-full md:justify-self-start border-gray-700"
            />
            <div className="flex flex-col border p-1 rounded-md">
              <h4 className="text-lg font-semibold text-base-100">Leroy Jenkins</h4>
              <p className="text-gray-600 text-justify">
                Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula,
                semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula
                euismod lobortis ultricies et nibh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCardDetails;
