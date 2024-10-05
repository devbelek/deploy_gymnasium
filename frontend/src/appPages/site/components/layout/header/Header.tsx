"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useGetAccountQuery } from "@/redux/api/profile";
import scss from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const router = useRouter();
  const profileMenuRef = useRef(null);

  const { isKyrgyz, setIsKyrgyz, t } = useLanguageStore();
  const { data: account } = useGetAccountQuery(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    router.push("/accounts/logout/");
  };

  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <Link href="/" className={scss.logo}>
            <Image src="/logo.svg" alt="Logo" width={37} height={37} />
            <span className={scss.schoolName}>3-гимназия</span>
          </Link>

          <nav className={`${scss.nav} ${isMenuOpen ? scss.active : ""}`}>
            <ul>
              <li>
                <Link href="/">{t("Башкы бет", "Главная")}</Link>
              </li>
              <li>
                <Link href="/news">{t("Жаңылыктар", "Новости")}</Link>
              </li>
              <li>
                <Link href="/students">{t("Окуучулар", "Ученики")}</Link>
              </li>
              <li>
                <Link href="/teachers">{t("Мугалимдер", "Учителя")}</Link>
              </li>
              <li>
                <Link href="/graduates">{t("Бүтүрүүчүлөр", "Выпускники")}</Link>
              </li>
              <li>
                <Link href="/gallery">{t("Галерея", "Галерея")}</Link>
              </li>
              <li>
                <Link href="/contacts">{t("Байланыштар", "Контакты")}</Link>
              </li>
              <li>
                <Link href="/fond">{t("Фонд", "Фонд")}</Link>
              </li>
            </ul>
          </nav>

          <div className={scss.rightSection}>
            <div className={scss.search}>
              <input type="text" placeholder={t("Издөө...", "Поиск...")} />
            </div>

            <div className={scss.language}>
              <button
                onClick={() => setIsKyrgyz(true)}
                className={isKyrgyz ? scss.bold : scss.normal}
              >
                Кырг
              </button>
              <button
                onClick={() => setIsKyrgyz(false)}
                className={!isKyrgyz ? scss.bold : scss.normal}
              >
                Рус
              </button>
            </div>

            <div className={scss.auth} ref={profileMenuRef}>
              {account ? (
                <button
                  onClick={toggleProfileMenu}
                  className={scss.profileButton}
                >
                  {account.user.charAt(0).toUpperCase()}
                </button>
              ) : (
                <Link href="/accounts/login">{t("Кирүү", "Войти")}</Link>
              )}

              {isProfileMenuOpen && account && (
                <div className={scss.profileMenu}>
                  <Link href="/profile">
                    <button>{t("Профиль", "Профиль")}</button>
                  </Link>
                  <button onClick={handleLogout}>{t("Чыгуу", "Выйти")}</button>
                </div>
              )}
            </div>

            <div className={scss.hamburger} onClick={handleMenu}>
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
