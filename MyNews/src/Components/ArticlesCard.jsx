import React from "react";
import { Timer, Share } from "lucide-react";

const ArticlesCard = ({
  id,
  img,
  tag,
  title,
  authorPicture,
  authorName,
  time,
}) => (
  <div
    key={id}
    className="relative w-full min-h-[400px] rounded-md overflow-hidden shadow-lg text-white">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    />

    {/* Dark Overlay for Readability */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-end h-full px-6 py-8">
      {/* Tag */}
      <p className="flex gap-3 text-yellow-600 text-lg py-1 px-5 bg-white w-fit rounded-2xl drop-shadow-sm">
        <span className="font-bold">•</span> {tag}
      </p>

      {/* Title & Author */}
      <div className="mt-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center gap-3 mt-2">
          <img
            src={authorPicture || "https://via.placeholder.com/50"}
            alt={authorName}
            className="rounded-full w-10 h-10 object-cover"
          />
          <p className="text-sm font-medium">{authorName}</p>
        </div>
      </div>

      {/* Timer & Share */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Timer />
          <p className="text-sm">{time}</p>
        </div>
        <Share />
      </div>
    </div>
  </div>
);

export default ArticlesCard;
