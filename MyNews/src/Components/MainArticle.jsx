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
    <section className="px-8 pt-6 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articleData.map((article) => (
          <ArticlesCard
            key={article.id}
            id={article.id}
            img={article.img}
            tag={article.tag}
            title={article.title}
            authorPicture={article.authorPicture}
            authorName={article.authorName}
            time={article.time}
          />
        ))}
      </div>
    </section>
  );
};

export default MainArticle;
