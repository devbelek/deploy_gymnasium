"use client";
import React, { useState } from 'react';
import { usePostDonationsMutation } from "@/redux/api/fond";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./DonationContent.module.scss";

// Обновленный интерфейс IDonation
interface IDonation {
  amount: number;
  confirmation_file?: File;
  comment?: string;
}

// Обновленный интерфейс формы
interface IDonationForm {
  amount: string; // Оставляем строкой для ввода, но будем преобразовывать в число
  confirmation_file: FileList;
  comment: string;
}

const DonationContent: React.FC = () => {
  const [postDonationsMutation] = usePostDonationsMutation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDonationForm>();

  const onSubmit: SubmitHandler<IDonationForm> = async (data, event) => {
    event?.preventDefault();
    console.log("onSubmit called", data);
    setIsLoading(true);

    const formData = new FormData();
    // Преобразуем строку в число с плавающей точкой
    formData.append("amount", parseFloat(data.amount).toString());
    if (data.confirmation_file.length > 0) {
      formData.append("confirmation_file", data.confirmation_file[0]);
    }
    formData.append("comment", data.comment);

    try {
      const result = await postDonationsMutation(formData);
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
              step="0.01" // Позволяет вводить дробные числа
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

          {/* Остальные поля формы остаются без изменений */}

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationContent;