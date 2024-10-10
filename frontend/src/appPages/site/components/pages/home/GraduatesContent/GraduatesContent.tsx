"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import scss from "./GraduatesContent.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useGetSuccessfulGraduatesQuery } from "@/redux/api/successful_graduates";
import graduateFallback from "../../../../../../assets/images/Group 1000001472.png";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useRouter } from "next/navigation";

const GraduatesContent = () => {
  const { data } = useGetSuccessfulGraduatesQuery();
  const { isKyrgyz, t } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Смена слайда каждые 5 секунд

    return () => clearInterval(interval);
  }, [currentIndex, data]);

  const handlePrevious = () => {
    if (!isAnimating && data) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating && data) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNavigate = () => {
    router.push("/graduates");
  };

  const graduateData = data && data.length > 0 ? data[currentIndex] : null;

  return (
    <section className={scss.content}>
      <div className="container">
        <div className={scss.allGraduates}>
          <h1>{t("Бүтүрүүчүлөр", "Выпускники")}</h1>
          <hr />
          <div className={`${scss.graduateContent} ${isAnimating ? scss.animating : ''}`}>
            <div className={scss.title}>
              <p>{graduateData?.content}</p>
              <span>
                {graduateData?.graduate?.name}{" "}
                {graduateData?.graduate?.last_name}
                <br />
                {t(
                  `${graduateData?.graduate?.year} жылдын бүтүрүүчүсү`,
                  `Выпускник ${graduateData?.graduate?.year} года`
                )}
              </span>
              <div className={scss.wrapper}>
                <GrLinkPrevious onClick={handlePrevious} />
                <GrLinkNext onClick={handleNext} />
              </div>
            </div>
            <div className={scss.image}>
              <Image
                src={graduateData?.image || graduateFallback}
                alt="graduates"
                width={340}
                height={340}
                quality={100}
                priority
                objectFit="cover"
              />
            </div>
          </div>
          <div className={scss.buttonContainer}>
            <button className={scss.button} onClick={handleNavigate}>
              {t("Бардык бүтүрүүчүлөр", "Все выпускники")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduatesContent;