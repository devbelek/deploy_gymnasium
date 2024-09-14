"use client";

import React, { useState, useEffect } from 'react';
import { useLikeCommentMutation, useUnlikeCommentMutation } from "@/redux/api/comments"; // Теперь оба мутации
import scss from "./CommentLikes.module.scss";

interface CommentLikesProps {
  commentId: number;
  initialLiked: boolean;
  initialLikesCount: number;  // добавлено для инициализации количества лайков
}

const CommentLikes: React.FC<CommentLikesProps> = ({ commentId, initialLiked, initialLikesCount }) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [likeCount, setLikeCount] = useState(initialLikesCount);
  const [likeComment] = useLikeCommentMutation();
  const [unlikeComment] = useUnlikeCommentMutation();

  const handleLikeToggle = async () => {
    try {
      if (isLiked) {
        await unlikeComment(commentId).unwrap();
        setLikeCount(prev => prev - 1);
      } else {
        await likeComment({ commentId }).unwrap();
        setLikeCount(prev => prev + 1);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Failed to toggle like:', error);
    }
  };

  useEffect(() => {
    setIsLiked(initialLiked);
    setLikeCount(initialLikesCount);
  }, [initialLiked, initialLikesCount]);

  return (
    <div className={scss.likes}>
      <button onClick={handleLikeToggle} className={isLiked ? scss.liked : ''}>
        {isLiked ? 'Убрать лайк' : 'Лайк'}
      </button>
      <span>{likeCount} лайков</span>
    </div>
  );
};

export default CommentLikes;
