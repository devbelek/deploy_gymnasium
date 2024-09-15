"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useGetAccountQuery, useUpdateAccountMutation } from "@/redux/api/profile";
import { useForm } from "react-hook-form";
import { FaEdit, FaUser, FaSave, FaTimes } from 'react-icons/fa';
import styles from './Profile.module.scss';

interface ProfileFormData {
  user: string;
  about: string;
  avatar: FileList | null;
}

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, error, isLoading, refetch } = useGetAccountQuery(null);
  const [updateAccount, { isLoading: isUpdating }] = useUpdateAccountMutation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { register, handleSubmit, reset, watch } = useForm<ProfileFormData>();

  const watchAvatar = watch("avatar");
  const watchAbout = watch("about", "");

  useEffect(() => {
    if (data) {
      reset({
        user: data.user,
        about: data.about || '',
      });
      setPreviewUrl(data.avatar || null);
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
      formDataToSend.append('user', formData.user);
      formDataToSend.append('about', formData.about);
      if (formData.avatar && formData.avatar.length > 0) {
        formDataToSend.append('avatar', formData.avatar[0]);
      }

      await updateAccount(formDataToSend).unwrap();
      setIsEditing(false);
      refetch();
      alert('Профиль успешно обновлен');
    } catch (error) {
      console.error("Не удалось обновить профиль", error);
      alert('Произошла ошибка при обновлении профиля');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.avatarContainer}>
          {previewUrl || data?.avatar ? (
            <img
              src={previewUrl || data?.avatar || '/default-avatar.png'}
              alt="Аватар"
              className={styles.avatar}
            />
          ) : (
            <FaUser className={styles.avatarPlaceholder} />
          )}
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.userName}>{data?.user}</h2>
          <p className={styles.userAbout}>{data?.about || 'Нет информации'}</p>
          {!isEditing && (
            <button onClick={handleEdit} className={styles.editButton}>
              <FaEdit /> Редактировать профиль
            </button>
          )}
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
                <label htmlFor="about">О себе</label>
                <textarea id="about" {...register("about", {
                    maxLength: {
                      value: 300,
                      message: "Максимум 300 символов" // Сообщение об ошибке
                    }
                  })}
                />
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
                <button type="submit" disabled={isUpdating} className={styles.saveButton}>
                  <FaSave /> {isUpdating ? 'Сохранение...' : 'Сохранить'}
                </button>
                <button type="button" onClick={() => setIsEditing(false)} className={styles.cancelButton}>
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