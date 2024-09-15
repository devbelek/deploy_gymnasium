"use client";

import React, { useState } from 'react';
import { useGetAccountQuery, useUpdateAccountMutation } from "@/redux/api/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import styles from "./Profile.module.scss";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    user: '',
    about: '',
    avatar: '',
  });

  const { data, error, isLoading } = useGetAccountQuery(null);
  const [updateAccount, { isLoading: isUpdating }] = useUpdateAccountMutation();

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading data</div>;

  const handleEdit = () => {
    setEditedData({
      user: data?.user || '',
      about: data?.about || '',
      avatar: data?.avatar || '',
    });
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updateAccount(editedData).unwrap();
      setIsEditing(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={styles.profileContainer}>
      <Card className={styles.profileCard}>
        <CardHeader>
          <CardTitle className={styles.profileTitle}>Профиль пользователя</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={styles.profileInfo}>
            <Avatar className={styles.avatar}>
              <AvatarImage src={data?.avatar || "/default-avatar.png"} alt="Avatar" />
              <AvatarFallback>{data?.user?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className={styles.userName}>{data?.user}</h2>
              <p className={styles.userAbout}>{data?.about}</p>
            </div>
          </div>
          <Dialog open={isEditing} onOpenChange={setIsEditing}>
            <DialogTrigger asChild>
              <Button onClick={handleEdit} className={styles.editButton}>Редактировать профиль</Button>
            </DialogTrigger>
            <DialogContent className={styles.dialogContent}>
              <DialogHeader>
                <DialogTitle>Редактировать профиль</DialogTitle>
              </DialogHeader>
              <div className={styles.formGrid}>
                <div className={styles.formField}>
                  <Label htmlFor="name" className={styles.label}>
                    Имя
                  </Label>
                  <Input
                    id="name"
                    value={editedData.user}
                    onChange={(e) => setEditedData({ ...editedData, user: e.target.value })}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formField}>
                  <Label htmlFor="about" className={styles.label}>
                    О себе
                  </Label>
                  <Textarea
                    id="about"
                    value={editedData.about}
                    onChange={(e) => setEditedData({ ...editedData, about: e.target.value })}
                    className={styles.textarea}
                  />
                </div>
                <div className={styles.formField}>
                  <Label htmlFor="avatar" className={styles.label}>
                    Аватар URL
                  </Label>
                  <Input
                    id="avatar"
                    value={editedData.avatar}
                    onChange={(e) => setEditedData({ ...editedData, avatar: e.target.value })}
                    className={styles.input}
                  />
                </div>
              </div>
              <Button onClick={handleSave} disabled={isUpdating} className={styles.saveButton}>
                {isUpdating ? 'Сохранение...' : 'Сохранить изменения'}
              </Button>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;