"use client";
import React from "react";
import scss from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../../../../assets/logo.svg";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useGetContactsQuery } from "@/redux/api/Contacts";

const Footer = () => {
  const { data, isLoading, isError } = useGetContactsQuery();
  const { t } = useLanguageStore();

  if (isLoading) return <div>Жүктөлүүдө...</div>;
  if (isError) return <div>Ката кетти</div>;

  const contactData = data?.[0];

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
            <strong>{t("Дарек", "Адрес")}</strong>
            <br />
            <br />
            {contactData?.address}
            <br />
            <br />
            <strong>{t("Байланыштар", "Контакты")}</strong>
            <br />
            <br />
            {contactData?.phone_number && (
              <div className={scss.phone_number}>
                {contactData.phone_number}
              </div>
            )}
          </div>

          <div className={scss.section}>
            <strong>{t("Социалдык тармактар", "Социальные сети")}</strong>
            <div className={scss.social}>
              {contactData?.instagram && (
                <a
                  href={contactData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              )}
              {contactData?.telegram && (
                <a
                  href={contactData.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram />
                </a>
              )}
              {contactData?.youtube && (
                <a
                  href={contactData.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={scss.copyright}>
          © {new Date().getFullYear()}{" "}
          {t(
            "Бардык укуктар корголгон.",
            "Все права защищены."
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;