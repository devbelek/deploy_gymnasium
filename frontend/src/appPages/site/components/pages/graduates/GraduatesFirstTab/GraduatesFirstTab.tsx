"use client";
import React, { useState, useEffect } from "react";
import scss from "./GraduatesFirstTab.module.scss";
import profile from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetGraduatesQuery } from "@/redux/api/graduates";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { motion, AnimatePresence } from "framer-motion";

interface Graduate {
  surname: string;
  name: string;
  last_name: string;
  year: number;
  ort: number | null;
}

const GraduatesFirstTab = () => {
  const { data, isLoading, isError } = useGetGraduatesQuery();
  const [filteredData, setFilteredData] = useState<Graduate[]>([]);
  const { isKyrgyz, t } = useLanguageStore();
  const [show, setShow] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const graduatesPerPage = 100;

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  if (isLoading)
    return (
      <div className={scss.loading}>{t("Жүктөлүүдө...", "Загрузка...")}</div>
    );
  if (isError || !data) {
    return (
      <div className={scss.error}>
        {t("Маалыматты жүктөөдө ката кетти", "Ошибка при загрузке данных")}
      </div>
    );
  }

  const filterData = (year?: number) => {
    if (year) {
      const result = data.filter((graduate) => graduate.year === year);
      setFilteredData(result);
      setSelectedYear(year);
    } else {
      setFilteredData(data);
      setSelectedYear(null);
    }
    setShow(false);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Pagination logic
  const indexOfLastGraduate = currentPage * graduatesPerPage;
  const indexOfFirstGraduate = indexOfLastGraduate - graduatesPerPage;
  const currentGraduates = filteredData.slice(
    indexOfFirstGraduate,
    indexOfLastGraduate
  );
  const totalPages = Math.ceil(filteredData.length / graduatesPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const lowerLimit = Math.max(2, currentPage - 2);
    const upperLimit = Math.min(totalPages - 1, currentPage + 2);

    // Always show the first page
    pageNumbers.push(1);

    // Show "..." before the current block if needed
    if (lowerLimit > 2) {
      pageNumbers.push(-1);
    }

    // Show pages in the range of current page
    for (let i = lowerLimit; i <= upperLimit; i++) {
      pageNumbers.push(i);
    }

    // Show "..." after the current block if needed
    if (upperLimit < totalPages - 1) {
      pageNumbers.push(-2);
    }

    // Always show the last page
    pageNumbers.push(totalPages);

    return pageNumbers.map((number, index) => {
      if (number === -1 || number === -2) {
        return (
          <span key={index} className={scss.dots}>
            ...
          </span>
        );
      }
      return (
        <button
          key={index}
          className={`${scss.pageButton} ${
            currentPage === number ? scss.activePage : ""
          }`}
          onClick={() => paginate(number)}
          disabled={currentPage === number}
        >
          {number < 10 ? `0${number}` : number}
        </button>
      );
    });
  };

  const uniqueYears = Array.from(
    new Set(data.map((graduate) => graduate.year))
  ).sort((a, b) => b - a);

  return (
    <section className={scss.GraduatesFirstTab}>
      <div className="container">
        <div className={scss.content}>
          <h2 className={scss.title}>
            {t("Бүтүрүүчүлөр тизмеси", "Список выпускников")}
          </h2>
          <div className={scss.filterContainer}>
            <motion.button
              className={scss.mainFilterButton}
              onClick={() => setShow(!show)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedYear ? selectedYear : t("Баары", "Все")}
            </motion.button>
            <AnimatePresence>
              {show && (
                <motion.div
                  className={scss.yearsContainer}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <motion.button
                    className={`${scss.yearButton} ${
                      !selectedYear ? scss.active : ""
                    }`}
                    onClick={() => filterData()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("Баары", "Все")}
                  </motion.button>
                  {uniqueYears.map((year) => (
                    <motion.button
                      key={year}
                      className={`${scss.yearButton} ${
                        selectedYear === year ? scss.active : ""
                      }`}
                      onClick={() => filterData(year)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {year}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className={scss.table}>
            <div className={scss.tableTitle}>
              <h1 className={scss.titleText}>No.</h1>
              <h1 className={scss.titleText}>
                {t("Окуучунун аты", "Имя ученика")}
              </h1>
            </div>
            <div className={scss.tableContent}>
              <div className={scss.hr}></div>
              {currentGraduates.map((item, index) => (
                <div key={index} className={scss.studentInfo}>
                  <h1 className={scss.tableTextNumber}>
                    {indexOfFirstGraduate + index + 1}
                  </h1>
                  <h1 className={scss.tableName}>
                    <Image
                      className={scss.studentIcon}
                      src={profile}
                      alt="Фото профиля"
                      width={50}
                      height={50}
                    />
                    {item.surname} {item.name} {item.last_name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          {/* Pagination */}
          <div className={scss.pagination}>
            {renderPagination()}
            {currentPage < totalPages && (
              <button
                className={scss.pageButton}
                onClick={() => paginate(currentPage + 1)}
              >
                {t("Кийинки", "Далее")}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduatesFirstTab;
