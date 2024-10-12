"use client";
import React from "react";
import { useGetNewsQuery } from "@/redux/api/news";
import styles from "./NewsContent.module.scss";
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
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <h1>{t("Жаңылыктар", "Новости")}</h1>
        <div className={styles.newsGrid}>
          {sortedNews?.slice(0, 6).map((item) => (
            <div className={styles.card} key={item.id}>
              <Image
                src={getImageUrl(item.image)}
                alt={isKyrgyz ? item.description_ky || "" : item.description_ru || ""}
                width={300}
                height={200}
                priority
                quality={70}
              />
              <div className={styles.cardContent}>
                <p>{parse(isKyrgyz ? item.description_ky || "" : item.description_ru || "")}</p>
                <div className={styles.cardFooter}>
                  <span>{new Date(item.created_at).toLocaleDateString()}</span>
                  <div className={styles.comments}>
                    <LuMessagesSquare />
                    <span>{item.comments_count}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleNavigate}>
            {t("Бардык жаңылыктар", "Все новости")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsContent;