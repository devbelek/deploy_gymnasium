"use client";
import { useGetNewsQuery } from "@/redux/api/news";
import scss from "./NewsContent.module.scss";

const NewsContent = () => {
  const { data: news } = useGetNewsQuery();
  return (
    <section id={scss.content}>
      <div className="container">
        <h1>Новости</h1>
        <div className={scss.newsCard}>
          {news?.map((item) => (
            <div className={scss.card} key={item.id}>
              <img src={item.image} alt={item.image} />
              <p>{item.content}</p>
              <div className={scss.meta}>
                <span>{item.created_at}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsContent;
