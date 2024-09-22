"use client";

import React from "react";
import scss from "./OlympaidTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";

import { useGetOlympiansSelectionQuery } from "@/redux/api/olympians";
import { useParams } from "next/navigation";
import Image from "next/image";

const OlympaidTable = () => {
    const { category_id } = useParams();

    const { data, isLoading, isError } = useGetOlympiansSelectionQuery(
        String(category_id)
    );

    console.log(data);

    // if (isLoading) return <div className={scss.loading}>Загрузка...</div>;
    // if (isError || !data) {
    //     return <div className={scss.error}>Ошибка при загрузке данных.</div>;
    // }

    return (
        <section className={scss.OlympaidTable}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>Олимпийцы</h2>
                    {/* <h2 className={scss.title}>{category_id}</h2> */}
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя ученика</h1>
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
                                            alt="img"
                                        />
                                        <div className={scss.nameContent}>
                                            <h1 className={scss.tableText}>
                                                {item.student.surname}
                                            </h1>
                                            <h1 className={scss.tableText}>
                                                {item.student.name}
                                            </h1>
                                        </div>
                                    </h1>
                                    <h1 className={scss.tableTextNumber}>
                                        {item.name_of_olympia.choosing}
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

export default OlympaidTable;
