"use client";
import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import scss from "./Header.module.scss";
import logo from "../../../../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { DebounceInput as Input } from "react-debounce-input";
import { useGetSearchQuery } from "@/redux/api/search";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useGetAccountQuery } from "@/redux/api/profile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [hasFocusInput, setHasFocusInput] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const { isKyrgyz, setIsKyrgyz, t } = useLanguageStore();

  const { data: account } = useGetAccountQuery(null);

  const searchRequest = useMemo(() => {
    if (query.length < 2) return null;
    if (/^\d+$/.test(query)) {
      return { school_class__grade: query };
    }
    return { full_name: query };
  }, [query]);

  const { data, error, isLoading } = useGetSearchQuery(searchRequest!, {
    skip: !searchRequest,
  });

  useEffect(() => {
    if (hasFocusInput && query.length >= 1) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  }, [query, hasFocusInput, router]);

  const handleNavigate = () => {
    router.push("https://3-gymnasium.kg/accounts/");
  };

  const handleLogout = () => {
    router.push("/accounts/logout/");
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (!isMobileSearchOpen) {
      setTimeout(() => {
        const mobileInput = document.querySelector(
          ".mobile-search-input"
        ) as HTMLInputElement;
        if (mobileInput) mobileInput.focus();
      }, 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleBlur = () => {
    setQuery("");
    setHasFocusInput(false);
  };

  const handleScrollTo = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 884) {
        setIsMenuOpen(false);
        setIsMobileSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        window.innerWidth <= 884
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderProfileButton = () => {
    if (!account) {
      return <button onClick={handleNavigate}>{t("Кирүү", "Войти")}</button>;
    }

    if (account.avatar) {
      return (
        <Image
          src={account.avatar}
          alt="Profile"
          width={32}
          height={32}
          className={scss.profileImage}
          onClick={toggleProfileMenu}
        />
      );
    }

    return (
      <div className={scss.profileInitial} onClick={toggleProfileMenu}>
        {account.user.charAt(0).toUpperCase()}
      </div>
    );
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

          <div className={scss.hamburger} onClick={handleMenu}>
            <RxHamburgerMenu />
          </div>

          <nav
            ref={navRef}
            className={`${scss.nav} ${isMenuOpen ? scss.active : ""}`}
          >
            <ul onClick={() => setIsMenuOpen(false)}>
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
                <a onClick={handleScrollTo}>{t("Байланыштар", "Контакты")}</a>
              </li>
              <li>
                <Link href="/fond">{t("Фонд", "Фонд")}</Link>
              </li>
            </ul>
          </nav>

          <div className={scss.rightSection}>
            <div className={scss.search}>
              <Input
                minLength={1}
                maxLength={30}
                debounceTimeout={300}
                onChange={handleChange}
                onFocus={() => {
                  setHasFocusInput(true);
                }}
                onBlur={handleBlur}
                value={query}
                placeholder={t("Издөө...", "Поиск...")}
              />
            </div>

            <div
              ref={mobileSearchRef}
              className={`${scss.mobileSearch} ${
                isMobileSearchOpen ? scss.active : ""
              }`}
            >
              <button
                className={scss.searchToggle}
                onClick={toggleMobileSearch}
                aria-label="Toggle search"
              >
                {isMobileSearchOpen ? <IoMdClose /> : <IoSearchOutline />}
              </button>
              <div className={scss.searchInputWrapper}>
                <Input
                  className="mobile-search-input"
                  minLength={1}
                  maxLength={30}
                  debounceTimeout={300}
                  onChange={handleChange}
                  onFocus={() => {
                    setHasFocusInput(true);
                  }}
                  onBlur={handleBlur}
                  value={query}
                  placeholder={t("Издөө...", "Поиск...")}
                />
              </div>
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
              {renderProfileButton()}
              {isProfileMenuOpen && account && (
                <div className={scss.profileMenu}>
                  <Link
                    href="/profile"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    <button>{t("Профиль", "Профиль")}</button>
                  </Link>
                  <button onClick={handleLogout}>{t("Чыгуу", "Выйти")}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;