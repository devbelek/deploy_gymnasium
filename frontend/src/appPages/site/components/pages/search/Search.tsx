"use client";
import { useGetSearchQuery } from "@/redux/api/search";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import StudentsMainContent from "../students/StudentsMainContent/StudentsMainContent";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";

  const searchRequest = useMemo(() => {
    if (!query) return null;
    if (/^\d+$/.test(query)) {
      return { school_class__grade: query };
    }
    return { full_name: query };
  }, [query]);

  const { data, error, isLoading } = useGetSearchQuery(searchRequest, {
    skip: !searchRequest,
  });

  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>Результаты поиска для: {query}</h1>
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Произошла ошибка при поиске</p>}
      {!isLoading && !error && data && data.length > 0 ? (
        <ul>
          {data.map((result) => (
            <li key={result.id}>
              {result.last_name} {result.name}{" "}
              {result.school_class__grade &&
                `(Класс: ${result.school_class__grade})`}
            </li>
          ))}
        </ul>
      ) : !isLoading && !error ? (
        <p>Результатов не найдено</p>
      ) : null}
      <h1>Студенты</h1>
      <h1>Студенты</h1>
      <h1>Студенты</h1>
    </div>
  );
};

export default Search;
