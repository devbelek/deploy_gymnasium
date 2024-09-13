import { useLikeCommentMutation, useUnlikeCommentMutation } from "@/redux/api/comments";
import { useState } from "react";

interface LikeProps {
  commentId: number;
  initialLiked: boolean;
}

const CommentLikes = ({ commentId, initialLiked }: LikeProps) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likeComment] = useLikeCommentMutation();
  const [unlikeComment] = useUnlikeCommentMutation();

  const toggleLike = async () => {
    if (liked) {
      await unlikeComment(commentId);
    } else {
      await likeComment({ commentId });
    }
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLike}>
      {liked ? 'Убрать лайк' : 'Лайк'}
    </button>
  );
};

export default CommentLikes;
