"use client";

import React from "react";
import scss from "./OlympaidTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";

import { useGetOlympiansQuery } from "@/redux/api/olympians";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

type Level = "level_1" | "level_2" | "level_3";
type Place = "fist" | "second" | "third";

const OlympaidTable = () => {
    const { category_id } = useParams();
    const { t } = useLanguageStore();

    const { data, isLoading, isError } = useGetOlympiansQuery();

    if (isLoading) {
        return (
            <div className={scss.loading}>
                {t("Жүктөлүүдө...", "Загрузка...")}
            </div>
        );
    }
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

    const categoryItem = data.find((item) => item.id === Number(category_id));

    if (!categoryItem) {
        return (
            <div className={scss.error}>
                {t("Категория табылган жок", "Категория не найдена")}
            </div>
        );
    }
    const filteredStudents = data.filter(
        (item) =>
            item.name_of_olympia.choosing ===
            categoryItem.name_of_olympia.choosing
    );

    const getLevelText = (level: Level) => {
        switch (level) {
            case "level_3":
                return t("Республика", "Республика");
            case "level_2":
                return t("Область", "Область");
            case "level_1":
                return t("Район", "Район");
            default:
                return level;
        }
    };

    const getPlaceText = (place: Place) => {
        switch (place) {
            case "fist":
                return "1 ";
            case "second":
                return "2 ";
            case "third":
                return "3 ";
            default:
                return place;
        }
    };

    return (
        <section className={scss.OlympaidTable}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.titleContent}>
                        <h2 className={scss.title}>
                            {t("Олимпиядачылар", "Олимпийцы")}
                        </h2>
                        <h2 className={scss.title}>
                            {categoryItem.name_of_olympia.choosing}
                        </h2>
                    </div>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>
                                {t("Окуучунун аты", "Имя ученика")}
                            </h1>
                            <h1 className={scss.levelTitleText}>
                                {t("Денгээл", "Уровень")}
                            </h1>
                            <h1 className={scss.titleYear}>
                                {t("Жыл", "Год")}
                            </h1>
                            <h1 className={scss.titlePlace}>
                                {t("Орун", "Место")}
                            </h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((item, index) => (
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
                                        <h1 className={scss.levelText}>
                                            {getLevelText(item.level as Level)}
                                        </h1>
                                        <h1 className={scss.tableYear}>
                                            {item.year}
                                        </h1>
                                        <h1 className={scss.tablePlace}>
                                            {getPlaceText(item.place as Place)}
                                        </h1>
                                    </div>
                                ))
                            ) : (
                                <div className={scss.noResults}>
                                    {t(
                                        "Категорияга дал келген окуучулар жок",
                                        "Нет учеников, соответствующих категории"
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OlympaidTable;
