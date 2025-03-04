import React from "react";
import TopNewsTag from "./TopNewsTag";
import SocialMediaIcons from "./SocialMediaIcons";
import SliderItems from "./SliderItems";

const Slider = () => {
  const items = [
    "News list 1",
    "News list 2",
    "News list 3",
    "News list 4",
    "News list 5",
  ];
  const itemWidth = 200; // Width of each item
  const speed = 60; // Adjust speed (lower value = faster)

  return (
    <div className="relative overflow-hidden w-full mx-auto flex items-center">
      <TopNewsTag />
      <SliderItems items={items} itemWidth={itemWidth} speed={speed} />
      <SocialMediaIcons />
    </div>
  );
};

export default Slider;
