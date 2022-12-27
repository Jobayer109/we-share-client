import React from "react";

const MediaCard = ({ pst }) => {
  console.log(pst);
  const { date, poster, posterImg, postedImg, post } = pst;
  return (
    <div className=" mt-10 text-base-300">
      <div className="container grid grid-cols-12 mx-auto border border-gray-400">
        <div className="col-span-full lg:col-span-4">
          <img src={postedImg} alt="" />
        </div>
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
          <p className="flex-1 pt-2">{post}</p>
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              <div className="avatar">
                <div className="w-8 rounded">
                  <img src={posterImg} alt="Tailwind-CSS-Avatar-component" />
                </div>
              </div>
              <span className="self-center text-sm">{poster}</span>
            </div>
            <span className="text-xs">Date: {date.split(".")[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
