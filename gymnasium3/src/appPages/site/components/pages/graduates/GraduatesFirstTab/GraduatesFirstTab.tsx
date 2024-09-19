"use client";

import React, { useState } from "react";
import scss from "./GraduatesFirstTab.module.scss";
import profile from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetGraduatesQuery } from "@/redux/api/graduates";

const GraduatesFirstTab = () => {
    const { data, isLoading, isError } = useGetGraduatesQuery();
    const [filteredData, setFilteredData] = useState(data || []);

    if (isLoading) return <div className={scss.loading}>Загрузка...</div>;
    if (isError || !data)
        return <div className={scss.error}>Ошибка при загрузке данных.</div>;

    const filterData = (year?: number) => {
        if (year) {
            const result = data.filter((graduate) => graduate.year === year);
            setFilteredData(result);
        } else {
            setFilteredData(data);
        }
    };

    const uniqueYears = Array.from(
        new Set(data.map((graduate) => graduate.year))
    );

    return (
        <section className={scss.GraduatesFirstTab}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>Список выпускников</h2>
                    <div className={scss.show}>
                        <h1 className={scss.showTitle}>Фильтрация</h1>
                        <div className={scss.selector}>
                            <button
                                className={scss.button}
                                onClick={() => filterData()}
                            >
                                Все
                            </button>
                            {uniqueYears.map((year) => (
                                <div key={year}>
                                    <button
                                        className={scss.button}
                                        onClick={() => filterData(year!)}
                                    >
                                        {year}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* )} */}
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя выпускника</h1>
                            <h1 className={scss.titleText}>Орт</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {(filteredData.length > 0
                                ? filteredData
                                : data
                            )?.map((item, index: number) => (
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
                                        {item.surname} {item.name}{" "}
                                        {item.last_name}
                                    </h1>
                                    <h1 className={scss.tableText}>
                                        {item.ort}
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
