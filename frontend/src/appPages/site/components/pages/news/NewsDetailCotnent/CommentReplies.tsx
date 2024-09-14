import React, { useState } from 'react';
import { useReplyToCommentMutation, useGetRepliesQuery } from "@/redux/api/comments";
import { useSelector } from 'react-redux';
import scss from "./CommentReplies.module.scss";

interface ReplyProps {
  commentId: number;
}

const CommentReplies: React.FC<ReplyProps> = ({ commentId }) => {
  const [replyText, setReplyText] = useState('');
  const [replyToComment] = useReplyToCommentMutation();
  const { data: replies, refetch: refetchReplies } = useGetRepliesQuery(commentId);
  const user = useSelector((state: any) => state.auth.user);

  const handleReplySubmit = async () => {
    if (replyText.trim()) {
      await replyToComment({ commentId, text: replyText });
      setReplyText('');
      refetchReplies();
    }
  };

  return (
    <div className={scss.replies}>
      {replies && replies.map((reply: any) => (
        <div key={reply.id} className={scss.reply}>
          <p><strong>{reply.user.username}</strong>: {reply.text}</p>
        </div>
      ))}
      {user && (
        <div className={scss.replyForm}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Напишите ответ..."
          />
          <button onClick={handleReplySubmit}>Ответить</button>
        </div>
      )}
    </div>
  );
};

export default CommentReplies;