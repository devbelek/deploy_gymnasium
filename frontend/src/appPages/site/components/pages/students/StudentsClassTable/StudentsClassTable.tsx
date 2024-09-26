"use client";

import React, { useState, useEffect } from "react";
import scss from "./StudentsClassTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetStudentsClassQuery } from "@/redux/api/students";
import { useSearchParams } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const StudentClassTable: React.FC = () => {
    const searchParams = useSearchParams();
    const { isKyrgyz, t } = useLanguageStore();

    const classId = searchParams.get("grade");

    const {
        data: studentsData,
        isLoading,
        isError,
    } = useGetStudentsClassQuery(String(classId));
    const [filteredData, setFilteredData] = useState<STUDENTS.IStudent[]>([]);
    console.log(studentsData);
    useEffect(() => {
        if (studentsData) {
            const filtered = studentsData.filter(
                (student) => student.school_class.grade === String(classId)
            );

            const updatedData = filtered.map((student, index) => {
                let status_in_class = "";
                if (index === 0) {
                    status_in_class = "Президент";
                } else if (index === 1) {
                    status_in_class = t("Жиг.кенеши", "Муж.совет");
                } else if (index === 2) {
                    status_in_class = t("Кыз.кенеши", "Жен.совет");
                }
                return { ...student, status_in_class };
            });

            setFilteredData(updatedData);
        }
    }, [studentsData, classId, t, isKyrgyz]);
    if (isLoading)
        return (
            <div className={scss.loading}>
                {t("Жүктөлүүдө...", "Загрузка...")}
            </div>
        );
    if (isError || !studentsData) {
        return (
            <div className={scss.error}>
                {t(
                    "Маалыматты жүктөөдө ката кетти",
                    "Ошибка при загрузке данных"
                )}
            </div>
        );
    }
    return (
        <section className={scss.StudentClassTable}>
            <div className="container">
                <div className={`${scss.content} ${scss.animateFromLeft}`}>
                    <div className={scss.titleBlock}>
                        <div className={scss.titleLeftBlock}>
                            <h1 className={scss.titleText}>
                                {t("Кл.жетекчи", "Кл.руководитель")}
                            </h1>{" "}
                            <h1 className={scss.tableText}>
                                {filteredData[0] &&
                                    filteredData[0].classroom_teacher
                                        .map((teacher) => teacher.name)
                                        .join(", ")}
                            </h1>
                        </div>
                        <h2 className={scss.title}>{classId} Класс</h2>
                    </div>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>
                                {" "}
                                {t("Окуучунун аты", "Имя ученика")}
                            </h1>
                            <h1 className={scss.titleText}>Статус</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <div
                                        key={`${item.surname}-${item.name}-${index}`}
                                        className={`${scss.studentInfo} ${scss.animateFromLeft}`}
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        <h1 className={scss.tableTextNumber}>
                                            {index + 1}
                                        </h1>
                                        <h1 className={scss.tableName}>
                                            <Image
                                                className={scss.studentIcon}
                                                src={avatar}
                                                alt={`Аватар студента ${item.name} ${item.surname}`}
                                            />
                                            {item.surname} {item.name}
                                        </h1>
                                        <h1 className={scss.statusTable}>
                                            {item.status_in_class}
                                        </h1>
                                    </div>
                                ))
                            ) : (
                                <h1 className={scss.noClass}>
                                    Класс {classId}{" "}
                                    {t("табылган жок", "не найден")}.
                                </h1>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentClassTable;
