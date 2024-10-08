import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useGetGraduatesQuery } from "@/redux/api/graduates";
import graduateFallback from "../../../../../../assets/images/Group 1000001472.png";
import { useLanguageStore } from "@/stores/useLanguageStore";

const GraduatesContent = () => {
  const { data: graduates, isLoading, isError } = useGetGraduatesQuery();
  const { isKyrgyz, t } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (graduates && graduates.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % graduates.length);
      }, 5000); // Переключение каждые 5 секунд
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

  return (
    <div className="content">
      <h1>{t("Бүтүрүүчүлөр", "Выпускники")}</h1>
      <hr />
      <div className="graduateContent">
        <div className="title">
          <p>{`${currentGraduate.name} ${currentGraduate.surname} ${currentGraduate.last_name}`}</p>
          <span>
            {currentGraduate.year && t(
              `${currentGraduate.year} жылдын бүтүрүүчүсү`,
              `Выпускник ${currentGraduate.year} года`
            )}
          </span>
          <p>{t("ОРТ баллы", "Балл ОРТ")}: {currentGraduate.ort}</p>
          <div className="wrapper">
            <GrLinkPrevious onClick={handlePrev} />
            <GrLinkNext onClick={handleNext} />
          </div>
        </div>
        <div className="image">
          <Image
            src={currentGraduate.image || graduateFallback}
            alt={`${currentGraduate.name} ${currentGraduate.surname}`}
            width={340}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default GraduatesContent;