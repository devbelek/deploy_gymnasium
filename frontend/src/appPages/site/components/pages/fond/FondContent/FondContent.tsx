"use client";

import React, { useState } from "react";
import { useGetFondQuery } from "@/redux/api/fond";
import scss from "./FondContent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

const FondContent = () => {
  const { data, isLoading, isError } = useGetFondQuery();
  const [selectedImage, setSelectedImage] = useState(null);
  const { isKyrgyz, t } = useLanguageStore();

  const totalPrice = data
    ? data.reduce((total, item) => {
        return item.is_verified ? total + Math.floor(+item.amount) : total;
      }, 0)
    : 0;

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={scss.fondContent}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1 className={scss.title}>{t("Фонд", "Фонд")}</h1>
          <hr className={scss.divider} />

          {isLoading && (
            <p className={scss.message}>
              {t("Жүктөлүүдө...", "Загрузка...")}
            </p>
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
              {data.map((item) =>
                item.is_verified ? (
                  <div key={item.id} className={scss.donationItem}>
                    <div className={scss.donorInfo}>
                      <Image
                        src={item.image || "/placeholder.jpg"}
                        alt={item.user}
                        width={60}
                        height={60}
                        className={scss.donorImage}
                        onClick={() => handleImageClick(item.image)}
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
            <p className={scss.message}>
              {t(
                "Кайрымдуулук табылган жок.",
                "Пожертвований не найдено."
              )}
            </p>
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
              {t("Акча салуу", "Пожертвовать")}
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