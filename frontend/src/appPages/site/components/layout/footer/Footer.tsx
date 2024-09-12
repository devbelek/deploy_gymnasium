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

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className={scss.section}>
            <ul>
              <li>
                <a href="/news">Новости</a>
              </li>
              <li>
                <a href="/students">Студенты</a>
              </li>
              <li>
                <a href="/teachers">Учителя</a>
              </li>
              <li>
                <a href="/graduates">Выпускники</a>
              </li>
              <li>
                <a href="/gallery">Галерея</a>
              </li>
            </ul>
          </div>

          <div className={scss.section}>
            <p>
              <strong>Адрес</strong>
              <br />
              Баткенская область, Лейлекский район, <br />
              село Центральное <br />
              село Жаштык
              <br />
              <strong>Контакты</strong>
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
            <strong>Социальные сети</strong>
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
          © 2023 Copyright by == Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
