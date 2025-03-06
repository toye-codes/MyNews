import { motion } from "framer-motion";
import mainArticle1 from "../assets/Images/mainArticle1.avif";

const SubArticleItem = ({ tag, title, image, description }) => (
  <motion.div
    className="p-4 border rounded shadow-md dark:bg-gray-800 overflow-hidden"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}>
    <img
      src={image}
      alt={`Image for ${title} article`}
      className="w-full h-40 object-cover rounded mb-3"
      onError={(e) => (e.target.src = fallbackImage)}
    />
    <div className="pt-2">
      <p className="text-sm text-gray-500 mb-2">{tag}</p>
      <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const SubArticles = () => {
  const subSection = [
    {
      tag: "Tech Updates",
      title: "The Future of AI in Everyday Life",
      image: mainArticle1,
      description:
        "Exploring how AI is shaping our daily activities and industries.",
    },
    {
      tag: "Marketing Insights",
      title: "Boost Your Brand with Digital Marketing",
      image: mainArticle1,
      description:
        "Learn the latest digital marketing strategies to grow your business.",
    },
    {
      tag: "Interviews",
      title: "Industry Leaders Share Success Stories",
      image: mainArticle1,
      description:
        "Exclusive insights from top professionals in various industries.",
    },
    {
      tag: "Trends",
      title: "Upcoming Trends in the Tech World",
      image: mainArticle1,
      description: "Stay ahead with insights into emerging technology trends.",
    },
  ];

  return (
    <section className="px-10">
      <motion.h3
        className="text-4xl dark:text-white font-bold mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        Latest Articles
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subSection.map(({ tag, title, image, description }) => (
          <SubArticleItem
            key={`${tag}-${title}`}
            tag={tag}
            title={title}
            image={image}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default SubArticles;
