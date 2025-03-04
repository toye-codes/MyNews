import React from 'react'
import { Timer, Share } from "lucide-react";



const ArticlesCard = ({ id, img, tag, title, authorPicture, authorName, time }) => (
  <div
    key={id}
    className="h-96 rounded-md px-6 py-12 flex flex-col justify-end text-white shadow"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
    <div>
      <p className="flex gap-3 text-yellow-600 text-lg py-1 px-5 bg-white w-fit rounded-2xl drop-shadow-sm shadow-7 shadow-black">
        <span className="font-bold">•</span>
        {tag}
      </p>
      <div>
        <div className="flex mt-3">
          <img
            src={authorPicture || "https://via.placeholder.com/50"}
            alt={authorName}
            className="rounded-full w-10 h-10 object-cover"
          />
          <h2 className="mt-2 text-xl font-semibold ml-4">{title}</h2>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <Timer />
        <p className="text-sm">{time}</p>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm font-medium">{authorName}</p>
        <Share />
      </div>
    </div>
  </div>
);

export default ArticlesCard