"use client";

import { useGetSearchQuery } from "@/redux/api/search";
import { useSearchParams } from "next/navigation";
import React, { useMemo, Suspense } from "react";
import StudentsMainContent from "../students/studentMainContent/StudentsMainContent";

// Определим тип GetSearchRequest, если он еще не определен
type GetSearchRequest = {
  school_class__grade?: string;
  full_name?: string;
};

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";

  const searchRequest: GetSearchRequest | undefined = useMemo(() => {
    if (!query) return undefined;
    if (/^\d+$/.test(query)) {
      return { school_class__grade: query };
    }
    return { full_name: query };
  }, [query]);

  const { data, error, isLoading } = useGetSearchQuery(searchRequest as GetSearchRequest, {
    skip: !searchRequest,
  });

  const errorMessage = useMemo(() => {
    if (error) {
      if (typeof error === 'string') {
        return error;
      } else if (error instanceof Error) {
        return error.message;
      } else if (typeof error === 'object' && error !== null && 'message' in error) {
        return String((error as { message: unknown }).message);
      }
      return 'Неизвестная ошибка';
    }
    return null;
  }, [error]);

  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>Результаты поиска для: {query}</h1>
      {isLoading && <p>Загрузка...</p>}
      {errorMessage && <p>Произошла ошибка при поиске: {errorMessage}</p>}
      {!isLoading && !error && data && data.length > 0 ? (
        <ul>
          {data.map((result: SEARCH.ISearch) => (
            <li key={result.id}>
              {result.full_name}{" "}
              {result.school_class__grade &&
                `(Класс: ${result.school_class__grade})`}
            </li>
          ))}
        </ul>
      ) : !isLoading && !error ? (
        <p>Результатов не найдено</p>
      ) : null}
      <h1>Студенты</h1>
      <StudentsMainContent />
    </div>
  );
};

const Search = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default Search;