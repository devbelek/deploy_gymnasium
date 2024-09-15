"use client";

import React, { useState } from 'react';
import { useGetAccountQuery, useUpdateAccountMutation } from "@/redux/api/profile";
import { useForm } from "react-hook-form";
import * as Dialog from '@radix-ui/react-dialog';
import * as Label from '@radix-ui/react-label';
import * as Avatar from '@radix-ui/react-avatar';
import { FaEdit } from 'react-icons/fa';
import styles from "./Profile.module.scss";

interface ProfileFormData {
  user: string;
  about: string;
  avatar: string;
}

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, error, isLoading } = useGetAccountQuery(null);
  const [updateAccount, { isLoading: isUpdating }] = useUpdateAccountMutation();

  const { register, handleSubmit, reset } = useForm<ProfileFormData>();

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading data</div>;

  const onSubmit = async (formData: ProfileFormData) => {
    try {
      await updateAccount(formData).unwrap();
      setIsEditing(false);
      // Здесь можно добавить уведомление об успешном обновлении
    } catch (error) {
      // Здесь можно добавить обработку ошибок
      console.error("Failed to update profile", error);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h2 className={styles.profileTitle}>Профиль пользователя</h2>
        <div className={styles.profileInfo}>
          <Avatar.Root className={styles.avatar}>
            <Avatar.Image src={data?.avatar || "/default-avatar.png"} alt="Avatar" />
            <Avatar.Fallback>{data?.user?.charAt(0)}</Avatar.Fallback>
          </Avatar.Root>
          <div>
            <h3 className={styles.userName}>{data?.user}</h3>
            <p className={styles.userAbout}>{data?.about}</p>
          </div>
        </div>
        <Dialog.Root open={isEditing} onOpenChange={setIsEditing}>
          <Dialog.Trigger asChild>
            <button className={styles.editButton} onClick={() => reset(data)}>
              <FaEdit /> Редактировать профиль
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={styles.dialogOverlay} />
            <Dialog.Content className={styles.dialogContent}>
              <Dialog.Title>Редактировать профиль</Dialog.Title>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formField}>
                  <Label.Root htmlFor="user" className={styles.label}>Имя</Label.Root>
                  <input id="user" {...register("user")} className={styles.input} />
                </div>
                <div className={styles.formField}>
                  <Label.Root htmlFor="about" className={styles.label}>О себе</Label.Root>
                  <textarea id="about" {...register("about")} className={styles.textarea} />
                </div>
                <div className={styles.formField}>
                  <Label.Root htmlFor="avatar" className={styles.label}>URL аватара</Label.Root>
                  <input id="avatar" {...register("avatar")} className={styles.input} />
                </div>
                <button type="submit" disabled={isUpdating} className={styles.saveButton}>
                  {isUpdating ? 'Сохранение...' : 'Сохранить изменения'}
                </button>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};

export default Profile;