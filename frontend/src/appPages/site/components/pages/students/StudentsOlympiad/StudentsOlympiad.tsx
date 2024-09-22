import Link from "next/link";
import scss from "./StudentsOlympiad.module.scss";
const StudentsOlympiad = () => {
    return (
        <section className={scss.content}>
            <Link href={"students/olympians"} className={scss.OlimpBlock}>
                <h1 className={scss.OlimpBlock_text}>Участники олимпиад</h1>
            </Link>
        </section>
    );
};

export default StudentsOlympiad;
