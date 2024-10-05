"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  useGetAccountQuery,
  useUpdateAccountMutation,
} from "@/redux/api/profile";
import { useForm } from "react-hook-form";
import { FaEdit, FaUser, FaSave, FaTimes, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import styles from "./Profile.module.scss";
import { useRouter } from "next/navigation";

interface ProfileFormData {
  user: string;
  avatar: FileList | null;
}

const getImageUrl = (imageUrl: string | null | undefined) => {
  if (!imageUrl) return "";
  const path = imageUrl.replace(/^https?:\/\/[^/]+/, "");
  return `${process.env.NEXT_PUBLIC_API}${path}`;
};

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, error, isLoading, refetch } = useGetAccountQuery(null);
  const [updateAccount, { isLoading: isUpdating }] = useUpdateAccountMutation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const router = useRouter();

  const { register, handleSubmit, reset, watch } = useForm<ProfileFormData>();

  const watchAvatar = watch("avatar");

  useEffect(() => {
    if (data) {
      reset({
        user: data.user,
      });
      setPreviewUrl(data.avatar ? getImageUrl(data.avatar) : null);
    }
  }, [data, reset]);

  useEffect(() => {
    if (watchAvatar && watchAvatar.length > 0) {
      const file = watchAvatar[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [watchAvatar]);

  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка загрузки данных</div>;

  const onSubmit = async (formData: ProfileFormData) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("user", formData.user);
      if (formData.avatar && formData.avatar.length > 0) {
        formDataToSend.append("avatar", formData.avatar[0]);
      }

      await updateAccount(formDataToSend).unwrap();
      setIsEditing(false);
      refetch();
      alert("Профиль успешно обновлен");
    } catch (error) {
      console.error("Не удалось обновить профиль", error);
      alert("Произошла ошибка при обновлении профиля");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleLogout = () => {
    // Перенаправление на страницу выхода
    router.push("/accounts/logout/");
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.avatarContainer}>
          {previewUrl || data?.avatar ? (
            <Image
              src={
                previewUrl || getImageUrl(data?.avatar) || "/default-avatar.png"
              }
              alt="Аватар"
              className={styles.avatar}
              width={120}
              height={120}
            />
          ) : (
            <FaUser className={styles.avatarPlaceholder} />
          )}
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.userName}>{data?.user}</h2>
          <div className={styles.profileActions}>
            {!isEditing && (
              <button onClick={handleEdit} className={styles.editButton}>
                <FaEdit /> Редактировать профиль
              </button>
            )}
            <button onClick={handleLogout} className={styles.logoutButton}>
              <FaSignOutAlt /> Выйти
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className={styles.editFormOverlay}>
          <div className={styles.editForm}>
            <h3 className={styles.editFormTitle}>Редактировать профиль</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formField}>
                <label htmlFor="user">Имя</label>
                <input id="user" {...register("user", { required: true })} />
              </div>
              <div className={styles.formField}>
                <label htmlFor="avatar">Изменить аватар</label>
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  {...register("avatar")}
                  className={styles.fileInput}
                />
              </div>
              <div className={styles.formActions}>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className={styles.saveButton}
                >
                  <FaSave /> {isUpdating ? "Сохранение..." : "Сохранить"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className={styles.cancelButton}
                >
                  <FaTimes /> Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
