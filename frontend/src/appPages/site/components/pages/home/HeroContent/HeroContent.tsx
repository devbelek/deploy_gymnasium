"use client";
import { useState } from "react";
import Image from "next/image";
import scss from "./HeroContent.module.scss";
import heroImage from "../../../../../../assets/images/photo_2024-09-21_01-18-10.jpg";
import { useLanguageStore } from "@/stores/useLanguageStore";

const HeroContent = () => {
  const { isKyrgyz, t } = useLanguageStore();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section id={scss.content}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.profileImage}>
            {isLoading && (
              <div className={scss.loader}></div> // Лоадер для изображения
            )}
            <Image
              src={heroImage}
              alt="Profile"
              width={200}
              height={200}
              quality={75} // Оптимизация качества
              onLoadingComplete={handleImageLoad}
              className={isLoading ? "" : scss.loaded}
            />
            <div className={scss.text}>
              <h1>
                {t(
                  "№3 Эксперименталдык гимназия",
                  "№3 Экспериментальная гимназия"
                )}
              </h1>
              <h2>{t("Лейлек району", "Лейлекского района")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.subtext}></div>
    </section>
  );
};

export default HeroContent;
