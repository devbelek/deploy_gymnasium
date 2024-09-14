"use client";

import { useParams } from 'next/navigation';
import NewsDetailContent from "@/appPages/site/components/pages/news/NewsDetailCotnent/NewsDetailContent";

const Page = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : null;

  console.log('Page component rendered, newsId:', newsId);

  if (newsId === null || isNaN(newsId)) {
    return <div>Неверный идентификатор новости</div>;
  }

  return <NewsDetailContent newsId={newsId} />;
};

export default Page;