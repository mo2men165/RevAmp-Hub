import { motion } from "framer-motion";

import { articles } from './../constants/index';
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./Section";

const Playbook = () => {
  const featuredArticle = articles.find((article) => article.featured);
  const otherArticles = articles.filter((article) => !article.featured);

  const categories = [...new Set(articles.map((article) => article.category))];

  return (
    <Section id="blog" className="bg-n-8">
        <div className="blog-page container flex">
      <main className="w-3/4 mx-auto p-6">
        <section className="featured-article mb-20">
          <motion.div
            className="flex justify-center items-center gap-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={featuredArticle?.image}
              alt={featuredArticle?.title}
              className="w-1/2 rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold mb-4">
                {featuredArticle?.title}
              </h1>
              <p className="text-gray-600 mb-2">{featuredArticle?.description}</p>
              <p className="text-sm text-gray-500">
                By {featuredArticle?.author}
              </p>
              <motion.a
                href={`/article/${featuredArticle?.id}`}
                className="text-blue-500 mt-4 inline-block hover:underline"
                whileHover={{ scale: 1.1 }}
              >
                Read more →
              </motion.a>
            </div>
          </motion.div>
        </section>
        <RightCurve />
        <section>
          {otherArticles.map((article, index) => (
            <div
              key={article.id}
              className="mb-12"
              id={article.category}
            >
              {index % 2 === 0 ? <LeftCurve /> : <RightCurve />}
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-1/3 rounded-lg shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-2">{article.description}</p>
                  <p className="text-sm text-gray-500">By {article.author}</p>
                  <motion.a
                    href={`/article/${article?.id}`}
                    className="text-blue-500 mt-4 inline-block hover:underline"
                    whileHover={{ scale: 1.1 }}
                  >
                    Read more →
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ))}
        </section>
      </main>
    </div>
    </Section>
  );
};

export default Playbook;
