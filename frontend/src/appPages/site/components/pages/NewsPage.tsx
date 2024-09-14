"use client";

import NewsDetailContent from "./news/NewsDetailContent/NewsDetailContent"; // Исправлена опечатка
import NewsMainContent from "./news/NewsMainContent/NewsMainContent";
import scss from "./NewsPage.module.scss";

interface NewsPageProps {
  newsId?: number;
}

const NewsPage: React.FC<NewsPageProps> = ({ newsId }) => {
  return (
    <div className={scss.content}>
      {newsId ? (
        <NewsDetailContent newsId={newsId} />
      ) : (
        <NewsMainContent />
      )}
    </div>
  );
};

export default NewsPage;
