"use client";
import { useParams } from "next/navigation";
import scss from "./NewsDetailContent.module.scss";
import { useGetDetNewsQuery, useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation, useLikeCommentMutation, useAddReplyMutation } from "@/redux/api/news";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getCSRFToken } from './csrf';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MoreVertical, Edit, Trash2, MessageCircle, ThumbsUp } from 'lucide-react';

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : NaN;
  const [commentText, setCommentText] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedCommentText, setEditedCommentText] = useState("");
  const [replyingToCommentId, setReplyingToCommentId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const { data: newsData, isLoading: newsLoading, error: newsError } = useGetDetNewsQuery(newsId);
  const { data: commentsData, isLoading: commentsLoading, error: commentsError } = useGetCommentsQuery(newsId);
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [likeComment] = useLikeCommentMutation();
  const [addReply] = useAddReplyMutation();

  useEffect(() => {
    // Здесь должна быть логика получения текущего пользователя
    // Для примера используем моковые данные
    setCurrentUser("CurrentUser");
  }, []);

  if (isNaN(newsId)) {
    return <div>Некорректный идентификатор новости</div>;
  }

  if (newsLoading || commentsLoading) return <div>Загрузка...</div>;
  if (newsError || commentsError) return <div>Произошла ошибка при загрузке данных</div>;
  if (!newsData) return <div>Новость не найдена</div>;

  const handleAddComment = async () => {
    if (commentText.trim()) {
      try {
        await addComment({ newsId, text: commentText }).unwrap();
        setCommentText("");
      } catch (error) {
        console.error("Ошибка при добавлении комментария:", error);
      }
    }
  };

  const handleUpdateComment = async (commentId: number) => {
    if (editedCommentText.trim()) {
      try {
        await updateComment({ commentId, text: editedCommentText }).unwrap();
        setEditingCommentId(null);
        setEditedCommentText("");
      } catch (error) {
        console.error("Ошибка при обновлении комментария:", error);
      }
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment(commentId).unwrap();
    } catch (error) {
      console.error("Ошибка при удалении комментария:", error);
    }
  };

  const handleLikeComment = async (commentId: number) => {
    try {
      await likeComment({ commentId }).unwrap();
    } catch (error) {
      console.error("Ошибка при лайке комментария:", error);
    }
  };

  const handleReplyToComment = async (parentCommentId: number) => {
    if (replyText.trim()) {
      try {
        await addReply({ commentId: parentCommentId, text: replyText }).unwrap();
        setReplyingToCommentId(null);
        setReplyText("");
      } catch (error) {
        console.error("Ошибка при добавлении ответа:", error);
      }
    }
  };

  const renderComment = (comment: any, isReply = false) => (
    <div key={comment.id} className={`${scss.comment} ${isReply ? scss.reply : ''}`}>
      <p>{comment.text}</p>
      <small>Автор: {comment.author} | Дата: {new Date(comment.created_at).toLocaleString()}</small>
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
              <MenuItem onClick={() => setEditingCommentId(comment.id)}>
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
        {!isReply && (
          <button onClick={() => setReplyingToCommentId(comment.id)} className={scss.replyButton}>
            <MessageCircle size={16} />
            <span>Ответить</span>
          </button>
        )}
      </div>
      {editingCommentId === comment.id && (
        <div className={scss.editCommentForm}>
          <textarea
            value={editedCommentText}
            onChange={(e) => setEditedCommentText(e.target.value)}
            placeholder="Отредактируйте комментарий"
          />
          <button onClick={() => handleUpdateComment(comment.id)}>Сохранить</button>
          <button onClick={() => setEditingCommentId(null)}>Отмена</button>
        </div>
      )}
      {replyingToCommentId === comment.id && (
        <div className={scss.replyForm}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Напишите ваш ответ"
          />
          <button onClick={() => handleReplyToComment(comment.id)}>Ответить</button>
          <button onClick={() => setReplyingToCommentId(null)}>Отмена</button>
        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;