"use client";

import React from "react";
import scss from "./GraduatesMainContent.module.scss";
import Image from "next/image";
import { useGetSuccessfulGraduatesQuery } from "@/redux/api/successful_graduates";
import { useLanguageStore } from "@/stores/useLanguageStore";

const GraduatesMainContent = () => {
    const { data, isLoading, isError } = useGetSuccessfulGraduatesQuery();
    const { isKyrgyz, t } = useLanguageStore();

    if (isLoading)
        return (
            <div className={scss.loading}>
                {t("Жүктөлүүдө...", "Загрузка...")}
            </div>
        );
    if (isError || !data)
        return (
            <div className={scss.error}>
                {t(
                    "Маалыматтарды жүктөөдө ката кетти.",
                    "Ошибка при загрузке данных."
                )}
            </div>
        );

    return (
        <section className={scss.GraduatesMainContent}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.titleText}>
                        {t("Бүтүрүүчүлөр", "Выпускники")}
                    </h1>
                    <div className={scss.mainContent}>
                        <h1 className={scss.mainContent_title}>
                            {t("Гимназиянын сыймыгы", "Гордость гимназии")}
                        </h1>
                        <div className={scss.graduates}>
                            {data?.map((item, index) => (
                                <div
                                    key={item.graduate.name}
                                    className={`${scss.mainContent_graduates} ${scss.animateFromTop}`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <Image
                                        quality={70}
                                        width={700}
                                        height={500}
                                        className={scss.graduates_Img}
                                        src={item.image}
                                        alt={t("бүтүрүүчүлөр", "выпускники")}
                                    />
                                    <div className={scss.graduateinfo}>
                                        <div className={scss.nameInfo}>
                                            <h1 className={scss.graduateName}>
                                                <div>
                                                    {item.graduate.surname}
                                                </div>
                                                <div>{item.graduate.name}</div>
                                                <div>
                                                    {item.graduate.last_name}
                                                </div>
                                            </h1>
                                            <h1 className={scss.graduateDate}>
                                                {item.year}
                                            </h1>
                                        </div>
                                        <hr className={scss.hr} />
                                        <div className={scss.biography}>
                                            <h1 className={scss.graduateBio}>
                                                {isKyrgyz
                                                    ? item.content_ky
                                                    : item.content_ru}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraduatesMainContent;
