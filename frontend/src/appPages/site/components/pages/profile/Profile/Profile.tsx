"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useGetAccountQuery, useUpdateAccountMutation } from "@/redux/api/profile";
import { useForm } from "react-hook-form";
import { FaEdit, FaUser, FaCamera, FaSave, FaTimes } from 'react-icons/fa';
import styles from './Profile.module.scss';

interface ProfileFormData {
  user: string;
  about: string;
  avatar: File | null;
}

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, error, isLoading, refetch } = useGetAccountQuery(null);
  const [updateAccount, { isLoading: isUpdating }] = useUpdateAccountMutation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm<ProfileFormData>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data) {
      reset({
        user: data.user,
        about: data.about || '',
      });
      setPreviewUrl(data.avatar || null);
    }
  }, [data, reset]);

  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка загрузки данных</div>;

  const onSubmit = async (formData: ProfileFormData) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('user', formData.user);
      formDataToSend.append('about', formData.about);
      if (formData.avatar) {
        formDataToSend.append('avatar', formData.avatar);
      }

      await updateAccount(formDataToSend).unwrap();
      setIsEditing(false);
      refetch(); // Обновляем данные после успешного сохранения
      alert('Профиль успешно обновлен');
    } catch (error) {
      console.error("Не удалось обновить профиль", error);
      alert('Произошла ошибка при обновлении профиля');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue('avatar', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
          {isEditing && (
            <button
              className={styles.changeAvatarButton}
              onClick={() => fileInputRef.current?.click()}
              type="button"
            >
              <FaCamera />
            </button>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className={styles.hiddenFileInput}
            accept="image/*"
          />
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
                <textarea id="about" {...register("about")} />
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