"use client";
import React from "react";
import scss from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
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
            {t(
              "Баткен облусу, Лейлек району,",
              "Баткенская область, Лейлекский район,"
            )}
            <br />
            {t("Борбордук айылы", "село Центральное")} <br />
            {t("Жаштык айылы", "село Жаштык")}
            <br />
            <br />
            <strong>{t("Байланыштар", "Контакты")}</strong>
            <br />
            <br />
            {data && data.phone_number && (
              <div className={scss.phone_number}>{data.phone_number}</div>
            )}
          </div>

          <div className={scss.section}>
            <strong>{t("Социалдык тармактар", "Социальные сети")}</strong>
            <div className={scss.social}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              {data && data.instagram && (
                <a
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              )}
              {data && data.telegram && (
                <a
                  href={data.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram />
                </a>
              )}
              {data && data.whatsapp && (
                <a
                  href={`https://wa.me/${data.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={scss.copyright}>
          © {new Date().getFullYear()}{" "}
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
