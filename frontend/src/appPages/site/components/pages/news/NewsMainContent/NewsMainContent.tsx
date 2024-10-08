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

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? scss.active : ''}
        >
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(<span key="start-ellipsis">...</span>);
      pageNumbers.unshift(
        <button key={1} onClick={() => handlePageChange(1)}>
          1
        </button>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(<span key="end-ellipsis">...</span>);
      pageNumbers.push(
        <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
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
          {totalPages > 1 && (
            <div className={scss.pagination}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={scss.navButton}
              >
                &lt;
              </button>
              {renderPaginationButtons()}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={scss.navButton}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsMainContent;