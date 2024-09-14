"use client";

import { useParams } from 'next/navigation';
import NewsCommentsContent from "./news/NewsCommentsContent/NewsCommentsContent";
import NewsMainContent from "./news/NewsMainContent/NewsMainContent";
import NewsDetailContent from "@/appPages/site/components/pages/NewsDetailContent";
import scss from "./NewsPage.module.scss";

const Page = () => {
  const params = useParams();
  const newsId = parseInt(params.newsDetail as string, 10);

  if (isNaN(newsId)) {
    return <div>Неверный идентификатор новости</div>;
  }

  return <NewsDetailContent newsId={newsId} />;
};

export default Page;