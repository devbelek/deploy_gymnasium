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
import { useLanguageStore } from "@/stores/useLanguageStore";

const NewsDetailContent: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const { isKyrgyz, t } = useLanguageStore();
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
        console.error(
          t(
            "Аутентификация статусун текшерүүдө ката:",
            "Ошибка при проверке статуса аутентификации:"
          ),
          error
        );
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    };

    checkAuthStatus();
  }, [t]);

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
              t(
                `${username} үчүн аватарды алууда ката:`,
                `Ошибка при получении аватара для ${username}:`
              ),
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
  }, [commentsData, t]);

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
        console.error(
          t("Пикир кошууда ката:", "Ошибка при добавлении комментария:"),
          error
        );
      }
    }
  }, [addComment, commentText, isLoggedIn, newsId, replyingTo, t]);

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
        console.error(
          t("Пикирди жаңыртууда ката:", "Ошибка при обновлении комментария:"),
          error
        );
      }
    }
  }, [editingComment, updateComment, t]);

  const handleDeleteComment = useCallback(
    async (commentId: number, parentId?: number) => {
      try {
        await deleteComment({ commentId, parentId }).unwrap();
      } catch (error) {
        console.error(
          t("Пикирди өчүрүүдө ката:", "Ошибка при удалении комментария:"),
          error
        );
      }
    },
    [deleteComment, t]
  );

  const handleLikeComment = useCallback(
    async (commentId: number) => {
      if (isLoggedIn) {
        try {
          await likeComment({ commentId }).unwrap();
        } catch (error) {
          console.error(
            t("Пикирге лайк коюуда ката:", "Ошибка при лайке комментария:"),
            error
          );
        }
      }
    },
    [isLoggedIn, likeComment, t]
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
          placeholder={t("Пикириңизди жазыңыз", "Напишите ваш комментарий")}
        />
        <div className={scss.formActions}>
          <button onClick={onSubmit} className={scss.submitButton}>
            {t("Жөнөтүү", "Отправить")}
          </button>
          <button onClick={cancelAction} className={scss.cancelButton}>
            {t("Жокко чыгаруу", "Отмена")}
          </button>
        </div>
      </div>
    ),
    [editingComment, commentText, t]
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
            <span>{t("Жооп берүү", "Ответить")}</span>
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
                <span>{t("Түзөтүү", "Редактировать")}</span>
              </MenuItem>
              <MenuItem
                onClick={() => handleDeleteComment(comment.id, comment.parent)}
              >
                <Trash2 size={16} />
                <span>{t("Өчүрүү", "Удалить")}</span>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </div>
    ),
    [currentUser, handleDeleteComment, handleLikeComment, isLoggedIn, t]
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
    return (
      <div className={scss.error}>
        {t(
          "Туура эмес жаңылык идентификатору",
          "Неверный идентификатор новости"
        )}
      </div>
    );
  }

  if (newsLoading || commentsLoading)
    return (
      <div className={scss.loading}>{t("Жүктөлүүдө...", "Загрузка...")}</div>
    );
  if (newsError || commentsError)
    return (
      <div className={scss.error}>
        {t(
          "Маалыматтарды жүктөөдө ката кетти",
          "Произошла ошибка при загрузке данных"
        )}
      </div>
    );
  if (!newsData)
    return (
      <div className={scss.error}>
        {t("Жаңылык табылган жок", "Новость не найдена")}
      </div>
    );

  return (
    <div className={scss.NewsDetailContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>{t("Жаңылыктар", "Новости")}</h1>
            <hr />
          </div>
          <div className={scss.newsContent}>
            <h1>
              {isKyrgyz ? newsData.description_ky : newsData.description_ru}
            </h1>
            <Image
              src={newsData.image}
              alt="img"
              width={700}
              height={500}
              quality={70}
              property="img"
            />
            <p>{isKyrgyz ? newsData.content_ky : newsData.content_ru}</p>
            <div className={scss.newsInfo}>
              <p>
                {t("Автор", "Автор")}: {newsData.author}
              </p>
              <p>
                {t("Жарыяланган күнү", "Дата публикации")}:{" "}
                {new Date(newsData.created_at).toLocaleString()}
              </p>
              <p>
                {t("Акыркы жаңыртуу", "Последнее обновление")}:{" "}
                {new Date(newsData.updated_at).toLocaleString()}
              </p>
            </div>
            <hr />
          </div>

          <div className={scss.commentsSection} ref={commentSectionRef}>
            <h2>{t("Пикирлер", "Комментарии")}</h2>
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
                {t(
                  `${replyingTo.author} колдонуучунун пикирине жооп:`,
                  `Ответ на комментарий пользователя ${replyingTo.author}:`
                )}
              </p>
            ) : (
              <p className={scss.addNewComment}>
                {t("Жаңы пикир кошуу:", "Добавить новый комментарий:")}
              </p>
            )}
            {renderCommentForm(handleAddComment, () => {
              setReplyingTo(null);
              setCommentText("");
            })}
          </div>
        ) : (
          <p className={scss.loginPrompt}>
            {t(
              "Пикир калтыруу үчүн системага кириңиз.",
              "Пожалуйста, войдите в систему, чтобы оставить комментарий."
            )}
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
              alt={t("Чоңойтулган аватар", "Увеличенный аватар")}
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
