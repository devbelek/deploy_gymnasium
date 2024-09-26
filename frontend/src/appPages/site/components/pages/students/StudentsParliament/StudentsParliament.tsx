import Link from "next/link";
import scss from "./StudentsParliament.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";
const StudentsParliament = () => {
    const { isKyrgyz, t } = useLanguageStore();

    return (
        <section className={scss.content}>
            <Link
                href={"/students/studentsparliamenttable"}
                className={scss.ParliamBlock}
            >
                <h1 className={scss.ParliamBlock_text}>
                    {" "}
                    {t("Мектеп парламенти", "Школьный парламент")}
                </h1>
            </Link>
        </section>
    );
};

export default StudentsParliament;
