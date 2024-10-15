"use client";
import { useGetRekvizitQuery } from "@/redux/api/rekvizity";
import { useGetDonationsQuery } from "@/redux/api/fond";
import styles from "./FondContent.module.scss";

const FondContent = () => {
  const { data: rekvizitData } = useGetRekvizitQuery();
  const { data: donationData } = useGetDonationsQuery();

  // Жалпы сумманы эсептөө
  const totalDonation =
    donationData?.reduce((sum, donation) => sum + donation.count, 0) || 0;

  return (
    <div className="container">
      <div className={styles.content}>
        <section className={styles.rekvizity}>
          <h2 className={styles.sectionTitle}>Реквизиты</h2>
          <div className={styles.rekvizityList}>
            {rekvizitData?.map((el, index) => (
              <div key={index} className={styles.rekvizitItem}>
                {el?.requisite}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.donations}>
          <h2 className={styles.sectionTitle}>Донаты</h2>
          <div className={styles.totalDonation}>
            Жалпы сумма:{" "}
            <span className={styles.totalAmount}>{totalDonation} Сом</span>
          </div>
          <div className={styles.donationTable}>
            <div className={styles.tableHeader}>
              <div className={styles.headerCell}>Имя</div>
              <div className={styles.headerCell}>Фамилия</div>
              <div className={styles.headerCell}>Сумма</div>
            </div>
            {donationData?.map((el, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.tableCell}>{el?.name}</div>
                <div className={styles.tableCell}>{el?.surname}</div>
                <div className={styles.tableCell}>{el.count} Сом</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FondContent;
