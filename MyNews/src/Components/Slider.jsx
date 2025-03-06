import React from "react";
import TopNewsTag from "./TopNewsTag";
import SocialMediaIcons from "./SocialMediaIcons";
import SliderItems from "./SliderItems";

const Slider = () => {
  const items = [
    "The Most Anticipated Movies of 2025",
    "The Impact of Sports Science on Athletic Performance",
    "How Streaming Platforms Are Changing Hollywood",
    "Affiliate Marketing Strategies That Work in 2025",
    "Why Brands Are Investing More in Podcast Marketing",
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
