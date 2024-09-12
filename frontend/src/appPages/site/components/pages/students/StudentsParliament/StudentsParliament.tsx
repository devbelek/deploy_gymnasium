import Link from "next/link";
import scss from "./StudentsParliament.module.scss";
const StudentsParliament = () => {
    return (
        <section className={scss.content}>
            <Link
                href={"/students/studentsparliamenttable"}
                className={scss.ParliamBlock}
            >
                <h1 className={scss.ParliamBlock_text}>Школьный парламент</h1>
            </Link>
        </section>
    );
};

export default StudentsParliament;
