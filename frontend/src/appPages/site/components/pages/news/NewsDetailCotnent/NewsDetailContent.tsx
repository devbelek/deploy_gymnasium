"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  MoreVertical,
  Edit,
  Trash2,
  MessageCircle,
  ThumbsUp,
  X,
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
  const router = useRouter();
  const params = useParams();
  const newsId =
    typeof params.newsDetail === "string"
      ? parseInt(params.newsDetail, 10)
      : NaN;
  const [commentText, setCommentText] = useState("");
  const [editingComment, setEditingComment] = useState<{
    id: number;
    text: string;
    parentId?: number;
  } | null>(null);
  const [replyingTo, setReplyingTo] = useState<{
    id: number;
    author: string;
  } | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatars, setUserAvatars] = useState<Record<string, string>>({});
  const [enlargedAvatar, setEnlargedAvatar] = useState<string | null>(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const commentSectionRef = useRef<HTMLDivElement>(null);

  const { data: accountData } = useGetAccountQuery(null);

  const {
    data: newsData,
    isLoading: newsLoading,
    error: newsError,
  } = useGetDetNewsQuery(newsId);
  const {
    data: commentsData,
    isLoading: commentsLoading,
    error: commentsError,
  } = useGetCommentsQuery(newsId);
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [likeComment] = useLikeCommentMutation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_ENDPOINT}/accounts/user/`,
          {
            credentials: "include",
          }
        );
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
        const uniqueUsers = Array.from(
          new Set(commentsData.map((comment) => comment.author))
        );
        const newUserAvatars: Record<string, string> = {};

        for (const username of uniqueUsers) {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_ENDPOINT}/user-info/?username=${username}`,
              {
                method: "GET",
                credentials: "include",
              }
            );
            if (response.ok) {
              const userData = await response.json();
              newUserAvatars[username] =
                userData.avatar ||
                `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;
            } else {
              newUserAvatars[
                username
              ] = `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;
            }
          } catch (error) {
            console.error(
              `Ошибка при получении аватара для ${username}:`,
              error
            );
            newUserAvatars[
              username
            ] = `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;
          }
        }

        setUserAvatars(newUserAvatars);
      }
    };

    fetchUserAvatars();
  }, [commentsData]);

  useEffect(() => {
    const handleScroll = () => {
      if (commentSectionRef.current) {
        const rect = commentSectionRef.current.getBoundingClientRect();
        setShowCommentForm(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      } catch (error) {
        console.error("Ошибка при обновлении комментария:", error);
      }
    }
  }, [editingComment, updateComment]);

  const handleDeleteComment = useCallback(
    async (commentId: number, parentId?: number) => {
      try {
        await deleteComment({ commentId, parentId }).unwrap();
      } catch (error) {
        console.error("Ошибка при удалении комментария:", error);
      }
    },
    [deleteComment]
  );

  const handleLikeComment = useCallback(
    async (commentId: number) => {
      if (isLoggedIn) {
        try {
          await likeComment({ commentId }).unwrap();
        } catch (error) {
          console.error("Ошибка при лайке комментария:", error);
        }
      }
    },
    [isLoggedIn, likeComment]
  );

  const renderCommentForm = useCallback(
    (onSubmit: () => void, cancelAction: () => void) => (
      <div className={scss.commentForm}>
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
          <button onClick={onSubmit} className={scss.submitButton}>
            Отправить
          </button>
          <button onClick={cancelAction} className={scss.cancelButton}>
            Отмена
          </button>
        </div>
      </div>
    ),
    [editingComment, commentText]
  );

  const renderCommentActions = useCallback(
    (comment: any, depth: number) => (
      <div className={scss.commentActions}>
        <button
          onClick={() => handleLikeComment(comment.id)}
          className={`${scss.actionButton} ${
            comment.is_liked ? scss.liked : ""
          }`}
        >
          <ThumbsUp size={16} />
          <span>{comment.likes_count}</span>
        </button>
        {isLoggedIn && depth === 0 && (
          <button
            onClick={() =>
              setReplyingTo({ id: comment.id, author: comment.author })
            }
            className={scss.actionButton}
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
                onClick={() =>
                  setEditingComment({
                    id: comment.id,
                    text: comment.text,
                    parentId: comment.parent,
                  })
                }
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
    ),
    [currentUser, handleDeleteComment, handleLikeComment, isLoggedIn]
  );

  const renderComment = useCallback(
    (comment: any, depth = 0) => (
      <div
        key={comment.id}
        className={`${scss.comment} ${depth > 0 ? scss.reply : ""}`}
      >
        <div className={scss.commentHeader}>
          <Image
            src={
              userAvatars[comment.author] ||
              `https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`
            }
            alt={comment.author}
            width={40}
            height={40}
            className={scss.avatar}
            onClick={() => setEnlargedAvatar(userAvatars[comment.author])}
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
        {editingComment &&
          editingComment.id === comment.id &&
          renderCommentForm(handleUpdateComment, () => setEditingComment(null))}
        {comment.replies &&
          comment.replies.map((reply: any) => (
            <div key={reply.id} className={scss.replyWrapper}>
              {renderComment(reply, depth + 1)}
            </div>
          ))}
      </div>
    ),
    [
      editingComment,
      handleUpdateComment,
      renderCommentActions,
      renderCommentForm,
      userAvatars,
    ]
  );

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
              <p>
                Дата публикации:{" "}
                {new Date(newsData.created_at).toLocaleString()}
              </p>
              <p>
                Последнее обновление:{" "}
                {new Date(newsData.updated_at).toLocaleString()}
              </p>
            </div>
            <hr />
          </div>
          <div className={scss.commentsSection} ref={commentSectionRef}>
            <h2>Комментарии</h2>
            {commentsData &&
              commentsData.map((comment) => renderComment(comment))}
          </div>
        </div>
      </div>
      <div
        className={`${scss.fixedCommentForm} ${
          showCommentForm ? "" : scss.hidden
        }`}
      >
        {isLoggedIn ? (
          <div className={scss.addComment}>
            {replyingTo ? (
              <p className={scss.replyingTo}>
                Ответ на комментарий пользователя {replyingTo.author}:
              </p>
            ) : (
              <p className={scss.addNewComment}>Добавить новый комментарий:</p>
            )}
            {renderCommentForm(handleAddComment, () => {
              setReplyingTo(null);
              setCommentText("");
            })}
          </div>
        ) : (
          <p className={scss.loginPrompt}>
            Пожалуйста, войдите в систему, чтобы оставить комментарий.
          </p>
        )}
      </div>
      {enlargedAvatar && (
        <div
          className={`${scss.enlargedAvatarOverlay} ${scss.visible}`}
          onClick={() => setEnlargedAvatar(null)}
        >
          <div className={scss.enlargedAvatarContainer}>
            <Image
              src={enlargedAvatar}
              alt="Enlarged avatar"
              width={200}
              height={200}
              className={scss.enlargedAvatar}
            />
            <button
              className={scss.closeButton}
              onClick={() => setEnlargedAvatar(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(NewsDetailContent);
