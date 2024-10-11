"use client";
import React from "react";
import scss from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../../../../../assets/logo.svg";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useGetContactsQuery } from "@/redux/contacts";

const Footer = () => {
  const { t } = useLanguageStore();
  const { data: contacts, isLoading, error } = useGetContactsQuery();

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
              {contacts?.address}
              <br />
              <br />
              <strong>{t("Байланыштар", "Контакты")}</strong>
              <br />
              <br />
              {contacts?.phone_number.map((phone, index) => (
                <React.Fragment key={index}>
                  {phone}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className={scss.section}>
            <strong>{t("Социалдык тармактар", "Социальные сети")}</strong>
            <div className={scss.social}>
              {contacts?.instagram && (
                <a href={contacts.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
              {contacts?.telegram && (
                <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
                  <FaTelegram />
                </a>
              )}
              {contacts?.whatsapp && (
                <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
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