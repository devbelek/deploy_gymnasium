"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from "next/image";
import { useGetDetNewsQuery } from "@/redux/api/news";
import { useGetCommentsQuery, useAddCommentMutation, useDeleteCommentMutation, useUpdateCommentMutation } from "@/redux/api/comments";
import { useSelector } from 'react-redux';
import scss from "./NewsDetailContent.module.scss";
import CommentReplies from './CommentReplies';
import CommentLikes from './CommentLikes';

interface Comment {
  id: number;
  text: string;
  created_at: string;
  user: {
    id: number;
    username: string;
  };
  replies: Comment[];
  likes: number;
  isLiked: boolean;
}

interface NewsData {
  description: string;
  image: string;
  content: string;
}

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsDetail = params.newsDetail as string;
  const user = useSelector((state: any) => state.auth.user);

  const { data: newsData, error: newsError, isLoading: newsLoading } = useGetDetNewsQuery(newsDetail);
  const { data: commentsData, error: commentsError, isLoading: commentsLoading, refetch: refetchComments } = useGetCommentsQuery(Number(newsDetail));
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [updateComment] = useUpdateCommentMutation();

  const [newCommentText, setNewCommentText] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingCommentText, setEditingCommentText] = useState<string>('');

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleAddComment = async (): Promise<void> => {
    if (newCommentText.trim()) {
      try {
        await addComment({ news: Number(newsDetail), text: newCommentText }).unwrap();
        setNewCommentText('');
        refetchComments();
        setAlertMessage('Комментарий успешно добавлен!');
      } catch (error) {
        setAlertMessage('Не удалось добавить комментарий. Попробуйте еще раз.');
      }
    }
  };

  const handleDeleteComment = async (commentId: number): Promise<void> => {
    try {
      await deleteComment(commentId).unwrap();
      refetchComments();
      setAlertMessage('Комментарий успешно удален!');
    } catch (error) {
      setAlertMessage('Не удалось удалить комментарий. Попробуйте еще раз.');
    }
  };

  const handleEditComment = async (commentId: number): Promise<void> => {
    if (editingCommentText.trim()) {
      try {
        await updateComment({ commentId, text: editingCommentText }).unwrap();
        setEditingCommentId(null);
        setEditingCommentText('');
        refetchComments();
        setAlertMessage('Комментарий успешно отредактирован!');
      } catch (error) {
        setAlertMessage('Не удалось отредактировать комментарий. Попробуйте еще раз.');
      }
    }
  };

  const startEditing = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setEditingCommentText(comment.text);
  };

  if (newsLoading) return <div className={scss.loading}>Загрузка новости...</div>;
  if (newsError) return <div className={scss.error}>Ошибка загрузки новости.</div>;

  return (
    <div className={scss.NewsDetailContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>Новости</h1>
            <hr />
          </div>
          <div className={scss.newsContent}>
            <h1>{(newsData as NewsData)?.description}</h1>
            <Image
              src={(newsData as NewsData)?.image || '/placeholder-image.jpg'}
              alt="img"
              width={700}
              height={500}
              quality={70}
            />
            <p>{(newsData as NewsData)?.content}</p>
            <hr />
          </div>
          <div className={scss.newsComments}>
            <h2>Комментарии пользователей:</h2>
            {alertMessage && (
              <div className={scss.alert}>{alertMessage}</div>
            )}
            {user && (
              <div className={scss.addComment}>
                <textarea
                  value={newCommentText}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewCommentText(e.target.value)}
                  placeholder="Напишите комментарий..."
                />
                <button onClick={handleAddComment} disabled={isAddingComment}>
                  {isAddingComment ? 'Отправка...' : 'Отправить'}
                </button>
              </div>
            )}
            <div className={scss.commentList}>
              {commentsLoading && <p>Загрузка комментариев...</p>}
              {commentsError && <p className={scss.error}>Ошибка загрузки комментариев.</p>}
              {(commentsData as Comment[])?.map((comment) => (
                <div key={comment.id} className={scss.comment}>
                  <p><strong>{comment.user.username}</strong></p>
                  {editingCommentId === comment.id ? (
                    <>
                      <textarea
                        value={editingCommentText}
                        onChange={(e) => setEditingCommentText(e.target.value)}
                      />
                      <button onClick={() => handleEditComment(comment.id)}>Сохранить</button>
                      <button onClick={() => setEditingCommentId(null)}>Отмена</button>
                    </>
                  ) : (
                    <>
                      <p>{comment.text}</p>
                      <p className={scss.commentDate}>{new Date(comment.created_at).toLocaleString()}</p>
                      <CommentLikes commentId={comment.id} initialLiked={comment.isLiked} />
                      {user && user.id === comment.user.id && (
                        <div className={scss.commentActions}>
                          <button onClick={() => startEditing(comment)}>Изменить</button>
                          <button onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
                        </div>
                      )}
                      <CommentReplies commentId={comment.id} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;