import scss from "./StudentsMainContent.module.scss";
import { useRouter } from "next/navigation";

const StudentsMainContent = () => {
    const numbers = [5, 6, 7, 8, 9, 10, 11];
    const router = useRouter();

    return (
        <section className={scss.content}>
            <div className={scss.classes}>
                {numbers.map((item) => (
                    <button
                        key={item}
                        onClick={() =>
                            router.push(`/students/school_class?grade=${item}`)
                        }
                        className={scss.block}
                    >
                        <h1 className={scss.block_text}>{item} класс</h1>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default StudentsMainContent;
