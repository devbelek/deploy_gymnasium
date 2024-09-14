"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation, useLikeCommentMutation, useAddReplyMutation } from '@/redux/api/news';
import scss from './NewsCommentsContent.module.scss';

const NewsCommentsContent: React.FC = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : NaN;

  const { data: comments, isLoading, error, refetch } = useGetCommentsQuery(newsId, {
    skip: isNaN(newsId)
  });
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [likeComment] = useLikeCommentMutation();
  const [addReply] = useAddReplyMutation();

  const [newCommentText, setNewCommentText] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingCommentText, setEditingCommentText] = useState('');
  const [replyingToCommentId, setReplyingToCommentId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    console.log('NewsId:', newsId);
    console.log('Is Loading:', isLoading);
    console.log('Error:', error);
    console.log('Comments:', comments);
  }, [newsId, isLoading, error, comments]);

  const handleAddComment = async () => {
    if (newCommentText.trim() && !isNaN(newsId)) {
      try {
        await addComment({ newsId, text: newCommentText }).unwrap();
        setNewCommentText('');
        refetch();
      } catch (error) {
        console.error('Failed to add comment:', error);
        alert('Не удалось добавить комментарий. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  const handleUpdateComment = async (commentId: number) => {
    if (editingCommentText.trim()) {
      try {
        await updateComment({ commentId, text: editingCommentText }).unwrap();
        setEditingCommentId(null);
        setEditingCommentText('');
        refetch();
      } catch (error) {
        console.error('Failed to update comment:', error);
        alert('Не удалось обновить комментарий. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот комментарий?')) {
      try {
        await deleteComment(commentId).unwrap();
        refetch();
      } catch (error) {
        console.error('Failed to delete comment:', error);
        alert('Не удалось удалить комментарий. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  const handleLikeComment = async (commentId: number) => {
    try {
      await likeComment(commentId).unwrap();
      refetch();
    } catch (error) {
      console.error('Failed to like comment:', error);
      alert('Не удалось поставить лайк. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handleAddReply = async (commentId: number) => {
    if (replyText.trim()) {
      try {
        await addReply({ commentId, text: replyText }).unwrap();
        setReplyingToCommentId(null);
        setReplyText('');
        refetch();
      } catch (error) {
        console.error('Failed to add reply:', error);
        alert('Не удалось добавить ответ. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  if (isNaN(newsId)) {
    return <div>Некорректный идентификатор новости</div>;
  }

  if (isLoading) return <div>Загрузка комментариев...</div>;

  if (error) {
    console.error('Error loading comments:', error);
    return (
      <div>
        <div>Ошибка при загрузке комментариев. Пожалуйста, попробуйте обновить страницу.</div>
        <button onClick={() => refetch()}>Попробовать снова</button>
      </div>
    );
  }

  return (
    <div className={scss.NewsCommentsContent}>
      <h2>Комментарии</h2>
      <div className={scss.addCommentForm}>
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Написать комментарий..."
        />
        <button onClick={handleAddComment}>Отправить</button>
      </div>
      {Array.isArray(comments) && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className={scss.comment}>
            <p><strong>{comment.author}</strong>: {comment.text}</p>
            <div className={scss.commentActions}>
              <button onClick={() => handleLikeComment(comment.id)}>
                {comment.is_liked ? 'Убрать лайк' : 'Лайк'} ({comment.likes_count})
              </button>
              <button onClick={() => setReplyingToCommentId(comment.id)}>Ответить</button>
              {comment.author === 'Текущий пользователь' && (
                <>
                  <button onClick={() => {
                    setEditingCommentId(comment.id);
                    setEditingCommentText(comment.text);
                  }}>Редактировать</button>
                  <button onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
                </>
              )}
            </div>
            {editingCommentId === comment.id && (
              <div className={scss.editCommentForm}>
                <textarea
                  value={editingCommentText}
                  onChange={(e) => setEditingCommentText(e.target.value)}
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
                  placeholder="Написать ответ..."
                />
                <button onClick={() => handleAddReply(comment.id)}>Отправить ответ</button>
                <button onClick={() => setReplyingToCommentId(null)}>Отмена</button>
              </div>
            )}
            {comment.replies && comment.replies.map((reply) => (
              <div key={reply.id} className={scss.reply}>
                <p><strong>{reply.author}</strong>: {reply.text}</p>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div>Комментариев пока нет.</div>
      )}
    </div>
  );
};

export default NewsCommentsContent;