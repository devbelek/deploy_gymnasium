"use client";

import React from "react";
import scss from "./NewsMainContent.module.scss";
import Image from "next/image";
import { useGetNewsQuery } from "@/redux/api/news";
import { LuMessagesSquare } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const getImageUrl = (imageUrl: string) => {
  const cleanUrl = imageUrl.replace(/^https?:\/\/[^/]+\/media/, "");
  return `${process.env.NEXT_PUBLIC_API}/media${cleanUrl}`;
};

const NewsMainContent: React.FC = () => {
  const { data: news } = useGetNewsQuery();
  const router = useRouter();
  const { isKyrgyz, t } = useLanguageStore();

  const handleNavigate = (id: number) => {
    router.push(`/news/${id}`);
  };

  return (
    <section className={scss.NewsMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>{t("Жаңылыктар", "Новости")}</h1>
            <hr />
          </div>
          <div className={scss.news_cards}>
            {news?.map((item) => (
              <div
                key={item.id}
                className={scss.news_card}
                onClick={() => handleNavigate(item.id)}
              >
                <Image
                  src={getImageUrl(item.image)}
                  alt={isKyrgyz ? item.description_ky || "" : item.description_ru || ""}
                  width={266}
                  height={220}
                />
                <h2>{isKyrgyz ? item.description_ky || "" : item.description_ru || ""}</h2>
                <div className={scss.news_end}>
                  <p>{item.created_at.slice(0, 10)}</p>
                  <div className={scss.comments}>
                    <LuMessagesSquare />
                    <span>{item.comments_count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsMainContent;
