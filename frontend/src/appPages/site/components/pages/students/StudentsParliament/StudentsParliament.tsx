"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import scss from "./StudentsParliament.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";

const StudentsParliament = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { t } = useLanguageStore(state => ({
        t: mounted ? state.t : (ky: string, ru: string) => ru
    }));

    return (
        <section className={scss.content}>
            <Link
                href={"/students/studentsparliamenttable"}
                className={scss.ParliamBlock}
            >
                <h1 className={scss.ParliamBlock_text}>
                    {t("Координациялык кеңеш", "Координационный кенеш")}
                </h1>
            </Link>
        </section>
    );
};

export default StudentsParliament;