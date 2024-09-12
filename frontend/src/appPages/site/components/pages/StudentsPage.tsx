"use client";
import { useGetStudentsQuery } from "@/redux/api/students";
import scss from "./StudentsPage.module.scss";
import StudentsMainContent from "./students/StudentsMainContent/StudentsMainContent";
import StudentsOlympiad from "./students/StudentsOlympiad/StudentsOlympiad";
import StudentsParliament from "./students/StudentsParliament/StudentsParliament";

const StudentsPage = () => {
    return (
        <section className={scss.StudentsPage}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.Title}>Все ученики</h1>
                    <div className={scss.heroContent}>
                        <div className={scss.StudentsMainContent}>
                            <StudentsMainContent />
                        </div>
                        <div className={scss.blocks}>
                            <StudentsOlympiad />
                            <StudentsParliament />
                        </div>
                    </div>{" "}
                </div>
            </div>
        </section>
    );
};

export default StudentsPage;
