"use client";
import Image from "next/image";
import scss from "./HeroContent.module.scss";
import heroImage from "../../../../../../assets/images/logo.jpg";
import { useLanguageStore } from "@/stores/useLanguageStore";

const HeroContent = () => {
  const { isKyrgyz, t } = useLanguageStore();

  return (
    <section className={scss.content}>
      <div className={scss.backgroundImage}></div>
      <div className={scss.contentWrapper}>
        <div className={scss.text}>
          <div className={scss.logo}>
            <Image src={heroImage} alt="Logo" width={100} height={100} />
          </div>
          <h1>
            {t(
              "№3 Эксперименталдык гимназия",
              "№3 Экспериментальная гимназия"
            )}
          </h1>
          <h2>{t("Лейлек району", "Лейлекского района")}</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;