"use client";
import Image from "next/image";
import scss from "./HeroContent.module.scss";
import heroImage from "../../../../../../assets/images/photo_2024-09-21_01-18-10.jpg";
import { useLanguageStore } from "@/stores/useLanguageStore";

const HeroContent = () => {
  const { isKyrgyz, t } = useLanguageStore();

  return (
    <section id={scss.content}>
      <div className="container">
        {/* Circular Profile Image */}
        <div className={scss.content}>
          <div className={scss.profileImage}>
            <Image src={heroImage} alt="Profile" />
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
