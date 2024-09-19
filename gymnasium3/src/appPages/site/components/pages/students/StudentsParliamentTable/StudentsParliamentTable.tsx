"use client";

import React from "react";
import scss from "./StudentsParliamentTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetSchoolParliamentQuery } from "@/redux/api/school_parliament";

const StudentsParliamentTable = () => {
    const { data, isLoading, isError } = useGetSchoolParliamentQuery();

    if (isLoading) return <div className={scss.loading}>Загрузка...</div>;
    if (isError || !data)
        return <div className={scss.error}>Ошибка при загрузке данных.</div>;

    return (
        <section className={scss.StudentsParliamentTable}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>Школьный парламент</h2>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя ученика</h1>
                            <h1 className={scss.titleText}>Должность</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {data?.map((item, index: number) => (
                                <div
                                    key={index}
                                    className={`${scss.studentInfo} ${scss.animateFromLeft}`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <h1 className={scss.tableTextNumber}>
                                        {index + 1}
                                    </h1>
                                    <h1 className={scss.tableName}>
                                        <Image
                                            className={scss.studentIcon}
                                            src={avatar}
                                            alt={`Аватар студента ${item.student[0].name} ${item.student[0].surname}`}
                                        />
                                        <div className={scss.nameContent}>
                                            <h1 className={scss.tableText}>
                                                {item.student[0].surname}
                                            </h1>
                                            <h1 className={scss.tableText}>
                                                {item.student[0].name}
                                            </h1>
                                        </div>
                                    </h1>
                                    <h1 className={scss.tableTextNumber}>
                                        {item.type_of_administrator.choosing}
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

export default StudentsParliamentTable;
