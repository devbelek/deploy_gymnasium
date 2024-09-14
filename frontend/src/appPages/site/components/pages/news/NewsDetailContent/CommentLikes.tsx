"use client";

import React, { useState } from 'react';
import { useLikeCommentMutation, useUnlikeCommentMutation } from "@/redux/api/comments";
import scss from "./CommentLikes.module.scss";

interface CommentLikesProps {
  commentId: number;
  initialLiked: boolean;
}

const CommentLikes: React.FC<CommentLikesProps> = ({ commentId, initialLiked }) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [likeCount, setLikeCount] = useState(0);
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