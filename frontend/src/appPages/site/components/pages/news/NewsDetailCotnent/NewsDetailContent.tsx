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
  const [editingComment, setEditingComment] = useState<{ id: number, text: string, parentId?: number } | null>(null);
  const [replyingTo, setReplyingTo] = useState<{ id: number, author: string } | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatars, setUserAvatars] = useState<{ [key: string]: string }>({});

  const { data: newsData, isLoading: newsLoading, error: newsError } = useGetDetNewsQuery(newsId);
  const { data: commentsData, isLoading: commentsLoading, error: commentsError } = useGetCommentsQuery(newsId);
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [likeComment] = useLikeCommentMutation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/accounts/user/`, {
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

useEffect(() => {
  const fetchUserAvatars = async () => {
    if (commentsData) {
      const uniqueUsers = Array.from(new Set(commentsData.map(comment => comment.author)));

      const avatarPromises = uniqueUsers.map(async username => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API}/profile/${username}/`, {
            credentials: 'include',
          });
          if (response.ok) {
            const userData = await response.json();
            return { username, avatar: userData.avatar };
          }
        } catch (error) {
          console.error(`Ошибка при получении аватара для ${username}:`, error);
        }
        return { username, avatar: null };
      });

      const avatarResults = await Promise.all(avatarPromises);

      // Создаем карту аватаров, заменяя null на URL с генерацией аватара по имени
      const avatarMap: { [key: string]: string } = avatarResults.reduce((acc, { username, avatar }) => {
        acc[username] = avatar ?? `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;
        return acc;
      }, {} as { [key: string]: string });

      setUserAvatars(avatarMap);
    }
  };

  fetchUserAvatars();
}, [commentsData]);



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
        await updateComment({
          commentId: editingComment.id,
          text: editingComment.text,
          parentId: editingComment.parentId
        }).unwrap();
        setEditingComment(null);
      } catch (error) {
        console.error("Ошибка при обновлении комментария:", error);
      }
    }
  }, [editingComment, updateComment]);

  const handleDeleteComment = useCallback(async (commentId: number, parentId?: number) => {
    try {
      await deleteComment({ commentId, parentId }).unwrap();
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

  const renderCommentForm = useCallback((onSubmit: () => void, cancelAction: () => void, placeholder: string) => (
    <div className={scss.commentForm}>
      <textarea
        value={editingComment ? editingComment.text : commentText}
        onChange={(e) => editingComment ? setEditingComment({...editingComment, text: e.target.value}) : setCommentText(e.target.value)}
        placeholder={placeholder}
      />
      <div className={scss.formActions}>
        <button onClick={onSubmit} className={scss.submitButton}>Отправить</button>
        <button onClick={cancelAction} className={scss.cancelButton}>Отмена</button>
      </div>
    </div>
  ), [editingComment, commentText]);

  const renderCommentActions = useCallback((comment: any, depth: number) => (
    <div className={scss.commentActions}>
      <button onClick={() => handleLikeComment(comment.id)} className={scss.actionButton}>
        <ThumbsUp size={16} />
        <span>{comment.likes_count}</span>
      </button>
      {isLoggedIn && depth === 0 && (
        <button onClick={() => setReplyingTo({ id: comment.id, author: comment.author })} className={scss.actionButton}>
          <MessageCircle size={16} />
          <span>Ответить</span>
        </button>
      )}
      {currentUser === comment.author && (
        <Menu>
          <MenuButton as="button" className={scss.moreButton}>
            <MoreVertical size={16} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setEditingComment({ id: comment.id, text: comment.text, parentId: comment.parent })}>
              <Edit size={16} />
              <span>Редактировать</span>
            </MenuItem>
            <MenuItem onClick={() => handleDeleteComment(comment.id, comment.parent)}>
              <Trash2 size={16} />
              <span>Удалить</span>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </div>
  ), [currentUser, handleDeleteComment, handleLikeComment, isLoggedIn]);

  const renderComment = useCallback((comment: any, depth = 0) => (
    <div key={comment.id} className={`${scss.comment} ${depth > 0 ? scss.reply : ''}`}>
      <div className={scss.commentHeader}>
        <Image
          src={userAvatars[comment.author] || `https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`}
          alt={comment.author}
          width={40}
          height={40}
          className={scss.avatar}
        />
        <div className={scss.commentInfo}>
          <span className={scss.commentAuthor}>{comment.author}</span>
          <span className={scss.commentDate}>{new Date(comment.created_at).toLocaleString()}</span>
        </div>
      </div>
      <p className={scss.commentContent}>{comment.text}</p>
      {renderCommentActions(comment, depth)}
      {editingComment && editingComment.id === comment.id && renderCommentForm(
        handleUpdateComment,
        () => setEditingComment(null),
        "Редактировать комментарий"
      )}
      {replyingTo && replyingTo.id === comment.id && (
        <div className={scss.replyForm}>
          <p className={scss.replyingTo}>Ответ на комментарий пользователя {replyingTo.author}:</p>
          {renderCommentForm(
            handleAddComment,
            () => setReplyingTo(null),
            "Напишите ваш ответ"
          )}
        </div>
      )}
      {comment.children && comment.children.map((child: any) => renderComment(child, depth + 1))}
    </div>
  ), [editingComment, handleAddComment, handleUpdateComment, renderCommentActions, renderCommentForm, replyingTo, userAvatars]);

  if (newsLoading || commentsLoading) return <div>Загрузка...</div>;
  if (newsError || commentsError) return <div>Ошибка при загрузке данных</div>;

  return (
    <div className={scss.newsDetailContent}>
      <h2>{newsData?.description}</h2>
      <p>{newsData?.content}</p>
      <div className={scss.commentsSection}>
        <h3>Комментарии</h3>
        {isLoggedIn && renderCommentForm(handleAddComment, () => setCommentText(""), "Оставьте ваш комментарий")}
        {commentsData && commentsData.length > 0 ? (
          commentsData.map((comment: any) => renderComment(comment))
        ) : (
          <p>Комментариев пока нет</p>
        )}
      </div>
    </div>
  );
};

export default NewsDetailContent;
