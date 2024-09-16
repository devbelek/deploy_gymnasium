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
} from "@/redux/api/news";

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : NaN;
  const [commentText, setCommentText] = useState("");
  const [editingComment, setEditingComment] = useState<{ id: number, text: string } | null>(null);
  const [replyingTo, setReplyingTo] = useState<{ id: number, author: string } | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: newsData, isLoading: newsLoading, error: newsError } = useGetDetNewsQuery(newsId);
  const { data: commentsData, isLoading: commentsLoading, error: commentsError } = useGetCommentsQuery(newsId);
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [likeComment] = useLikeCommentMutation();

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
        await addComment({ newsId, text: commentText, parentId: replyingTo?.id }).unwrap();
        setCommentText("");
        setReplyingTo(null);
      } catch (error) {
        console.error("Ошибка при добавлении комментария:", error);
      }
    }
  }, [addComment, commentText, isLoggedIn, newsId, replyingTo]);

  const handleUpdateComment = useCallback(async () => {
    if (editingComment && editingComment.text.trim()) {
      try {
        await updateComment({ commentId: editingComment.id, text: editingComment.text }).unwrap();
        setEditingComment(null);
      } catch (error) {
        console.error("Ошибка при обновлении комментария:", error);
      }
    }
  }, [editingComment, updateComment]);

  const handleDeleteComment = useCallback(async (commentId: number) => {
    try {
      await deleteComment(commentId).unwrap();
    } catch (error) {
      console.error("Ошибка при удалении комментария:", error);
    }
  }, [deleteComment]);

  const handleLikeComment = useCallback(async (commentId: number) => {
    if (isLoggedIn) {
      try {
        await likeComment({ commentId }).unwrap();
      } catch (error) {
        console.error("Ошибка при лайке комментария:", error);
      }
    }
  }, [isLoggedIn, likeComment]);

  const renderCommentForm = useCallback((onSubmit: () => void, cancelAction: () => void) => (
    <div className={scss.commentForm}>
      <textarea
        value={editingComment ? editingComment.text : commentText}
        onChange={(e) => editingComment ? setEditingComment({...editingComment, text: e.target.value}) : setCommentText(e.target.value)}
        placeholder="Напишите ваш комментарий"
      />
      <button onClick={onSubmit}>Отправить</button>
      <button onClick={cancelAction}>Отмена</button>
    </div>
  ), [editingComment, commentText]);

  const renderCommentActions = useCallback((comment: any) => (
    <div className={scss.commentActions}>
      <button onClick={() => handleLikeComment(comment.id)} className={scss.likeButton}>
        <ThumbsUp size={16} />
        <span>{comment.likes_count}</span>
      </button>
      {currentUser === comment.author && (
        <Menu>
          <MenuButton as="button" className={scss.moreButton}>
            <MoreVertical size={16} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setEditingComment({ id: comment.id, text: comment.text })}>
              <Edit size={16} />
              <span>Редактировать</span>
            </MenuItem>
            <MenuItem onClick={() => handleDeleteComment(comment.id)}>
              <Trash2 size={16} />
              <span>Удалить</span>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
      {isLoggedIn && (
        <button onClick={() => setReplyingTo({ id: comment.id, author: comment.author })} className={scss.replyButton}>
          <MessageCircle size={16} />
          <span>Ответить</span>
        </button>
      )}
    </div>
  ), [currentUser, handleDeleteComment, handleLikeComment, isLoggedIn]);

  const renderComment = useCallback((comment: any) => (
    <div key={comment.id} className={scss.comment}>
      <p>{comment.text}</p>
      <small>Автор: {comment.author} | Дата: {new Date(comment.created_at).toLocaleString()}</small>
      {renderCommentActions(comment)}
      {editingComment && editingComment.id === comment.id && renderCommentForm(
        handleUpdateComment,
        () => setEditingComment(null)
      )}
      {comment.replies && comment.replies.map((reply: any) => (
        <div key={reply.id} className={scss.reply}>
          {renderComment(reply)}
        </div>
      ))}
    </div>
  ), [editingComment, handleUpdateComment, renderCommentActions, renderCommentForm]);

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
            {isLoggedIn ? (
              <div className={scss.addComment}>
                {replyingTo ? (
                  <p>Ответ на комментарий пользователя {replyingTo.author}:</p>
                ) : (
                  <p>Добавить новый комментарий:</p>
                )}
                {renderCommentForm(
                  handleAddComment,
                  () => {
                    setReplyingTo(null);
                    setCommentText("");
                  }
                )}
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

export default React.memo(NewsDetailContent);