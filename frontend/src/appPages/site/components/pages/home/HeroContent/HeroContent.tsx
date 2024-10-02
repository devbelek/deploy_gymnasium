"use client";
import Image from "next/image";
import scss from "./HeroContent.module.scss";
import heroImage from "../../../../../../assets/images/photo_2024-09-21_01-18-10.jpg";
import { useLanguageStore } from "@/stores/useLanguageStore";

const HeroContent = () => {
  const { isKyrgyz, t } = useLanguageStore();

  return (
    <section className={scss.content}>
      <div className={scss.backgroundImage}></div>
      <div className={scss.overlay}></div>
      <div className={scss.contentWrapper}>
        <div className={scss.profileImage}>
          <Image src={heroImage} alt="Profile" width={200} height={200} />
        </div>
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
      <div className={scss.subtext}></div>
    </section>
  );
};

export default HeroContent;