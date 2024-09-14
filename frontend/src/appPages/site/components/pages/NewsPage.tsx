"use client";

import NewsDetailContent from "./news/NewsDetailContent/NewsDetailContent";
import NewsMainContent from "./news/NewsMainContent/NewsMainContent";
import scss from "./NewsPage.module.scss";
import { useRouter } from "next/navigation";

interface NewsPageProps {
  newsId?: number;
}

const NewsPage: React.FC<NewsPageProps> = ({ newsId }) => {
  const router = useRouter();

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
