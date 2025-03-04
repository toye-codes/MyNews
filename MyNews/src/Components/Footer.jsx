import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/Images/logo.png";
import { useState } from "react";

const SocialMediaIcon = ({ href, bgColor, children }) => (
  <a
    href={href}
    className={`${bgColor} p-2 text-white rounded-md hover:opacity-80 transition-opacity`}>
    {children}
  </a>
);

const FooterSection = ({ title, children }) => (
  <div className="space-y-3">
    {title && <h3 className="text-lg font-semibold">{title}</h3>}
    {children}
  </div>
);

const FooterLink = ({ href, text }) => (
  <li>
    <a
      href={href}
      className="text-gray-600 dark:text-white hover:text-gray-900 transition-colors text-sm">
      {text}
    </a>
  </li>
);

const NewsletterForm = () => {
  const inputClass =
    "w-full px-3 py-2 mb-3 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 bg-white";

  return (
    <form className="space-y-3 px-4">
      <div>
        <input type="text" placeholder="Name" className={inputClass} />
      </div>
      <div>
        <input type="email" placeholder="Email" className={inputClass} />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2">
        <PlusIcon />
        <span>Subscribe</span>
      </button>
    </form>
  );
};

const PlusIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter size={18} />, bgColor: "bg-black", href: "#" },
    { icon: <Instagram size={18} />, bgColor: "bg-[#833AB4]", href: "#" },
    { icon: <Linkedin size={18} />, bgColor: "bg-[#0A66C2]", href: "#" },
  ];

  const footerLinks = {
    "Get to Know Us": [
      "Home",
      "Community Forum",
      "Tech Updates",
      "Interviews with",
      "Spotlight",
    ],
    "More Links": [
      "About Us",
      "Events",
      "Marketing Insights",
      "Marketing Rants",
    ],
  };

  return (
    <footer className="bg-white dark:bg-[#1c3271] dark:text-white py-8 rounded-xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <FooterSection>
            <img src={logo} alt="D'Vogue Logo" className="h-10 mb-3" />
            <p className="text-gray-600 text-sm mb-4">
              DNews: Your Daily Marketing Blog
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <SocialMediaIcon
                  key={index}
                  href={social.href}
                  bgColor={social.bgColor}>
                  {social.icon}
                </SocialMediaIcon>
              ))}
            </div>
          </FooterSection>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <FooterSection key={title} title={title}>
              <ul className="space-y-2">
                {links.map((link) => (
                  <FooterLink key={link} href="#" text={link} />
                ))}
              </ul>
            </FooterSection>
          ))}

          {/* Newsletter Section */}
          <FooterSection title="Get More Updates">
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to get our latest articles instantly!
            </p>
            <NewsletterForm />
          </FooterSection>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm dark:text-white">
            Copyright © {new Date().getFullYear()} DNews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
