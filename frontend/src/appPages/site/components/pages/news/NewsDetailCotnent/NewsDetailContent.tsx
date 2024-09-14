"use client";
import { useParams } from "next/navigation";
import scss from "./NewsDetailContent.module.scss";
import { useGetDetNewsQuery } from "@/redux/api/news";
import Image from "next/image";
import NewsCommentsContent from "../NewsCommentsContent/NewsCommentsContent";

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : NaN;

  const { data, isLoading, error } = useGetDetNewsQuery(newsId);

  if (isNaN(newsId)) {
    return <div>Некорректный идентификатор новости</div>;
  }

  if (isLoading) return <div>Загрузка новости...</div>;
  if (error) return <div>Ошибка при загрузке новости</div>;
  if (!data) return <div>Новость не найдена</div>;

  return (
    <div className={scss.NewsDetailContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>Новости</h1>
            <hr />
          </div>
          <div className={scss.newsContent}>
            <h1>{data.description}</h1>
            <Image
              src={data.image}
              alt={data.description}
              width={700}
              height={500}
              quality={70}
              property="img"
            />
            <p>{data.content}</p>
            <div className={scss.newsInfo}>
              <p>Автор: {data.author}</p>
              <p>Дата публикации: {new Date(data.created_at).toLocaleString()}</p>
              <p>Последнее обновление: {new Date(data.updated_at).toLocaleString()}</p>
            </div>
            <hr />
          </div>
          <NewsCommentsContent />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;