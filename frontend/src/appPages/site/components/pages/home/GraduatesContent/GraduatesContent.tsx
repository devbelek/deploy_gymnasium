"use client";
import Image from "next/image";
import scss from "./GraduatesContent.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useGetGraduatesQuery } from "@/redux/api/graduates";
import graduateFallback from "../../../../../../assets/images/Group 1000001472.png";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useState, useEffect } from "react";

const GraduatesContent = () => {
  const { data } = useGetGraduatesQuery();
  const { isKyrgyz, t } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [data]);

  const handlePrev = () => {
    if (data) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }
  };

  const handleNext = () => {
    if (data) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  const graduateData = data && data.length > 0 ? data[currentIndex] : null;

  if (!graduateData) {
    return null; // или можно отобразить заглушку
  }

  return (
    <section className={scss.content}>
      <div className="container">
        <h1>{t("Бүтүрүүчүлөр", "Выпускники")}</h1>
        <hr />
        <div className={scss.graduateContent}>
          <div className={scss.title}>
            <p>{graduateData.surname} {graduateData.name} {graduateData.last_name}</p>
            <span>
              {t(
                `${graduateData.year || ''} жылдын бүтүрүүчүсү`,
                `Выпускник ${graduateData.year || ''} года`
              )}
              <br />
              {t("ОРТ баллы", "Балл ОРТ")}: {graduateData.ort}
            </span>
            <div className={scss.wrapper}>
              <GrLinkPrevious onClick={handlePrev} />
              <GrLinkNext onClick={handleNext} />
            </div>
          </div>
          <div className={scss.image}>
            <Image
              src={graduateFallback}
              alt="graduates"
              width={340}
              height={340}
              quality={100}
              priority
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduatesContent;