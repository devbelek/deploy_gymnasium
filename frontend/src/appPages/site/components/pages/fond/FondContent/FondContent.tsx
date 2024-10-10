"use client";

import React, { useState } from "react";
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

  const getImageUrl = (confirmationFile: string) => {
    if (confirmationFile.startsWith("http")) {
      return confirmationFile;
    }
    return `${process.env.NEXT_PUBLIC_ENDPOINT}${confirmationFile}`;
  };

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
                        src={getImageUrl(item.confirmation_file)}
                        alt={item.user.toString()}
                        width={60}
                        height={60}
                        className={scss.donorImage}
                        onClick={() =>
                          handleImageClick(getImageUrl(item.confirmation_file))
                        }
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.jpg";
                        }}
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
