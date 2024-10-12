"use client";

import React, { useState, useMemo, useEffect } from "react";
import scss from "./NewsMainContent.module.scss";
import Image from "next/image";
import { useGetNewsQuery } from "@/redux/api/news";
import { LuMessagesSquare } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";

const getImageUrl = (imageUrl: string) => {
  const cleanUrl = imageUrl.replace(/^https?:\/\/[^/]+\/media/, "");
  return `${process.env.NEXT_PUBLIC_API}/media${cleanUrl}`;
};

export namespace NEWS {
  export interface INews {
    id: number;
    author: string;
    image: string;
    content: string;
    content_ky: string;
    content_ru: string;
    created_at: string;
    updated_at: string;
    description: string;
    description_ky: string;
    description_ru: string;
    comments_count: number;
  }
}

const NewsMainContent: React.FC = () => {
  const { data: news, isLoading } = useGetNewsQuery(undefined, {
    selectFromResult: (result) => ({
      data: result.data as NEWS.INews[] | undefined,
      isLoading: result.isLoading,
    }),
  });

  const router = useRouter();
  const { isKyrgyz, t } = useLanguageStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const itemsPerPage = 9;

  useEffect(() => {
    if (news && !isLoading) {
      setTimeout(() => setIsDataLoaded(true), 500);
    }
  }, [news, isLoading]);

  const sortedNews = useMemo(() => {
    return news
      ? [...news].sort(
          (a: NEWS.INews, b: NEWS.INews) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
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
          className={currentPage === i ? scss.active : ""}
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

  const SkeletonCard = () => (
    <motion.div
      className={`${scss.news_card} ${scss.skeleton}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={scss.skeleton_image}></div>
      <div className={scss.skeleton_title}></div>
      <div className={scss.skeleton_date}></div>
    </motion.div>
  );

  const NewsCard = ({ item }: { item: NEWS.INews }) => (
    <motion.div
      className={scss.news_card}
      onClick={() => handleNavigate(item.id)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={getImageUrl(item.image)}
        alt={isKyrgyz ? item.description_ky || "" : item.description_ru || ""}
        width={266}
        height={220}
      />
      <h2 className={scss.news_title}>
        {parse(isKyrgyz ? item.description_ky || "" : item.description_ru || "")}
      </h2>
      <div className={scss.news_end}>
        <p>{new Date(item.created_at).toLocaleDateString()}</p>
        <div className={scss.comments}>
          <LuMessagesSquare />
          <span>{item.comments_count}</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className={scss.NewsMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>{t("Жаңылыктар", "Новости")}</h1>
            <hr />
          </div>
          <AnimatePresence>
            <div className={scss.news_cards}>
              {!isDataLoaded
                ? Array(itemsPerPage)
                    .fill(null)
                    .map((_, index) => (
                      <SkeletonCard key={`skeleton-${index}`} />
                    ))
                : currentNews.map((item) => (
                    <NewsCard key={item.id} item={item} />
                  ))}
            </div>
          </AnimatePresence>
          {totalPages > 1 && isDataLoaded && (
            <motion.div
              className={scss.pagination}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
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
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsMainContent;