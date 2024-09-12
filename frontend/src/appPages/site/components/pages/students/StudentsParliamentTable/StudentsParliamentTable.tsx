"use client";

import React from "react";
import scss from "./StudentsParliamentTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetStudentsQuery } from "@/redux/api/students";

const StudentsParliamentTable = () => {
    const { data, isLoading, isError } = useGetStudentsQuery();

    if (isLoading) return <div>Загрузка...</div>;
    if (isError || !data) return <div>Ошибка при загрузке данных.</div>;

    return (
        <section className={scss.StudentsParliamentTable}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>Школьный парламент</h2>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя ученика</h1>
                            <h1 className={scss.titleText}>Класс</h1>
                            <h1 className={scss.titleText}>Кл. руководитель</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {data?.map((item, index: number) => (
                                <div
                                    key={`${item.surname}-${item.name}-${item.last_name}-${index}`}
                                    className={scss.studentInfo}
                                >
                                    <h1 className={scss.tableTextNumber}>
                                        {index + 1}
                                    </h1>
                                    <h1 className={scss.tableName}>
                                        <Image
                                            className={scss.studentIcon}
                                            src={avatar}
                                            alt="Аватар студента"
                                        />
                                        {item.surname} {item.name}{" "}
                                        {item.last_name}
                                    </h1>
                                    <h1 className={scss.tableText}>
                                        {item.school_class.grade}-
                                        {item.school_class.parallel}
                                    </h1>
                                    <h1 className={scss.tableText}>
                                        {item.classroom_teacher
                                            ?.map(
                                                (teacher: any) => teacher.name
                                            )
                                            .join(", ")}
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
