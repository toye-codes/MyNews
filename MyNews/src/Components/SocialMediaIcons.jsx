import React from "react";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const SocialMediaIcons = () => (
  <div className="flex gap-2 absolute top-0 right-0 bg-black px-2 py-2 text-white font-semibold rounded-bl-lg rounded-tl-lg shadow-md z-10">
    <Twitter />
    <Facebook />
    <Linkedin />
  </div>
);

export default SocialMediaIcons;
