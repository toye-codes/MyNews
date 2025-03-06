import React from "react";
import mainArticle1 from "../assets/Images/mainArticle1.avif";
import mainArticle2 from "../assets/Images/mainArticle2.avif";
import mainArticle3 from "../assets/Images/mainArticle3.avif";
import ArticlesCard from "./ArticlesCard"; // Assuming ArticlesCard is in the same directory

const articleData = [
  {
    id: 1,
    img: mainArticle1,
    tag: "Marketing Insights",
    title: "Making Impact in the World of Marketing",
    authorPicture: "",
    authorName: "Olusanya Agbesanya",
    time: "3 mins read",
  },
  {
    id: 2,
    img: mainArticle2,
    tag: "Marketing Insights",
    title: "The Art of Marketing Impact",
    authorPicture: "",
    authorName: "Olutoye Sanya",
    time: "2 mins read",
  },
  {
    id: 3,
    img: mainArticle3,
    tag: "Marketing Insights",
    title: "Marketing Strategies That Work",
    authorPicture: "",
    authorName: "Olusanya",
    time: "4 mins read",
  },
];

const MainArticle = () => {
  return (
    <section className="px-4 pt-6 mb-5">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
        {articleData.map((article) => (
          <div
            key={article.id}
            className="border dark:border-gray-700 rounded-lg shadow-md p-5 bg-gray-200 dark:bg-gray-800">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-1/3 flex-shrink-0 bg-gray-300 dark:bg-gray-700 p-4 rounded-lg">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded"
                />
              </div>

              {/* Vertical Separator (for md+) */}
              <div className="hidden md:block w-[2px] bg-gray-400 dark:bg-gray-600 mx-4"></div>

              {/* Content Section */}
              <div className="md:w-2/3 bg-gray-300 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold dark:text-gray-100">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {article.tag}
                </p>

                {/* Author & Read Time */}
                <div className="mt-2 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <p>By {article.authorName}</p>
                  <span>{article.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainArticle;
