"use client";
import { useGetSearchQuery } from "@/redux/api/search";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import Link from "next/link";
import styles from "./Search.module.scss";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";

  const searchRequest = useMemo(() => {
    if (!query) return { school_class: "", full_name: "" };
    if (/^\d+$/.test(query)) {
      return { school_class: query };
    }
    return { full_name: query };
  }, [query]);

  const { data, error, isLoading } = useGetSearchQuery(searchRequest, {
    //+
    skip: !searchRequest.school_class && !searchRequest.full_name,
  });

  return (
    <div className={styles.searchContainer}>
      <h1 className={styles.title}>Результаты поиска для: {query}</h1>
      {isLoading && <p className={styles.loading}>Загрузка...</p>}
      {error ? (
        <p className={styles.error}>
          Произошла ошибка при поиске. Попробуйте снова позже.
        </p>
      ) : null}
      {!isLoading && !error && data && data.length > 0 ? (
        <ul className={styles.resultList}>
          {data.map((result) => (
            <li key={result.id} className={styles.resultItem}>
              {result.school_class && result.school_class?.grade ? (
                <Link
                  href={{
                    pathname: "/students/school_class",
                    query: { grade: result.school_class?.grade },
                  }}
                  className={styles.resultLink}
                >
                  {result.last_name} {result.name} (Класс:{" "}
                  {result.school_class?.grade})
                </Link>
              ) : (
                <span>
                  {result.last_name} {result.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : !isLoading && !error ? (
        <p className={styles.noResults}>Результатов не найдено</p>
      ) : null}
    </div>
  );
};

export default Search;
