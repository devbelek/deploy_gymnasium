"use client";
import React, { useState, useEffect } from "react";
import { useGetTeachersQuery } from "@/redux/api/teachers";
import scss from "./TeachersMainContent.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import TeacherImg from "../../../../../../assets/images/teacher_img.jpg";

const TeachersMainContent: React.FC = () => {
  const { data, isLoading, error } = useGetTeachersQuery();
  const router = useRouter();
  const [filter, setFilter] = useState<string | null>(null);
  const { isKyrgyz, t } = useLanguageStore();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  // Функция для получения контента на нужном языке
  const getContent = (
    kyContent: string | undefined,
    ruContent: string | undefined,
    defaultText: { ky: string; ru: string }
  ) => {
    if (isKyrgyz) {
      return kyContent || defaultText.ky;
    } else {
      return ruContent || kyContent || defaultText.ru;
    }
  };

  const SkeletonCard = () => (
    <div className={`${scss.teacher} ${scss.skeleton}`}>
      <div className={scss.skeletonImage}></div>
      <div className={scss.skeletonTitle}></div>
      <div className={scss.skeletonText}></div>
    </div>
  );

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
              <button
                onClick={() => setFilter("current")}
                className={filter === "current" ? scss.activeButton : ""}
              >
                {t("Азыркы мугалимдер", "Текущие учителя")}
              </button>
              <button
                onClick={() => setFilter(null)}
                className={filter === null ? scss.activeButton : ""}
              >
                {t("Бардык мугалимдер", "Все учителя")}
              </button>
              <button
                onClick={() => setFilter("former")}
                className={filter === "former" ? scss.activeButton : ""}
              >
                {t("Мурунку мугалимдер", "Бывшие учителя")}
              </button>
            </div>
            <hr />
          </div>
          <div className={scss.teacher_cards}>
            {(showSkeleton ? Array(8).fill(null) : filteredTeachers)?.map(
              (teacher, index) => (
                <div
                  key={teacher?.id || index}
                  className={`${scss.teacher} ${
                    showSkeleton ? scss.skeleton : ""
                  }`}
                >
                  {showSkeleton ? (
                    <>
                      <div className={scss.skeletonImage}></div>
                      <div className={scss.skeletonTitle}></div>
                      <div className={scss.skeletonText}></div>
                    </>
                  ) : (
                    <>
                      {teacher?.image ? (
                        <Image
                          onClick={() => router.push(`/teachers/${teacher.id}`)}
                          src={teacher.image}
                          alt={`${teacher.name} ${teacher.surname}`}
                          width={700}
                          height={500}
                          priority
                          quality={70}
                          className={scss.teacherImage}
                        />
                      ) : (
                        <Image
                          onClick={() => router.push(`/teachers/${teacher.id}`)}
                          src={TeacherImg}
                          alt={`${teacher.name} ${teacher.surname}`}
                          width={700}
                          height={500}
                          priority
                          quality={70}
                          className={scss.teacherImage}
                        />
                      )}
                      <h1>
                        {teacher.surname} {teacher.name}
                        <br />
                        {teacher.last_name || ""}
                      </h1>
                      <hr />
                      <p style={{ width: "100%", maxWidth: "230px" }}>
                        {getContent(teacher.subject_ky, teacher.subject_ru, {
                          ky: "Сабак жок",
                          ru: "Предмет не указан",
                        })}
                      </p>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersMainContent;
