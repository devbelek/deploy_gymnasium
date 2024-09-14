"use client";

import NewsDetailContent from "./news/NewsDetailCotnent/NewsDetailContent";
import scss from "./NewsPage.module.scss";
import NewsMainContent from "./news/NewsMainContent/NewsMainContent";
interface NewsPageProps {
  newsId: number;
}

const NewsPage: React.FC<NewsPageProps> = ({ newsId }) => {
  return (
    <div className={scss.content}>
      <NewsMainContent newsId={newsId} />
    </div>
  );
};

export default NewsPage;