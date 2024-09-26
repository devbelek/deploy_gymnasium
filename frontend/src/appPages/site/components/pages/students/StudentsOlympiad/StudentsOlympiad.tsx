import Link from "next/link";
import scss from "./StudentsOlympiad.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";
const StudentsOlympiad = () => {
    const { isKyrgyz, t } = useLanguageStore();

    return (
        <section className={scss.content}>
            <Link href={"students/olympians"} className={scss.OlimpBlock}>
                <h1 className={scss.OlimpBlock_text}>
                    {" "}
                    {t("Олимпия катышуучулары", "Участники олимпиады")}{" "}
                </h1>
            </Link>
        </section>
    );
};

export default StudentsOlympiad;
