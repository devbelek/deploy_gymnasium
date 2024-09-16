"use client";

import React, { useState, useEffect } from "react";
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
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");
  const [replyingToCommentId, setReplyingToCommentId] = useState<number | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: newsData, isLoading: newsLoading, error: newsError } = useGetDetNewsQuery(newsId);
  const { data: commentsData, isLoading: commentsLoading, error: commentsError } = useGetCommentsQuery(newsId);
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();
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

  if (isNaN(newsId)) {
    return <div className={scss.error}>Неверный идентификатор новости</div>;
  }

  if (newsLoading || commentsLoading) return <div className={scss.loading}>Загрузка...</div>;
  if (newsError || commentsError) return <div className={scss.error}>Произошла ошибка при загрузке данных</div>;
  if (!newsData) return <div className={scss.error}>Новость не найдена</div>;

  const handleAddComment = async () => {
    if (commentText.trim() && isLoggedIn) {
      try {
        await addComment({ newsId, text: commentText }).unwrap();
        setCommentText("");
      } catch (error) {
        console.error("Ошибка при добавлении комментария:", error);
      }
    }
  };

  const handleUpdateItem = async (itemId: number, isReply: boolean) => {
    if (editedText.trim()) {
      try {
        if (isReply) {
          await updateReply({ replyId: itemId, text: editedText }).unwrap();
        } else {
          await updateComment({ commentId: itemId, text: editedText }).unwrap();
        }
        setEditingItemId(null);
        setEditedText("");
      } catch (error) {
        console.error("Ошибка при обновлении:", error);
      }
    }
  };

  const handleDeleteItem = async (itemId: number, isReply: boolean) => {
    try {
      if (isReply) {
        await deleteReply(itemId).unwrap();
      } else {
        await deleteComment(itemId).unwrap();
      }
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  const handleLikeComment = async (commentId: number) => {
    if (isLoggedIn) {
      try {
        await likeComment({ commentId }).unwrap();
      } catch (error) {
        console.error("Ошибка при лайке комментария:", error);
      }
    }
  };

  const handleReplyToComment = async (parentCommentId: number) => {
    if (editedText.trim() && isLoggedIn) {
      try {
        await addReply({ commentId: parentCommentId, text: editedText }).unwrap();
        setReplyingToCommentId(null);
        setEditedText("");
      } catch (error) {
        console.error("Ошибка при добавлении ответа:", error);
      }
    }
  };

  const renderCommentForm = (onSubmit: () => void, cancelAction: () => void) => (
    <div className={scss.commentForm}>
      <textarea
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        placeholder="Напишите ваш комментарий"
      />
      <button onClick={onSubmit}>Отправить</button>
      <button onClick={cancelAction}>Отмена</button>
    </div>
  );

  const renderCommentActions = (item: any, isReply: boolean) => (
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
            <MenuItem onClick={() => {
              setEditingItemId(item.id);
              setEditedText(item.text);
            }}>
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
        <button onClick={() => {
          setReplyingToCommentId(item.id);
          setEditedText("");
        }} className={scss.replyButton}>
          <MessageCircle size={16} />
          <span>Ответить</span>
        </button>
      )}
    </div>
  );

  const renderComment = (comment: any, isReply = false) => (
    <div key={comment.id} className={`${scss.comment} ${isReply ? scss.reply : ''}`}>
      <p>{comment.text}</p>
      <small>Автор: {comment.author} | Дата: {new Date(comment.created_at).toLocaleString()}</small>
      {renderCommentActions(comment, isReply)}
      {editingItemId === comment.id && renderCommentForm(
        () => handleUpdateItem(comment.id, isReply),
        () => setEditingItemId(null)
      )}
      {replyingToCommentId === comment.id && renderCommentForm(
        () => handleReplyToComment(comment.id),
        () => setReplyingToCommentId(null)
      )}
      {comment.replies && comment.replies.map((reply: any) => renderComment(reply, true))}
    </div>
  );

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
            {isLoggedIn ? (
              <div className={scss.addComment}>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Напишите ваш комментарий"
                />
                <button onClick={handleAddComment} disabled={isAddingComment}>
                  {isAddingComment ? "Добавление..." : "Добавить комментарий"}
                </button>
              </div>
            ) : (
              <p className={scss.loginPrompt}>Пожалуйста, войдите в систему, чтобы оставить комментарий.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;