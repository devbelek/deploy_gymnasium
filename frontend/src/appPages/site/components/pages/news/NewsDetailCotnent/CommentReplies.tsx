import { useReplyToCommentMutation } from "@/redux/api/comments";
import { useState } from "react";

interface ReplyProps {
  commentId: number;
}

const CommentReplies = ({ commentId }: ReplyProps) => {
  const [replyText, setReplyText] = useState('');
  const [replyToComment] = useReplyToCommentMutation();

  const handleReplySubmit = async () => {
    if (replyText.trim()) {
      await replyToComment({ commentId, text: replyText });
      setReplyText('');
    }
  };

  return (
    <div>
      <textarea
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="Напишите ответ..."
      />
      <button onClick={handleReplySubmit}>Ответить</button>
    </div>
  );
};

export default CommentReplies;
