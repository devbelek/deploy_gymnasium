"use client";

import scss from "./OlympaidsSelection.module.scss";
import React from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useGetOlympiansQuery } from "@/redux/api/olympians";

type Category = {
    choosing: string;
    choosing_ky: string;
    choosing_ru?: string | null;
    id: number;
};

const OlympaidsSelection = () => {
    const router = useRouter();
    const { isKyrgyz, t } = useLanguageStore();
    const { data, isError, isLoading } = useGetOlympiansQuery();

    if (isLoading) {
        return (
            <div className={scss.loading}>
                {t("Жүктөлүүдө...", "Загрузка...")}
            </div>
        );
    }

    if (isError || !data || data.length === 0) {
        return (
            <div className={scss.error}>
                {t(
                    "Маалыматты жүктөөдө ката кетти",
                    "Ошибка при загрузке данных"
                )}
            </div>
        );
    }

    const uniqueCategories = data.reduce<Category[]>((acc, item) => {
        const category = item.name_of_olympia;
        if (
            category &&
            !acc.some((cat) => cat.choosing === category.choosing)
        ) {
            acc.push({
                choosing: category.choosing,
                choosing_ky: category.choosing_ky,
                choosing_ru: category.choosing_ru,
                id: item.id,
            });
        }
        return acc;
    }, []);

    return (
        <div className={scss.OlympaidsSelection}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.title}>
                        {t("Олимпияданын түрлөрү", "Виды олимпияд")}
                    </h1>
                    <div className={scss.cards}>
                        {uniqueCategories.map((category) => (
                            <div
                                key={category.id}
                                onClick={() =>
                                    router.push(
                                        `/students/olympians/olymp_categories/${category.id}`
                                    )
                                }
                                className={scss.card}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        router.push(
                                            `/students/olympians/olymp_categories/${category.id}`
                                        );
                                    }
                                }}
                                aria-label={
                                    isKyrgyz
                                        ? category.choosing_ky
                                        : category.choosing_ru ||
                                          category.choosing
                                }
                            >
                                <h2>
                                    {isKyrgyz
                                        ? category.choosing_ky
                                        : t(
                                              category.choosing_ru ??
                                                  category.choosing,
                                              category.choosing
                                          )}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OlympaidsSelection;
