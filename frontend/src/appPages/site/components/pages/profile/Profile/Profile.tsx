"use client";

import React, { useState, useEffect } from "react";
import {
  useGetAccountQuery,
  useUpdateAccountMutation,
} from "@/redux/api/profile";
import { useForm } from "react-hook-form";
import {
  FaEdit,
  FaUser,
  FaSave,
  FaTimes,
  FaSignOutAlt,
  FaSearch,
  FaTimes as FaClose,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Profile.module.scss";

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
  const [isZoomed, setIsZoomed] = useState(false);
  const { data, error, isLoading, refetch } = useGetAccountQuery(null);
  const [updateAccount, { isLoading: isUpdating }] = useUpdateAccountMutation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const router = useRouter();

  const { register, handleSubmit, reset, watch, setValue } =
    useForm<ProfileFormData>();

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

  const onSubmit = async (formData: ProfileFormData) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("user", formData.user);

      if (formData.avatar && formData.avatar.length > 0) {
        formDataToSend.append("avatar", formData.avatar[0]);
      }

      // Отладочный вывод для проверки содержимого formData
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`${key}: ${value}`);
      }

      const result = await updateAccount(formDataToSend).unwrap();
      setIsEditing(false);
      setValue("user", result.user);
      setPreviewUrl(result.avatar ? getImageUrl(result.avatar) : null);
      await refetch();
      alert("Профиль успешно обновлен");
    } catch (error) {
      console.error("Ошибка при обновлении профиля", error);
      alert("Ошибка при обновлении профиля");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleLogout = () => {
    router.push("/accounts/logout/");
  };

  const handleZoom = () => {
    setIsZoomed(true);
  };

  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка при загрузке данных</div>;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.avatarContainer} onClick={handleZoom}>
          {previewUrl || data?.avatar ? (
            <Image
              src={previewUrl || getImageUrl(data?.avatar) || "/default-avatar.png"}
              alt="Аватар"
              className={styles.avatar}
              width={120}
              height={120}
            />
          ) : (
            <FaUser className={styles.avatarPlaceholder} />
          )}
          <div className={styles.zoomIcon}>
            <FaSearch />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.userName}>{watch("user")}</h2>
          <div className={styles.profileActions}>
            {!isEditing && (
              <button onClick={handleEdit} className={styles.editButton}>
                <FaEdit /> <span className={styles.buttonText}>Изменить профиль</span>
              </button>
            )}
            <button onClick={handleLogout} className={styles.logoutButton}>
              <FaSignOutAlt /> <span className={styles.buttonText}>Выйти</span>
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className={styles.editFormOverlay}>
          <div className={styles.editForm}>
            <h3 className={styles.editFormTitle}>Изменить профиль</h3>
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

      {isZoomed && (
        <div className={styles.zoomOverlay} onClick={() => setIsZoomed(false)}>
          <div className={styles.zoomContent}>
            <Image
              src={previewUrl || getImageUrl(data?.avatar) || "/default-avatar.png"}
              alt="Аватар"
              className={styles.zoomedAvatar}
              width={300}
              height={300}
            />
            <button
              className={styles.closeButton}
              onClick={() => setIsZoomed(false)}
            >
              <FaClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
