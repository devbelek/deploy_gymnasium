"use client";
import React, { useState } from "react";
import { useGetRekvizitQuery } from "@/redux/api/rekvizity";
import { useGetDonationsQuery } from "@/redux/api/fond";
import styles from "./FondContent.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";
import parse from "html-react-parser";

const FondContent: React.FC = () => {
  const { data: rekvizitData } = useGetRekvizitQuery();
  const { data: donationData } = useGetDonationsQuery();
  const [activeRekvizit, setActiveRekvizit] = useState<number | null>(null);
  const { isKyrgyz, t } = useLanguageStore();

  const totalDonation =
    donationData?.reduce((sum, donation) => sum + donation.count, 0) || 0;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.margins}>
          <section className={styles.rekvizity}>
            <h2 className={styles.sectionTitle}>
              {t("Реквизиттер", "Реквизиты")}
            </h2>
            <div className={styles.rekvizityList}>
              {rekvizitData?.map((el, index) => (
                <div
                  key={index}
                  className={`${styles.rekvizitItem} ${
                    activeRekvizit === index ? styles.active : ""
                  }`}
                  onClick={() =>
                    setActiveRekvizit(activeRekvizit === index ? null : index)
                  }
                >
                  <div className={styles.rekvizitFront}>
                    <h3>{el?.requisite_first}</h3>
                    <span className={styles.clickInfo}>
                      {t(
                        "Көбүрөөк маалымат үчүн басыңыз",
                        "Нажмите для подробной информации"
                      )}
                    </span>
                  </div>
                  <div className={styles.rekvizitBack}>
                    <p>{el?.requisite_second}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.donations}>
            <h2 className={styles.sectionTitle}>{t("Фонд", "Фонд")}</h2>
            <div className={styles.totalDonation}>
              {t("Жалпы сумма", "Общая сумма")}:{" "}
              <span className={styles.totalAmount}>
                {totalDonation} {t("Сом", "Сом")}
              </span>
            </div>
            <div className={styles.donationTable}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>{t("Аты", "Имя")}</div>
                <div className={styles.headerCell}>
                  {t("Фамилиясы", "Фамилия")}
                </div>
                <div className={styles.headerCell}>{t("Сумма", "Сумма")}</div>
              </div>
              {donationData?.map((el, index) => (
                <div key={index} className={styles.tableRow}>
                  <div className={styles.tableCell}>{el?.name}</div>
                  <div className={styles.tableCell}>{el?.surname}</div>
                  <div className={styles.tableCell}>
                    {el.count} {t("Сом", "Сом")}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FondContent;
