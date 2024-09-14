"use client";

import NewsDetailContent from "./news/NewsDetailCotnent/NewsDetailContent";
import scss from "./NewsPage.module.scss";
interface NewsPageProps {
  newsId: number;
}

const NewsPage: React.FC<NewsPageProps> = ({ newsId }) => {
  return (
    <div className={scss.content}>
      <NewsDetailContent newsId={newsId} />
    </div>
  );
};

export default NewsPage;