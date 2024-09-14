import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation, useLikeCommentMutation, useAddReplyMutation } from '@/redux/api/news';

const NewsCommentsContent = () => {
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
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState('');
  const [replyingToCommentId, setReplyingToCommentId] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleAddComment = async () => {
    if (newCommentText.trim() && !isNaN(newsId)) {
      try {
        await addComment({ newsId, text: newCommentText }).unwrap();
        setNewCommentText('');
        refetch();
      } catch (error) {
        console.error('Не удалось добавить комментарий:', error);
        alert('Не удалось добавить комментарий. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  const handleUpdateComment = async (commentId) => {
    if (editingCommentText.trim()) {
      try {
        await updateComment({ commentId, text: editingCommentText }).unwrap();
        setEditingCommentId(null);
        setEditingCommentText('');
        refetch();
      } catch (error) {
        console.error('Не удалось обновить комментарий:', error);
        alert('Не удалось обновить комментарий. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (window.confirm('Вы уверены, что хотите удалить этот комментарий?')) {
      try {
        await deleteComment(commentId).unwrap();
        refetch();
      } catch (error) {
        console.error('Не удалось удалить комментарий:', error);
        alert('Не удалось удалить комментарий. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  const handleLikeComment = async (commentId) => {
    try {
      await likeComment(commentId).unwrap();
      refetch();
    } catch (error) {
      console.error('Не удалось поставить лайк:', error);
      alert('Не удалось поставить лайк. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handleAddReply = async (commentId) => {
    if (replyText.trim()) {
      try {
        await addReply({ commentId, text: replyText }).unwrap();
        setReplyingToCommentId(null);
        setReplyText('');
        refetch();
      } catch (error) {
        console.error('Не удалось добавить ответ:', error);
        alert('Не удалось добавить ответ. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  if (isNaN(newsId)) {
    return <div className="error-message">Некорректный идентификатор новости</div>;
  }

  if (isLoading) return <div className="loading-message">Загрузка комментариев...</div>;

  if (error) {
    console.error('Ошибка при загрузке комментариев:', error);
    return (
      <div className="error-container">
        <div className="error-message">Ошибка при загрузке комментариев. Пожалуйста, попробуйте обновить страницу.</div>
        <button className="retry-button" onClick={() => refetch()}>Попробовать снова</button>
      </div>
    );
  }

  return (
    <div className="news-comments-content">
      <h2 className="comments-title">Комментарии</h2>
      <div className="add-comment-form">
        <textarea
          className="comment-textarea"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Написать комментарий..."
        />
        <button className="submit-button" onClick={handleAddComment}>Отправить</button>
      </div>
      {Array.isArray(comments) && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p className="comment-text"><strong>{comment.author}</strong>: {comment.text}</p>
            <div className="comment-actions">
              <button className="action-button" onClick={() => handleLikeComment(comment.id)}>
                {comment.is_liked ? 'Убрать лайк' : 'Лайк'} ({comment.likes_count})
              </button>
              <button className="action-button" onClick={() => setReplyingToCommentId(comment.id)}>Ответить</button>
              {comment.author === 'Текущий пользователь' && (
                <>
                  <button className="action-button" onClick={() => {
                    setEditingCommentId(comment.id);
                    setEditingCommentText(comment.text);
                  }}>Редактировать</button>
                  <button className="action-button delete" onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
                </>
              )}
            </div>
            {editingCommentId === comment.id && (
              <div className="edit-comment-form">
                <textarea
                  className="comment-textarea"
                  value={editingCommentText}
                  onChange={(e) => setEditingCommentText(e.target.value)}
                />
                <button className="submit-button" onClick={() => handleUpdateComment(comment.id)}>Сохранить</button>
                <button className="cancel-button" onClick={() => setEditingCommentId(null)}>Отмена</button>
              </div>
            )}
            {replyingToCommentId === comment.id && (
              <div className="reply-form">
                <textarea
                  className="comment-textarea"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Написать ответ..."
                />
                <button className="submit-button" onClick={() => handleAddReply(comment.id)}>Отправить ответ</button>
                <button className="cancel-button" onClick={() => setReplyingToCommentId(null)}>Отмена</button>
              </div>
            )}
            {comment.replies && comment.replies.map((reply) => (
              <div key={reply.id} className="reply">
                <p className="reply-text"><strong>{reply.author}</strong>: {reply.text}</p>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="no-comments">Комментариев пока нет.</div>
      )}
      <style jsx>{`
        .news-comments-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .comments-title {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .add-comment-form, .edit-comment-form, .reply-form {
          margin-bottom: 20px;
        }
        .comment-textarea {
          width: 100%;
          min-height: 100px;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit-button, .action-button, .cancel-button {
          padding: 8px 16px;
          margin-right: 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .submit-button {
          background-color: #4CAF50;
          color: white;
        }
        .submit-button:hover {
          background-color: #45a049;
        }
        .action-button {
          background-color: #008CBA;
          color: white;
        }
        .action-button:hover {
          background-color: #007B9A;
        }
        .action-button.delete {
          background-color: #f44336;
        }
        .action-button.delete:hover {
          background-color: #da190b;
        }
        .cancel-button {
          background-color: #f1f1f1;
          color: black;
        }
        .cancel-button:hover {
          background-color: #ddd;
        }
        .comment, .reply {
          margin-bottom: 15px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .reply {
          margin-left: 20px;
          background-color: #f9f9f9;
        }
        .comment-actions {
          margin-top: 10px;
        }
        .error-message, .loading-message, .no-comments {
          text-align: center;
          padding: 20px;
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
          border-radius: 4px;
        }
        .loading-message {
          background-color: #e9ecef;
          color: #495057;
          border-color: #ced4da;
        }
        .no-comments {
          background-color: #f8f9fa;
          color: #6c757d;
          border-color: #dee2e6;
        }
        .retry-button {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .retry-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default NewsCommentsContent;