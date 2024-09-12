import Link from "next/link";
import scss from "./StudentsMainContent.module.scss";

const StudentsMainContent = () => {
    const numbers = [4, 5, 6, 7, 8, 9, 10, 11];

    return (
        <section className={scss.content}>
            <div className={scss.classes}>
                {numbers.map((number) => (
                    <Link
                        key={number}
                        href={`/students/studentsclass${number}`}
                        className={scss.block}
                    >
                        <h1 className={scss.block_text}>{number} класс</h1>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default StudentsMainContent;
