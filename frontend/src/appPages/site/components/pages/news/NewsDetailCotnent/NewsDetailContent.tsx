"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MoreVertical, Edit, Trash2, MessageCircle, ThumbsUp } from 'lucide-react';
import scss from "./NewsDetailContent.module.scss";
import {
  useGetDetNewsQuery,
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useLikeCommentMutation,
  useAddReplyMutation,
  useUpdateReplyMutation,
  useDeleteReplyMutation
} from "@/redux/api/news";

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : NaN;
  const [commentText, setCommentText] = useState("");
  const [editingItem, setEditingItem] = useState<{ id: number, type: 'comment' | 'reply', text: string } | null>(null);
  const [replyingTo, setReplyingTo] = useState<{ id: number, author: string } | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: newsData, isLoading: newsLoading, error: newsError } = useGetDetNewsQuery(newsId);
  const { data: commentsData, isLoading: commentsLoading, error: commentsError, refetch: refetchComments } = useGetCommentsQuery(newsId);
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [likeComment] = useLikeCommentMutation();
  const [addReply] = useAddReplyMutation();
  const [updateReply] = useUpdateReplyMutation();
  const [deleteReply] = useDeleteReplyMutation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_ENDPOINT}/accounts/user/`, {
          credentials: 'include',
        });
        if (response.ok) {
          const userData = await response.json();
          setIsLoggedIn(userData.isAuthenticated);
          setCurrentUser(userData.username);
        } else {
          setIsLoggedIn(false);
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Ошибка при проверке статуса аутентификации:', error);
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    };

    checkAuthStatus();
  }, []);

  const handleAddComment = useCallback(async () => {
    if (commentText.trim() && isLoggedIn) {
      try {
        await addComment({ newsId, text: commentText }).unwrap();
        setCommentText("");
        refetchComments();
      } catch (error) {
        console.error("Ошибка при добавлении комментария:", error);
      }
    }
  }, [addComment, commentText, isLoggedIn, newsId, refetchComments]);

  const handleUpdateItem = useCallback(async () => {
    if (editingItem && editingItem.text.trim()) {
      try {
        if (editingItem.type === 'reply') {
          await updateReply({ replyId: editingItem.id, text: editingItem.text }).unwrap();
        } else {
          await updateComment({ commentId: editingItem.id, text: editingItem.text }).unwrap();
        }
        setEditingItem(null);
        refetchComments();
      } catch (error) {
        console.error("Ошибка при обновлении:", error);
      }
    }
  }, [editingItem, updateComment, updateReply, refetchComments]);

  const handleDeleteItem = useCallback(async (itemId: number, isReply: boolean) => {
    try {
      if (isReply) {
        await deleteReply(itemId).unwrap();
      } else {
        await deleteComment(itemId).unwrap();
      }
      refetchComments();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  }, [deleteComment, deleteReply, refetchComments]);

  const handleLikeComment = useCallback(async (commentId: number) => {
    if (isLoggedIn) {
      try {
        await likeComment({ commentId }).unwrap();
        refetchComments();
      } catch (error) {
        console.error("Ошибка при лайке комментария:", error);
      }
    }
  }, [isLoggedIn, likeComment, refetchComments]);

  const handleReplyToComment = useCallback(async () => {
    if (commentText.trim() && isLoggedIn && replyingTo) {
      try {
        await addReply({ commentId: replyingTo.id, text: commentText }).unwrap();
        setCommentText("");
        setReplyingTo(null);
        refetchComments();
      } catch (error) {
        console.error("Ошибка при добавлении ответа:", error);
      }
    }
  }, [addReply, commentText, isLoggedIn, replyingTo, refetchComments]);

  const renderCommentForm = useCallback((onSubmit: () => void, cancelAction: () => void, placeholder: string) => (
    <div className={scss.commentForm}>
      <textarea
        value={editingItem ? editingItem.text : commentText}
        onChange={(e) => editingItem ? setEditingItem({...editingItem, text: e.target.value}) : setCommentText(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={onSubmit}>Отправить</button>
      <button onClick={cancelAction}>Отмена</button>
    </div>
  ), [editingItem, commentText]);

  const renderCommentActions = useCallback((item: any, isReply: boolean) => (
    <div className={scss.commentActions}>
      <button onClick={() => handleLikeComment(item.id)} className={scss.likeButton}>
        <ThumbsUp size={16} />
        <span>{item.likes_count}</span>
      </button>
      {currentUser === item.author && (
        <Menu>
          <MenuButton as="button" className={scss.moreButton}>
            <MoreVertical size={16} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setEditingItem({ id: item.id, type: isReply ? 'reply' : 'comment', text: item.text })}>
              <Edit size={16} />
              <span>Редактировать</span>
            </MenuItem>
            <MenuItem onClick={() => handleDeleteItem(item.id, isReply)}>
              <Trash2 size={16} />
              <span>Удалить</span>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
      {!isReply && isLoggedIn && (
        <button onClick={() => setReplyingTo({ id: item.id, author: item.author })} className={scss.replyButton}>
          <MessageCircle size={16} />
          <span>Ответить</span>
        </button>
      )}
    </div>
  ), [currentUser, handleDeleteItem, handleLikeComment, isLoggedIn]);

  const renderComment = useCallback((comment: any, isReply = false) => (
    <div key={comment.id} className={`${scss.comment} ${isReply ? scss.reply : ''}`}>
      <p>{comment.text}</p>
      <small>Автор: {comment.author} | Дата: {new Date(comment.created_at).toLocaleString()}</small>
      {renderCommentActions(comment, isReply)}
      {editingItem && editingItem.id === comment.id && renderCommentForm(
        handleUpdateItem,
        () => setEditingItem(null),
        "Редактировать комментарий"
      )}
      {!isReply && comment.replies && comment.replies.map((reply: any) => renderComment(reply, true))}
    </div>
  ), [editingItem, handleUpdateItem, renderCommentActions, renderCommentForm]);

  if (isNaN(newsId)) {
    return <div className={scss.error}>Неверный идентификатор новости</div>;
  }

  if (newsLoading || commentsLoading) return <div className={scss.loading}>Загрузка...</div>;
  if (newsError || commentsError) return <div className={scss.error}>Произошла ошибка при загрузке данных</div>;
  if (!newsData) return <div className={scss.error}>Новость не найдена</div>;

  return (
    <div className={scss.NewsDetailContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>Новости</h1>
            <hr />
          </div>
          <div className={scss.newsContent}>
            <h1>{newsData.description}</h1>
            <Image
              src={newsData.image}
              alt={newsData.description}
              width={700}
              height={500}
              quality={70}
              property="img"
            />
            <p>{newsData.content}</p>
            <div className={scss.newsInfo}>
              <p>Автор: {newsData.author}</p>
              <p>Дата публикации: {new Date(newsData.created_at).toLocaleString()}</p>
              <p>Последнее обновление: {new Date(newsData.updated_at).toLocaleString()}</p>
            </div>
            <hr />
          </div>
          <div className={scss.commentsSection}>
            <h2>Комментарии</h2>
            {commentsData && commentsData.map((comment) => renderComment(comment))}
            {isLoggedIn && !editingItem && !replyingTo && (
              <div className={scss.addComment}>
                <p>Добавить новый комментарий:</p>
                {renderCommentForm(
                  handleAddComment,
                  () => setCommentText(""),
                  "Напишите ваш комментарий"
                )}
              </div>
            )}
            {isLoggedIn && replyingTo && !editingItem && (
              <div className={scss.addComment}>
                <p>Ответ на комментарий пользователя {replyingTo.author}:</p>
                {renderCommentForm(
                  handleReplyToComment,
                  () => {
                    setReplyingTo(null);
                    setCommentText("");
                  },
                  "Напишите ваш ответ"
                )}
              </div>
            )}
            {!isLoggedIn && (
              <p className={scss.loginPrompt}>Пожалуйста, войдите в систему, чтобы оставить комментарий.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsDetailContent);