"use client";

import React, { useState, useMemo } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const sortedNews = useMemo(() => {
    return news
      ? [...news].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      : [];
  }, [news]);

  const currentNews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedNews.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedNews, currentPage]);

  const totalPages = Math.ceil((sortedNews?.length || 0) / itemsPerPage);

  const handleNavigate = (id: number) => {
    router.push(`/news/${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
            {currentNews.map((item) => (
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
          <div className={scss.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={currentPage === page ? scss.active : ''}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsMainContent;