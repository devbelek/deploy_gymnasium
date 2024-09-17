"use client";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { DebounceInput as Input } from "react-debounce-input";
import { useGetSearchQuery } from "@/redux/api/search";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [hasFocusInput, setHasFocusInput] = useState(false);

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
    if (hasFocusInput && query.length >= 2) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  }, [query, hasFocusInput, router]);

  const handleNavigate = () => {
    router.push("https://3-gymnasium.kg/accounts/");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleScrollTo = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={scss.header}>
      <div className="container" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            <ul onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            <div className={scss.search}>
              <Input
                minLength={2}
                debounceTimeout={300}
                onChange={handleChange}
                onFocus={() => {
                  setHasFocusInput(true);
                }}
                value={query}
                placeholder="Поиск..."
              />
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

        {query.length >= 2 && (
          <div className={scss.searchResults}>
            {isLoading && <p>Загрузка...</p>}
            {/* {error && <p>Произошла ошибка при поиске</p>} */}
            {!isLoading && !error && data && data.length > 0 ? (
              <ul>
                {data.map((result) => (
                  <li key={result.id}>
                    {result.full_name}{" "}
                    {result.school_class__grade &&
                      `(Класс: ${result.school_class__grade})`}
                  </li>
                ))}
              </ul>
            ) : !isLoading && !error ? (
              <p>Результатов не найдено</p>
            ) : null}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
