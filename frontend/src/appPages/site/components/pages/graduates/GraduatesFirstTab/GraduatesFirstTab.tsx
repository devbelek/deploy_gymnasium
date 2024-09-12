"use client";

import React from "react";
import scss from "./GraduatesFirstTab.module.scss";
import profile from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetGraduatesQuery } from "@/redux/api/graduates";

const GraduatesFirstTab = () => {
    const { data, isLoading, error } = useGetGraduatesQuery();

    if (isLoading) {
        return (
            <div className={scss.isLoadingBlock}>
                <p className={scss.isLoading}>Загрузка...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={scss.errorBlock}>
                <p className={scss.error}>Ошибка загрузки данных</p>
            </div>
        );
    }

    return (
        <section className={scss.GraduatesFirstTab}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>Список выпускников 2023-24</h2>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя выпускника</h1>
                            <h1 className={scss.titleText}>Орт</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {data?.map((item, index: number) => (
                                <div key={index} className={scss.studentInfo}>
                                    <h1 className={scss.tableTextNumber}>
                                        {index + 1}
                                    </h1>
                                    <h1 className={scss.tableName}>
                                        <Image
                                            className={scss.studentIcon}
                                            src={profile}
                                            alt=""
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
