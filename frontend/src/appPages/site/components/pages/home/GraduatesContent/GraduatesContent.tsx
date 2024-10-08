import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useGetGraduatesQuery } from "@/redux/api/graduates";
import { useLanguageStore } from "@/stores/useLanguageStore";
import styles from './GraduatesContent.module.scss';

const GraduatesContent = () => {
  const { data: graduates, isLoading, isError } = useGetGraduatesQuery();
  const { isKyrgyz, t } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (graduates && graduates.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % graduates.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [graduates]);

  const handlePrev = () => {
    if (graduates) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + graduates.length) % graduates.length);
    }
  };

  const handleNext = () => {
    if (graduates) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % graduates.length);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading graduates data</div>;
  if (!graduates || graduates.length === 0) return null;

  const currentGraduate = graduates[currentIndex];

  // Проверяем, есть ли изображение у текущего выпускника
  const hasImage = currentGraduate.image && currentGraduate.image !== "";

  return (
    <div className={styles.content}>
      <h1>{t("Бүтүрүүчүлөр", "Выпускники")}</h1>
      <hr />
      <div className={styles.graduateContent}>
        <div className={styles.title}>
          <p>{`${currentGraduate.name} ${currentGraduate.surname} ${currentGraduate.last_name}`}</p>
          <span>
            {currentGraduate.year && t(
              `${currentGraduate.year} жылдын бүтүрүүчүсү`,
              `Выпускник ${currentGraduate.year} года`
            )}
          </span>
          <p>{t("ОРТ баллы", "Балл ОРТ")}: {currentGraduate.ort}</p>
          <div className={styles.wrapper}>
            <GrLinkPrevious onClick={handlePrev} />
            <GrLinkNext onClick={handleNext} />
          </div>
        </div>
        {hasImage ? (
          <div className={styles.image}>
            <Image
              src={currentGraduate.image}
              alt={`${currentGraduate.name} ${currentGraduate.surname}`}
              width={340}
              height={400}
            />
          </div>
        ) : (
          <div className={styles.noImage}>
            <p>{t("Фото жок", "Фото отсутствует")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GraduatesContent;