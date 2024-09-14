"use client";

import React, { useState } from 'react';
import { useReplyToCommentMutation, useGetRepliesQuery } from "@/redux/api/comments";
import { useSelector } from 'react-redux';
import scss from "./CommentReplies.module.scss";

interface CommentReply {
  id: number;
  text: string;
  created_at: string;
  user: {
    id: number;
    username: string;
  };
}

const CommentReplies: React.FC<{ commentId: number }> = ({ commentId }) => {
  const { data: replies, isLoading, error, refetch } = useGetRepliesQuery(commentId);
  const [replyToComment] = useReplyToCommentMutation();
  const [replyText, setReplyText] = useState('');
  const user = useSelector((state: any) => state.auth.user);

  const handleReply = async () => {
    if (replyText.trim()) {
      try {
        await replyToComment({ commentId, text: replyText }).unwrap();
        setReplyText('');
        refetch();
      } catch (error) {
        console.error('Failed to reply to comment:', error);
      }
    }
  };

  if (isLoading) return <p>Загрузка ответов...</p>;
  if (error) return <p>Ошибка загрузки ответов.</p>;

  return (
    <div className={scss.replies}>
      {replies?.map((reply: CommentReply) => (
        <div key={reply.id} className={scss.reply}>
          <p><strong>{reply.user.username}</strong></p>
          <p>{reply.text}</p>
          <p className={scss.replyDate}>{new Date(reply.created_at).toLocaleString()}</p>
        </div>
      ))}
      {user && (
        <div className={scss.replyForm}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Напишите ответ..."
          />
          <button onClick={handleReply}>Ответить</button>
        </div>
      )}
    </div>
  );
};

export default CommentReplies;