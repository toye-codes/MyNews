import mainArticle1 from "../assets/Images/mainArticle1.avif";

const SubArticleItem = ({ tag, title, image }) => (
  <div className="p-4 border rounded shadow-md dark:bg-gray-800">
    <img
      src={image}
      alt={`Image for ${title} article`}
      className="w-full h-32 object-cover rounded mb-2"
      onError={(e) => (e.target.src = "../assets/Images/fallbackImage.jpg")}
    />
    <div className="pt-2">
      <p className="text-md text-gray-500 mb-2">{tag}</p>
      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
    </div>
  </div>
);

const SubArticles = () => {
  const subSection = [
    {
      tag: "Tech updates",
      title: "Tech",
      image: mainArticle1,
    },
    {
      tag: "Marketing Insights",
      title: "Marketing",
      image: mainArticle1,
    },
    {
      tag: "Interviews",
      title: "Interviews",
      image: mainArticle1,
    },
    {
      tag: "Trends",
      title: "Trends",
      image: mainArticle1,
    },
  ];

  return (
    <section className="px-10">
      <h3 className="text-4xl dark:text-white font-bold mb-5">
        Latest Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subSection.map(({ tag, title, image }) => (
          <SubArticleItem
            key={`${tag}-${title}`}
            tag={tag}
            title={title}
            image={image}
          />
        ))}
      </div>
    </section>
  );
};

export default SubArticles;
