import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation, useLikeCommentMutation, useAddReplyMutation } from '@/redux/api/news';
import scss from './NewsCommentsContent.module.scss';

const NewsCommentsContent: React.FC = () => {
  const { newsDetail } = useParams();
  const { data: comments, isLoading } = useGetCommentsQuery(Number(newsDetail));
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

  const handleAddComment = async () => {
    if (newCommentText.trim()) {
      await addComment({ newsId: Number(newsDetail), text: newCommentText });
      setNewCommentText('');
    }
  };

  const handleUpdateComment = async (commentId: number) => {
    if (editingCommentText.trim()) {
      await updateComment({ commentId, text: editingCommentText });
      setEditingCommentId(null);
      setEditingCommentText('');
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот комментарий?')) {
      await deleteComment(commentId);
    }
  };

  const handleLikeComment = async (commentId: number) => {
    await likeComment(commentId);
  };

  const handleAddReply = async (commentId: number) => {
    if (replyText.trim()) {
      await addReply({ commentId, text: replyText });
      setReplyingToCommentId(null);
      setReplyText('');
    }
  };

  if (isLoading) return <div>Загрузка комментариев...</div>;

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
      {comments?.map((comment) => (
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
          {comment.replies.map((reply) => (
            <div key={reply.id} className={scss.reply}>
              <p><strong>{reply.author}</strong>: {reply.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NewsCommentsContent;