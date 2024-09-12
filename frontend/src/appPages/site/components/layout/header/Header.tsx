"use client";
import React from "react";
import scss from "./Header.module.scss";
import logo from "../../../../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("https://3-gymnasium.kg/accounts/");
  };

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
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

          <nav className={scss.nav}>
            <ul>
              <li>
                <Link href="/news">Новости</Link>
              </li>
            </ul>
            <Link href="/students">Ученики</Link>
            <Link href="/teachers">Учителя</Link>
            <Link href="/graduates">Выпускники</Link>
            <Link href="/gallery">Галерея</Link>
            <Link href="/contact">Контакты</Link>
          </nav>

          <div className={scss.search}>
            <input type="text" placeholder="Поиск" />
            <button className={scss.searchBtn}>
              <FaSearch />
            </button>
          </div>

          <div className={scss.language}>
            <button>Кырг</button>
            <button>Рус</button>
          </div>

          <div className={scss.auth}>
            <button onClick={handleNavigate}>Войти</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
