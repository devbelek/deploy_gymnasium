"use client";
import React from "react";
import { useGetNewsQuery } from "@/redux/api/news";
import scss from "./NewsContent.module.scss";
import Image from "next/image";
import { LuMessagesSquare } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import parse from "html-react-parser";

const getImageUrl = (imageUrl: string) => {
  const cleanUrl = imageUrl.replace(/^https?:\/\/[^/]+\/media/, "");
  return `${process.env.NEXT_PUBLIC_API}/media${cleanUrl}`;
};

const NewsContent: React.FC = () => {
  const { data: news } = useGetNewsQuery();
  const { isKyrgyz, t } = useLanguageStore();

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/news");
  };

  const sortedNews = news
    ?.slice()
    .sort(
      (a: NEWS.INews, b: NEWS.INews) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

  const getTitle = (item: NEWS.INews) => {
    if (isKyrgyz) {
      return item.title_ky || "";
    }
    // Если русский текст отсутствует, возвращаем кыргызский
    return item.title_ru || item.title_ky || "";
  };

  return (
    <section id={scss.content}>
      <div className="container">
        <h1>{t("Жаңылыктар", "Новости")}</h1>
        <div className={scss.newsCard}>
          {sortedNews?.slice(0, 6).map((item: NEWS.INews) => (
            <div className={scss.card} key={item.id}>
              <Image
                src={getImageUrl(item.image)}
                alt={getTitle(item)}
                width={300}
                height={200}
                priority
                quality={70}
              />
              <p>{parse(getTitle(item))}</p>
              <article className={scss.end}>
                <span>{item.created_at.slice(0, 10)}</span>
                <div className={scss.comments}>
                  <LuMessagesSquare />
                  <span>{item.comments_count}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className={scss.buttonContainer}>
          <button onClick={handleNavigate}>
            {t("Бардык жаңылыктар", "Все новости")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsContent;
