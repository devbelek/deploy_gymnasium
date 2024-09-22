"use client";
import React from "react";
import scss from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../../../../assets/logo.svg";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Footer = () => {
  const { t } = useLanguageStore();

  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Image
              src={logo}
              alt={t("логотип", "логотип")}
              width={100}
              height={100}
            />
          </div>
          <div className={scss.section}>
            <ul>
              <li>
                <a href="/news">{t("Жаңылыктар", "Новости")}</a>
              </li>
              <li>
                <a href="/students">{t("Окуучулар", "Студенты")}</a>
              </li>
              <li>
                <a href="/teachers">{t("Мугалимдер", "Учителя")}</a>
              </li>
              <li>
                <a href="/graduates">{t("Бүтүрүүчүлөр", "Выпускники")}</a>
              </li>
              <li>
                <a href="/gallery">{t("Галерея", "Галерея")}</a>
              </li>
            </ul>
          </div>

          <div className={scss.section}>
            <p>
              <strong>{t("Дарек", "Адрес")}</strong>
              <br />
              <br />
              {t(
                "Баткен облусу, Лейлек району,",
                "Баткенская область, Лейлекский район,"
              )}{" "}
              <br />
              {t("Борбордук айылы", "село Центральное")} <br />
              {t("Жаштык айылы", "село Жаштык")}
              <br />
              <br />
              <strong>{t("Байланыштар", "Контакты")}</strong>
              <br />
              <br />
              +9963123456789
              <br />
              +996703123456
              <br />
              +996556123456
              <br />
            </p>
          </div>

          <div className={scss.section}>
            <strong>{t("Социалдык тармактар", "Социальные сети")}</strong>
            <div className={scss.social}>
              <a href="https://facebook.com">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
              <a href="https://twitter.com">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className={scss.copyright}>
          © 2023{" "}
          {t(
            "Автордук укук == Developers. Бардык укуктар корголгон.",
            "Copyright by == Developers. Все права защищены."
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
