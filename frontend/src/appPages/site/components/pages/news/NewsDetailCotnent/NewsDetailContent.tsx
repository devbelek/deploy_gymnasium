"use client";

import React, { useState } from 'react';
import { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation, useLikeCommentMutation } from "@/redux/api/comments";
import { Comment } from '@/redux/api/comments/types';
import { useSelector } from 'react-redux';
import CommentReplies from './CommentReplies';
import scss from "./NewsDetailContent.module.scss";

const NewsDetailContent: React.FC<{ newsId: number }> = ({ newsId }) => {
  const { data: commentsData, isLoading: commentsLoading, error: commentsError, refetch: refetchComments } = useGetCommentsQuery(newsId);
  const [addComment] = useAddCommentMutation();
  const [editComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [likeComment] = useLikeCommentMutation();

  const [newCommentText, setNewCommentText] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingCommentText, setEditingCommentText] = useState('');

  const user = useSelector((state: any) => state.auth.user);

  const handleAddComment = async () => {
    if (newCommentText.trim()) {
      try {
        await addComment({ news: newsId, text: newCommentText }).unwrap();
        setNewCommentText('');
        refetchComments();
      } catch (error) {
        console.error('Failed to add comment:', error);
      }
    }
  };

  const handleEditComment = async (commentId: number) => {
    if (editingCommentText.trim()) {
      try {
        await editComment({ id: commentId, text: editingCommentText }).unwrap();
        setEditingCommentId(null);
        refetchComments();
      } catch (error) {
        console.error('Failed to edit comment:', error);
      }
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment(commentId).unwrap();
      refetchComments();
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  };

  const handleLikeComment = async (commentId: number) => {
    try {
      await likeComment(commentId).unwrap();
      refetchComments();
    } catch (error) {
      console.error('Failed to like comment:', error);
    }
  };

  return (
    <div className={scss.newsDetailContent}>
      <div className={scss.comments}>
        <h3>Комментарии</h3>
        {commentsLoading && <p>Загрузка комментариев...</p>}
        {commentsError && <p className={scss.error}>Ошибка загрузки комментариев.</p>}
        {commentsData && commentsData.map((comment: Comment) => (
          <div key={comment.id} className={scss.comment}>
            <p><strong>{comment.user.username}</strong></p>
            {editingCommentId === comment.id ? (
              <div>
                <textarea
                  value={editingCommentText}
                  onChange={(e) => setEditingCommentText(e.target.value)}
                />
                <button onClick={() => handleEditComment(comment.id)}>Сохранить</button>
                <button onClick={() => setEditingCommentId(null)}>Отмена</button>
              </div>
            ) : (
              <>
                <p>{comment.text}</p>
                <p className={scss.commentDate}>{new Date(comment.created_at).toLocaleString()}</p>
                {user && user.id === comment.user.id && (
                  <>
                    <button onClick={() => {
                      setEditingCommentId(comment.id);
                      setEditingCommentText(comment.text);
                    }}>Редактировать</button>
                    <button onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
                  </>
                )}
                <button onClick={() => handleLikeComment(comment.id)}>
                  {comment.isLiked ? 'Убрать лайк' : 'Лайк'} ({comment.likes.length})
                </button>
                <CommentReplies commentId={comment.id} />
              </>
            )}
          </div>
        ))}
      </div>
      {user && (
        <div className={scss.addComment}>
          <textarea
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder="Напишите комментарий..."
          />
          <button onClick={handleAddComment}>Отправить комментарий</button>
        </div>
      )}
    </div>
  );
};

export default NewsDetailContent;