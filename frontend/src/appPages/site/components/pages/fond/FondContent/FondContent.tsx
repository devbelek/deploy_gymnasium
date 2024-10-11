"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useGetFondQuery } from "@/redux/api/fond";
import scss from "./FondContent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

interface DonationItem {
  id: number;
  user: number | string;
  amount: string;
  date: string;
  comment: string | null;
  confirmation_file: string;
  is_verified: boolean;
  verification_message: string;
}

const FondContent: React.FC = () => {
  const { data, isLoading, isError } = useGetFondQuery();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isKyrgyz, t } = useLanguageStore();
  const [userAvatars, setUserAvatars] = useState<Record<string, string>>({});

  const totalPrice = data
    ? data.reduce((total: number, item: DonationItem) => {
        return item.is_verified ? total + Math.floor(+item.amount) : total;
      }, 0)
    : 0;

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getDefaultAvatar = (username: string) => {
    return `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;
  };

  const fetchUserAvatars = useCallback(async () => {
    if (data) {
      const uniqueUsers = Array.from(
        new Set(data.map((donation: DonationItem) => donation.user.toString()))
      );
      const newUserAvatars: Record<string, string> = {};

      for (const username of uniqueUsers) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_ENDPOINT}/user-info/?username=${username}`,
            {
              method: "GET",
              credentials: "include",
            }
          );
          if (response.ok) {
            const userData = await response.json();
            newUserAvatars[username] = userData.avatar || getDefaultAvatar(username);
          } else {
            newUserAvatars[username] = getDefaultAvatar(username);
          }
        } catch (error) {
          console.error(
            t(
              `${username} үчүн аватарды алууда ката:`,
              `Ошибка при получении аватара для ${username}:`
            ),
            error
          );
          newUserAvatars[username] = getDefaultAvatar(username);
        }
      }

      setUserAvatars(newUserAvatars);
    }
  }, [data, t]);

  useEffect(() => {
    fetchUserAvatars();
  }, [fetchUserAvatars]);

  return (
    <div className={scss.fondContent}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1 className={scss.title}>{t("Фонд", "Фонд")}</h1>
          <hr className={scss.divider} />

          {isLoading && (
            <p className={scss.message}>{t("Жүктөлүүдө...", "Загрузка...")}</p>
          )}
          {isError && (
            <p className={scss.message}>
              {t(
                "Маалыматтарды жүктөөдө ката кетти. Кайра аракет кылыңыз.",
                "Ошибка при загрузке данных. Пожалуйста, попробуйте позже."
              )}
            </p>
          )}

          {data && data.length > 0 ? (
            <div className={scss.donationsList}>
              {data.map((item: DonationItem) =>
                item.is_verified ? (
                  <div key={item.id} className={scss.donationItem}>
                    <div className={scss.donorInfo}>
                      <Image
                        src={userAvatars[item.user.toString()] || getDefaultAvatar(item.user.toString())}
                        alt={item.user.toString()}
                        width={60}
                        height={60}
                        className={scss.donorImage}
                        onClick={() =>
                          handleImageClick(userAvatars[item.user.toString()] || getDefaultAvatar(item.user.toString()))
                        }
                      />
                      <h2 className={scss.donor}>
                        {t("Жөнөтүүчү", "Отправитель")}: {item.user}
                      </h2>
                    </div>
                    <p className={scss.amount}>
                      {Math.floor(+item.amount)} {t("Сом", "Сом")}
                    </p>
                    {item.comment && (
                      <p className={scss.comment}>{item.comment}</p>
                    )}
                  </div>
                ) : null
              )}
            </div>
          ) : (
            <p className={scss.message}>{t("табылган жок.", " не найдено.")}</p>
          )}

          <div className={scss.totalPrice}>
            <h3>
              {t("Жалпы сумма", "Общая сумма")}:{" "}
              <span>
                {totalPrice} {t("Сом", "Сом")}
              </span>
            </h3>
          </div>

          <Link href="/fond/donation" className={scss.donateLink}>
            <button className={scss.donateButton}>
              {t("Акча салуу", "Пополнение")}
            </button>
          </Link>
        </div>
      </div>

      {selectedImage && (
        <div className={scss.modal} onClick={closeModal}>
          <Image
            src={selectedImage}
            alt="Enlarged donor"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default FondContent;