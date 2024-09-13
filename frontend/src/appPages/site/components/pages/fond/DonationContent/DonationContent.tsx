"use client";

import React, { useState, useEffect, useRef } from 'react';
import { usePostDonationsMutation } from "@/redux/api/fond";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./DonationContent.module.scss";

interface CreateDonationRequest {
  amount: number;
  confirmation_file: FileList;
  comment?: string;
}

interface ErrorWithResponse extends Error {
  response?: {
    data?: any;
    status?: number;
    headers?: any;
  };
}

const DonationContent: React.FC = () => {
  const [postDonationsMutation] = usePostDonationsMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateDonationRequest>();

  const watchFile = watch("confirmation_file");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/csrf/`, {
      credentials: 'include',
    });
  }, []);

  useEffect(() => {
    if (watchFile && watchFile.length > 0) {
      setSelectedFileName(watchFile[0].name);
    } else {
      setSelectedFileName(null);
    }
  }, [watchFile]);

  const onSubmit: SubmitHandler<CreateDonationRequest> = async (data) => {
    console.log("onSubmit called with data:", data);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("amount", data.amount.toString());

    const file = data.confirmation_file[0];
    if (file) {
      console.log("File type:", file.type);
      if (file.type !== 'application/pdf') {
        alert("Пожалуйста, выберите файл в формате PDF.");
        setIsLoading(false);
        return;
      }
      formData.append("confirmation_file", file);
    } else {
      console.error("No file selected");
      alert("Пожалуйста, выберите файл.");
      setIsLoading(false);
      return;
    }

    if (data.comment) {
      formData.append("comment", data.comment);
    }

    console.log("FormData contents:");
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      const result = await postDonationsMutation(formData).unwrap();
      console.log("API response:", result);
      alert("Пожертвование успешно отправлено!");
    } catch (error) {
      console.error("Full error object:", error);
      if (error && typeof error === 'object' && 'response' in error) {
        const errorWithResponse = error as ErrorWithResponse;
        if (errorWithResponse.response) {
          console.error("Response data:", errorWithResponse.response.data);
          console.error("Response status:", errorWithResponse.response.status);
          console.error("Response headers:", errorWithResponse.response.headers);
        }
      }
      console.error("Error sending donation:", error);
      alert("Произошла ошибка при отправке пожертвования. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.donationContent}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Сделать пожертвование</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="amount">Сумма (сом):</label>
            <input
              className={styles.input}
              type="number"
              id="amount"
              step="0.01"
              {...register("amount", {
                required: "Сумма обязательна",
                min: { value: 0.01, message: "Сумма должна быть больше 0" },
                validate: (value) => !isNaN(value) || "Введите корректное число"
              })}
            />
            {errors.amount && (
              <span className={styles.error}>{errors.amount.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="confirmation_file">Квитанция о переводе (только PDF):</label>
            <input
              type="file"
              id="confirmation_file"
              accept=".pdf"
              style={{ display: 'none' }}
              {...register("confirmation_file", {
                required: "Файл обязателен",
              })}
              ref={(e) => {
                register("confirmation_file").ref(e);
                fileInputRef.current = e;
              }}
            />
            <button type="button" onClick={handleFileButtonClick} className={styles.fileButton}>
              {selectedFileName || "Выберите файл"}
            </button>
            {errors.confirmation_file && (
              <span className={styles.error}>
                {errors.confirmation_file.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="comment">Комментарий:</label>
            <textarea className={styles.textarea} id="comment" {...register("comment")} />
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