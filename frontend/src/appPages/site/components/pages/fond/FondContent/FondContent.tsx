"use client";

import { useGetFondQuery } from "@/redux/api/fond";
import scss from "./FondContent.module.scss";
import Link from "next/link";

const FondContent = () => {
  const { data, isLoading, isError } = useGetFondQuery();

  return (
    <div className={scss.fondContent}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1 className={scss.title}>Фонд</h1>
          <hr className={scss.divider} />

          {isLoading && <p className={scss.message}>Загрузка пожертвований...</p>}
          {isError && <p className={scss.message}>Ошибка при загрузке пожертвований. Пожалуйста, попробуйте позже.</p>}

          {data && data.length > 0 ? (
            <div className={scss.donationsList}>
              {data.map((item) => (
                <div key={item.id} className={scss.donationItem}>
                  <h2 className={scss.donor}>Отправитель: {item.user}</h2>
                  <p className={scss.amount}>{item.amount} Сом</p>
                  {item.comment && <p className={scss.comment}>{item.comment}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p className={scss.message}>Пожертвований не найдено.</p>
          )}

          <Link href="/fond/donation" className={scss.donateLink}>
            <button className={scss.donateButton}>Акча салуу</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FondContent;