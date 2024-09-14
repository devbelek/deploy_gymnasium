"use client";

import { useGetFondQuery } from "@/redux/api/fond";
import scss from "./FondContent.module.scss";
import Link from "next/link";

const FondContent = () => {
  const { data, isLoading, isError } = useGetFondQuery();

  console.log(data, "FondContent");

  const totalPrice = data
    ? data.reduce((total, item) => {
        return item.is_verified ? total + Math.floor(+item.amount) : total;
      }, 0)
    : 0;

  return (
    <div className={scss.fondContent}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1 className={scss.title}>Фонд</h1>
          <hr className={scss.divider} />

          {isLoading && (
            <p className={scss.message}>Загрузка пожертвований...</p>
          )}
          {isError && (
            <p className={scss.message}>
              Ошибка при загрузке пожертвований. Пожалуйста, попробуйте позже.
            </p>
          )}

          {data && data.length > 0 ? (
            <div className={scss.donationsList}>
              {data.map((item) =>
                item.is_verified ? (
                  <div key={item.id} className={scss.donationItem}>
                    <h2 className={scss.donor}>Отправитель: {item.user}</h2>
                    <p className={scss.amount}>
                      {Math.floor(+item.amount)} Сом
                    </p>
                    {item.comment && (
                      <p className={scss.comment}>{item.comment}</p>
                    )}
                  </div>
                ) : null
              )}
            </div>
          ) : (
            <p className={scss.message}>Пожертвований не найдено.</p>
          )}

          <div className={scss.totalPrice}>
            <h3>
              Общая сумма пожертвований: <span>{totalPrice} Сом</span>
            </h3>
          </div>

          <Link href="/fond/donation" className={scss.donateLink}>
            <button className={scss.donateButton}>Акча салуу</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FondContent;
