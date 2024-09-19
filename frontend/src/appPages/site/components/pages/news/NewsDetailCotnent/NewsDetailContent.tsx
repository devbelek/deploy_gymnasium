"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  MoreVertical,
  Edit,
  Trash2,
  MessageCircle,
  ThumbsUp,
  X,
  Send,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import scss from "./NewsDetailContent.module.scss";
import {
  useGetDetNewsQuery,
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useLikeCommentMutation,
} from "@/redux/api/news";
import { useGetAccountQuery } from "@/redux/api/profile";

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === "string" ? parseInt(params.newsDetail, 10) : NaN;
  const [commentText, setCommentText] = useState("");
  const [editingComment, setEditingComment] = useState<{ id: number; text: string; parentId?: number } | null>(null);
  const [replyingTo, setReplyingTo] = useState<{ id: number; author: string } | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatars, setUserAvatars] = useState<Record<string, string>>({});
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);
  const commentFormRef = useRef<HTMLDivElement>(null);

  const { data: accountData } = useGetAccountQuery(null);
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
          credentials: "include",
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
        console.error("Ошибка при проверке статуса аутентификации:", error);
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
        const newUserAvatars: Record<string, string> = {};

        for (const username of uniqueUsers) {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_ENDPOINT}/user-info/?username=${username}`, {
              method: 'GET',
              credentials: 'include',
            });
            if (response.ok) {
              const userData = await response.json();
              newUserAvatars[username] = userData.avatar || `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;
            } else {
              newUserAvatars[username] = `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;
            }
          } catch (error) {
            console.error(`Ошибка при получении аватара для ${username}:`, error);
            newUserAvatars[username] = `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;
          }
        }

        setUserAvatars(newUserAvatars);
      }
    };

    fetchUserAvatars();
  }, [commentsData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commentFormRef.current && !commentFormRef.current.contains(event.target as Node)) {
        setIsCommentFormOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAddComment = useCallback(async () => {
    if (commentText.trim() && isLoggedIn) {
      try {
        await addComment({
          newsId,
          text: commentText,
          parentId: replyingTo?.id,
        }).unwrap();
        setCommentText("");
        setReplyingTo(null);
        setIsCommentFormOpen(false);
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
          parentId: editingComment.parentId,
        }).unwrap();
        setEditingComment(null);
        setIsCommentFormOpen(false);
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

  const renderCommentForm = useCallback(() => (
    <div className={scss.commentForm} ref={commentFormRef}>
      <textarea
        value={editingComment ? editingComment.text : commentText}
        onChange={(e) =>
          editingComment
            ? setEditingComment({ ...editingComment, text: e.target.value })
            : setCommentText(e.target.value)
        }
        placeholder="Напишите ваш комментарий"
      />
      <div className={scss.formActions}>
        <button onClick={editingComment ? handleUpdateComment : handleAddComment} className={scss.submitButton}>
          <Send size={20} />
        </button>
        <button onClick={() => {
          setReplyingTo(null);
          setEditingComment(null);
          setCommentText("");
          setIsCommentFormOpen(false);
        }} className={scss.cancelButton}>
          <X size={20} />
        </button>
      </div>
    </div>
  ), [editingComment, commentText, handleUpdateComment, handleAddComment]);

  const renderCommentActions = useCallback((comment: any, depth: number) => (
    <div className={scss.commentActions}>
      <button
        onClick={() => handleLikeComment(comment.id)}
        className={`${scss.actionButton} ${scss.likeButton}`}
      >
        <ThumbsUp size={16} />
        <span>{comment.likes_count}</span>
      </button>
      {isLoggedIn && depth === 0 && (
        <button
          onClick={() => {
            setReplyingTo({ id: comment.id, author: comment.author });
            setIsCommentFormOpen(true);
          }}
          className={`${scss.actionButton} ${scss.replyButton}`}
        >
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
            <MenuItem
              onClick={() => {
                setEditingComment({
                  id: comment.id,
                  text: comment.text,
                  parentId: comment.parent,
                });
                setIsCommentFormOpen(true);
              }}
            >
              <Edit size={16} />
              <span>Редактировать</span>
            </MenuItem>
            <MenuItem
              onClick={() => handleDeleteComment(comment.id, comment.parent)}
            >
              <Trash2 size={16} />
              <span>Удалить</span>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </div>
  ), [currentUser, handleDeleteComment, handleLikeComment, isLoggedIn]);

  const renderComment = useCallback((comment: any, depth = 0) => (
    <div
      key={comment.id}
      className={`${scss.comment} ${depth > 0 ? scss.reply : ""}`}
    >
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
          <span className={scss.commentDate}>
            {new Date(comment.created_at).toLocaleString()}
          </span>
        </div>
      </div>
      <p className={scss.commentContent}>{comment.text}</p>
      {renderCommentActions(comment, depth)}
      {comment.replies &&
        comment.replies.map((reply: any) => (
          <div key={reply.id} className={scss.replyWrapper}>
            {renderComment(reply, depth + 1)}
          </div>
        ))}
    </div>
  ), [renderCommentActions, userAvatars]);

  if (isNaN(newsId)) {
    return <div className={scss.error}>Неверный идентификатор новости</div>;
  }

  if (newsLoading || commentsLoading)
    return <div className={scss.loading}>Загрузка...</div>;
  if (newsError || commentsError)
    return (
      <div className={scss.error}>Произошла ошибка при загрузке данных</div>
    );
  if (!newsData) return <div className={scss.error}>Новость не найдена</div>;

  return (
    <div className={scss.NewsDetailContent}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.newsHeader}>
            <h1>{newsData.description}</h1>
            <div className={scss.newsInfo}>
              <div className={scss.infoItem}>
                <User size={16} />
                <span>{newsData.author}</span>
              </div>
              <div className={scss.infoItem}>
                <Calendar size={16} />
                <span>{new Date(newsData.created_at).toLocaleDateString()}</span>
              </div>
              <div className={scss.infoItem}>
                <Clock size={16} />
                <span>{new Date(newsData.updated_at).toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className={scss.newsImage}>
            <Image
              src={newsData.image}
              alt={newsData.description}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className={scss.newsContent}>
            <p>{newsData.content}</p>
          </div>
          <div className={scss.commentsSection}>
            <h2>Комментарии</h2>
            {commentsData &&
              commentsData.map((comment) => renderComment(comment))}
          </div>
        </div>
      </div>
      {isLoggedIn && (
        <div className={`${scss.fixedCommentForm} ${isCommentFormOpen ? scss.open : ''}`}>
          <button
            className={scss.toggleCommentForm}
            onClick={() => setIsCommentFormOpen(!isCommentFormOpen)}
          >
            {isCommentFormOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </button>
          {isCommentFormOpen && (
            <div className={scss.commentFormWrapper}>
              {replyingTo && (
                <p className={scss.replyingTo}>
                  Ответ на комментарий пользователя {replyingTo.author}:
                </p>
              )}
              {renderCommentForm()}
            </div>
          )}
        </div>
      )}
      {!isLoggedIn && (
        <div className={scss.loginPrompt}>
          Пожалуйста, войдите в систему, чтобы оставить комментарий.
        </div>
      )}
    </div>
  );
};

export default React.memo(NewsDetailContent);