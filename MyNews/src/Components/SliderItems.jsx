import React, { useState, useEffect } from "react";

const SliderItems = ({ items, itemWidth, speed }) => {
  const loopItems = [...items, ...items, items[1], items[0]];
  const [x, setX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setX((prevX) =>
          Math.abs(prevX) >= items.length * itemWidth ? 0 : prevX - 1
        );
      }
    }, speed);
    return () => clearInterval(interval);
  }, [items.length, itemWidth, speed, isHovered]);

  return (
    <div
      className="flex justify-start relative"
      style={{
        transform: `translateX(${x}px)`,
        width: `${loopItems.length * itemWidth}px`,
        transition: "transform 0.1s linear",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {loopItems.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 min-w-[200px] mx-2 px-1 py-2 bg-none text-black dark:text-white text-center">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SliderItems;
