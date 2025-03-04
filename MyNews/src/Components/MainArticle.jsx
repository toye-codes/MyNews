import React, { useState, useEffect } from "react";
import mainArticle1 from "../assets/Images/mainArticle1.avif";
import mainArticle2 from "../assets/Images/mainArticle2.avif";
import mainArticle3 from "../assets/Images/mainArticle3.avif";
import ArticlesCard from "./ArticlesCard"; // Assuming ArticlesCard is in the same directory

const MainArticle = () => {
  const articleData = [
    {
      id: 1,
      img: mainArticle1,
      tag: "marketing insights",
      title: "Making Impact in the world of marketing",
      authorPicture: "",
      authorName: "Olusanya Agbesanya",
      time: "3 mins read",
    },
    {
      id: 2,
      img: mainArticle2,
      tag: "marketing insights",
      title: "The Art of Marketing Impact",
      authorPicture: "",
      authorName: "Olutoye sanya",
      time: "2 mins read",
    },
    {
      id: 3,
      img: mainArticle3,
      tag: "marketing insights",
      title: "Marketing Strategies That Work",
      authorPicture: "",
      authorName: "Olusanya",
      time: "4 mins read",
    },
  ];

  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex(
        (prevIndex) => (prevIndex + 1) % articleData.length
      );
    }, 10000); // Switch article every 10 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [articleData.length]);

  return (
    <section className="text-4xl px-8 pt-6 mb-5">
      <div className="grid grid-cols-1 gap-6">
        {/* Render only the current article */}
        <ArticlesCard
          key={articleData[currentArticleIndex].id}
          id={articleData[currentArticleIndex].id}
          img={articleData[currentArticleIndex].img}
          tag={articleData[currentArticleIndex].tag}
          title={articleData[currentArticleIndex].title}
          authorPicture={articleData[currentArticleIndex].authorPicture}
          authorName={articleData[currentArticleIndex].authorName}
          time={articleData[currentArticleIndex].time}
        />
      </div>
    </section>
  );
};

export default MainArticle;