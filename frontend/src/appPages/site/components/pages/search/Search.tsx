"use client";
import { useGetSearchQuery } from "@/redux/api/search";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import StudentsMainContent from "../students/StudentsMainContent/StudentsMainContent";
import { SEARCH } from "@/types"; // Предположим, что эти типы находятся в файле types.ts

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";

  const searchRequest: SEARCH.GetSearchRequest = useMemo(() => {
    if (!query) return null;
    if (/^\d+$/.test(query)) {
      return { school_class__grade: query };
    }
    return { full_name: query };
  }, [query]);

  const { data, error, isLoading } = useGetSearchQuery(searchRequest, {
    skip: !searchRequest,
  });

  const errorMessage = error ? (error as Error)?.message || String(error) : null;

  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>Результаты поиска для: {query}</h1>
      {isLoading && <p>Загрузка...</p>}
      {errorMessage && <p>Произошла ошибка при поиске: {errorMessage}</p>}
      {!isLoading && !error && data && data.length > 0 ? (
        <ul>
          {data.map((result: SEARCH.ISearch) => (
            <li key={result.id}>
              {result.full_name ? result.full_name : "Имя не указано"}{" "}
              {result.school_class__grade &&
                `(Класс: ${result.school_class__grade})`}
            </li>
          ))}
        </ul>
      ) : !isLoading && !error ? (
        <p>Результатов не найдено</p>
      ) : null}
      <h1>Студенты</h1>
    </div>
  );
};

export default Search;
