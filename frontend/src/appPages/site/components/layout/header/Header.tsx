"use client";
import React, { useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = () => {
    router.push("https://3-gymnasium.kg/accounts/");
  };

  const handleScrollTo = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hamburger} onClick={handleMenu}>
            <RxHamburgerMenu />
          </div>

          <div className={scss.logo}>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={37}
                height={37}
                quality={70}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>

          <nav className={`${scss.nav} ${isMenuOpen ? scss.active : ""}`}>
            <ul>
              <li>
                <Link href="/news">Новости</Link>
              </li>
              <li>
                <Link href="/students">Ученики</Link>
              </li>
              <li>
                <Link href="/teachers">Учителя</Link>
              </li>
              <li>
                <Link href="/graduates">Выпускники</Link>
              </li>
              <li>
                <Link href="/gallery">Галерея</Link>
              </li>
              <li>
                <a onClick={handleScrollTo}>Контакты</a>
              </li>
            </ul>
          </nav>

          <div className={scss.rightSection}>
            <div className={scss.language}>
              <button>Кырг</button>
              <button>Рус</button>
            </div>

            <div className={scss.auth}>
              <button onClick={handleNavigate}>Войти</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
