"use client"; // Это позволит использовать клиентские хуки, такие как useParams

import { useParams } from 'next/navigation';
import NewsPage from "@/appPages/site/components/pages/NewsPage";

const Page = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : null;

  if (newsId === null || isNaN(newsId)) {
    return <div>Неверный идентификатор новости</div>;
  }

  return <NewsPage newsId={newsId} />;
};

export default Page;
