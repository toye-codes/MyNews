import "./index.css";
import NavBar from "../src/Components/NavBar";
import Slider from "./Components/Slider";
import MainArticle from "./Components/MainArticle.jsx";
import SubArticles from "./Components/SubArticles.jsx";
import Footer from "./Components/Footer.jsx";
import WorldWideNews from "./Components/WorldWideNews.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function App() {
  return (
    <motion.section
      className="bg-white dark:bg-gray-900 min-h-screen flex flex-col justify-between shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-md shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <NavBar />
        <Slider />
      </motion.header>

      {/* Main Content */}
      <motion.main className="p-6 space-y-10 flex-grow">
        <FadeInSection>
          <MainArticle />
        </FadeInSection>
        <FadeInSection>
          <SubArticles />
        </FadeInSection>
        <FadeInSection>
          <WorldWideNews />
        </FadeInSection>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="py-6 bg-gray-200 dark:bg-gray-800 rounded-t-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <Footer />
      </motion.footer>
    </motion.section>
  );
}

/* Scroll Animation Wrapper */
function FadeInSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      {children}
    </motion.div>
  );
}
