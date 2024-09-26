"use client";

import Link from "next/link";

import scss from "./GraduatesPage.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";
const GraduatesPage = () => {
    const { isKyrgyz, t } = useLanguageStore();

    return (
        <>
            <div className={scss.content}>
                <div className="container">
                    <div className={scss.graduatesTable}>
                        <Link
                            className={scss.Block}
                            href={"/graduates/best_graduates"}
                        >
                            {t("Гимназиянын сыймыгы", "Гордость гимназии")}
                        </Link>
                        <Link
                            className={scss.Block}
                            href={"/graduates/graduates_table"}
                        >
                            {t("Бүтүрүүчүлөр тизмеси", "Список выпускников")}{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GraduatesPage;
