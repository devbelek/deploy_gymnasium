"use client";

import { useGetFondQuery } from "@/redux/api/fond";
import scss from "./DonationContent.module.scss";
import Link from "next/link";

const FondContent = () => {
  const { data, isLoading, isError } = useGetFondQuery();

  return (
    <div className={scss.donationContent}>
      <div className={scss.content}>
        <h2 className={scss.title}>Фонд</h2>

        {isLoading && <p className={scss.message}>Загрузка пожертвований...</p>}
        {isError && <p className={scss.message}>Ошибка при загрузке пожертвований. Пожалуйста, попробуйте позже.</p>}

        {data && data.length > 0 ? (
          <div className={scss.donationsList}>
            {data.map((item) => (
              <div key={item.id} className={scss.donationItem}>
                <h3 className={scss.donor}>Отправитель: {item.user}</h3>
                <p className={scss.amount}>{item.amount} Сом</p>
                {item.comment && <p className={scss.comment}>{item.comment}</p>}
              </div>
            ))}
          </div>
        ) : (
          <p className={scss.message}>Пожертвований не найдено.</p>
        )}

        <Link href="/fond/donation" className={scss.donateLink}>
          <button className={scss.submitButton}>Акча салуу</button>
        </Link>
      </div>
    </div>
  );
};

export default FondContent;