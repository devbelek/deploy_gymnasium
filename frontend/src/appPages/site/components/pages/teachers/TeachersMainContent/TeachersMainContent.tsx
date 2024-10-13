"use client";
import React, { useState } from "react";
import { useGetTeachersQuery } from "@/redux/api/teachers";
import scss from "./TeachersMainContent.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import TeachersSkeleton from "./TeachersSkeleton";
import TeacherImg from "../../../../../../assets/images/teacher_img.jpg";

const TeachersMainContent: React.FC = () => {
  const { data, isLoading, error } = useGetTeachersQuery();
  const router = useRouter();
  const [filter, setFilter] = useState<string | null>(null);
  const { isKyrgyz, t } = useLanguageStore();

  if (isLoading) {
    return <TeachersSkeleton />;
  }

  if (error) {
    return (
      <div>
        {t("Маалыматты жүктөөдө ката кетти", "Ошибка при загрузке данных")}
      </div>
    );
  }

  const filteredTeachers = data?.filter((teacher) => {
    if (filter === null) return true;
    if (filter === "current")
      return teacher.teachers_status === "Сейчас работает";
    if (filter === "former")
      return teacher.teachers_status === "Раньше работал(а)";
    return true;
  });

  return (
    <section className={scss.TeachersMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.head}>
            <div className={scss.head_buttons}>
              <button onClick={() => setFilter("current")}>
                {t("Азыркы мугалимдер", "Текущие учителя")}
              </button>
              <button onClick={() => setFilter(null)}>
                {t("Бардык мугалимдер", "Все учителя")}
              </button>
              <button onClick={() => setFilter("former")}>
                {t("Мурунку мугалимдер", "Бывшие учителя")}
              </button>
            </div>
            <hr />
          </div>
          <div className={scss.teacher_cards}>
            {filteredTeachers?.map((teacher) => (
              <div key={teacher.id} className={scss.teacher}>
                {teacher?.image ? (
                  <Image
                    onClick={() => router.push(`/teachers/${teacher.id}`)}
                    src={teacher.image}
                    alt={`${teacher.name} ${teacher.surname}`}
                    width={700}
                    height={500}
                    priority
                    quality={70}
                  />
                ) : (
                  <Image
                    src={TeacherImg}
                    alt={`${teacher.name} ${teacher.surname}`}
                    width={700}
                    height={500}
                    priority
                    quality={70}
                  /> // Сүрөт жок болсо текст же альтернатива
                )}
                <h1>
                  {teacher.surname} {teacher.name}
                  <br />
                  {teacher.last_name || ""}
                </h1>
                <hr />
                <p style={{ width: "100%", maxWidth: "230px" }}>
                  {isKyrgyz
                    ? teacher.subject_ky || "Сабак жок"
                    : teacher.subject_ru || "Предмет не указан"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersMainContent;
