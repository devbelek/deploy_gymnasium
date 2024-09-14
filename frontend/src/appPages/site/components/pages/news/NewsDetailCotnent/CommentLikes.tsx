import React, { useState } from 'react';
import { useLikeCommentMutation, useUnlikeCommentMutation } from "@/redux/api/comments";
import { useSelector } from 'react-redux';
import scss from "./CommentLikes.module.scss";

interface LikeProps {
  commentId: number;
  initialLiked: boolean;
}

const CommentLikes: React.FC<LikeProps> = ({ commentId, initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likeCount, setLikeCount] = useState(0);
  const [likeComment] = useLikeCommentMutation();
  const [unlikeComment] = useUnlikeCommentMutation();
  const user = useSelector((state: any) => state.auth.user);

  const toggleLike = async () => {
    if (user) {
      if (liked) {
        await unlikeComment(commentId);
        setLikeCount(prev => prev - 1);
      } else {
        await likeComment({ commentId });
        setLikeCount(prev => prev + 1);
      }
      setLiked(!liked);
    }
  };

  return (
    <div className={scss.likes}>
      <button onClick={toggleLike} disabled={!user}>
        {liked ? '👍 ' : '👍 '}
        {likeCount}
      </button>
    </div>
  );
};

export default CommentLikes;