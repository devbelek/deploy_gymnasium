"use client";
import React, { useState } from 'react';
import { usePostDonationsMutation } from "@/redux/api/fond";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./DonationContent.module.scss";

const DonationContent: React.FC = () => {
  const [postDonationsMutation] = usePostDonationsMutation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DONATIONS.CreateDonationRequest>();

  const onSubmit: SubmitHandler<DONATIONS.CreateDonationRequest> = async (data) => {
    console.log("onSubmit called", data);
    setIsLoading(true);

    try {
      const result = await postDonationsMutation(data);
      console.log("API response:", result);
      alert("Пожертвование успешно отправлено!");
    } catch (error) {
      console.error("Error sending donation:", error);
      alert("Произошла ошибка при отправке пожертвования. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.donationContent}>
      <div className={styles.content}>
        <h2>Сделать пожертвование</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="amount">Сумма (сом):</label>
            <input
              type="number"
              id="amount"
              step="0.01"
              {...register("amount", {
                required: "Сумма обязательна",
                min: { value: 0.01, message: "Сумма должна быть больше 0" },
                validate: (value) => !isNaN(parseFloat(value)) || "Введите корректное число"
              })}
            />
            {errors.amount && (
              <span className={styles.error}>{errors.amount.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmation_file">Квитанция о переводе:</label>
            <input
              type="file"
              id="confirmation_file"
              accept=".pdf,.jpg,.jpeg,.png"
              {...register("confirmation_file", {
                required: "Файл обязателен",
              })}
            />
            {errors.confirmation_file && (
              <span className={styles.error}>
                {errors.confirmation_file.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comment">Комментарий:</label>
            <textarea id="comment" {...register("comment")} />
          </div>

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationContent;