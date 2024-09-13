"use client";
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Получаем CSRF токен при монтировании компонента
    fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/csrf/`, {
      credentials: 'include',
    });
  }, []);

  const onSubmit: SubmitHandler<DONATIONS.CreateDonationRequest> = async (data) => {
    console.log("onSubmit called with data:", data);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("amount", data.amount);
    formData.append("confirmation_file", data.confirmation_file[0]);
    if (data.comment) {
      formData.append("comment", data.comment);
    }

    console.log("FormData created:", {
      amount: formData.get("amount"),
      comment: formData.get("comment"),
      file: formData.get("confirmation_file"),
    });

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

  // ... rest of the component remains the same