import { useParams } from 'react-router-dom';
import { articles } from '../constants/index';
import Section from './Section';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Section id="article" crossesOffset crosses className="bg-n-8">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
        
        {/* Author */}
        <p className="text-sm text-gray-500 mb-4">By {article.author}</p>
        
        {/* Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-[50%] mx-auto rounded-lg shadow-lg mb-6"
        />
        
        {/* Content */}
        <div className="text-lg text-gray-700 space-y-4">
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index} className='text-n-1' >{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ArticlePage;
