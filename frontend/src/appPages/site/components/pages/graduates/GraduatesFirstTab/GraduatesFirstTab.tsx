"use client";

import React, { useState, useEffect } from "react";
import scss from "./GraduatesFirstTab.module.scss";
import profile from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetGraduatesQuery } from "@/redux/api/graduates";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { motion, AnimatePresence } from "framer-motion";

const GraduatesFirstTab = () => {
    const { data, isLoading, isError } = useGetGraduatesQuery();
    const [filteredData, setFilteredData] = useState(data || []);
    const { isKyrgyz, t } = useLanguageStore();
    const [show, setShow] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);

    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    if (isLoading)
        return (
            <div className={scss.loading}>
                {t("Жүктөлүүдө...", "Загрузка...")}
            </div>
        );
    if (isError || !data) {
        return (
            <div className={scss.error}>
                {t(
                    "Маалыматты жүктөөдө ката кетти",
                    "Ошибка при загрузке данных"
                )}
            </div>
        );
    }

    const filterData = (year) => {
        if (year) {
            const result = data.filter((graduate) => graduate.year === year);
            setFilteredData(result);
            setSelectedYear(year);
        } else {
            setFilteredData(data);
            setSelectedYear(null);
        }
        setShow(false);
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
                                        className={`${scss.yearButton} ${!selectedYear ? scss.active : ''}`}
                                        onClick={() => filterData()}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {t("Баары", "Все")}
                                    </motion.button>
                                    {uniqueYears.map((year) => (
                                        <motion.button
                                            key={year}
                                            className={`${scss.yearButton} ${selectedYear === year ? scss.active : ''}`}
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
                            {filteredData.map((item, index) => (
                                <div key={index} className={scss.studentInfo}>
                                    <h1 className={scss.tableTextNumber}>
                                        {index + 1}
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
                </div>
            </div>
        </section>
    );
};

export default GraduatesFirstTab;