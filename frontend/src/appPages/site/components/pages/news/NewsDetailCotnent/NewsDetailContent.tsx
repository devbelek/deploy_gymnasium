"use client";
import { useParams } from "next/navigation";
import scss from "./NewsDetailContent.module.scss";
import { useGetDetNewsQuery, useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation, useLikeCommentMutation, useAddReplyMutation, useUpdateReplyMutation, useDeleteReplyMutation } from "@/redux/api/news";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MoreVertical, Edit, Trash2, MessageCircle, ThumbsUp } from 'lucide-react';

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : NaN;
  const [commentText, setCommentText] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedCommentText, setEditedCommentText] = useState("");
  const [replyingToCommentId, setReplyingToCommentId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: newsData, isLoading: newsLoading, error: newsError } = useGetDetNewsQuery(newsId);
  const { data: commentsData, isLoading: commentsLoading, error: commentsError } = useGetCommentsQuery(newsId);
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [likeComment] = useLikeCommentMutation();
  const [addReply] = useAddReplyMutation();
  const [updateReply] = useUpdateReplyMutation();
  const [deleteReply] = useDeleteReplyMutation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_ENDPOINT}/accounts/user/`, {
          credentials: 'include',
        });
        if (response.ok) {
          const userData = await response.json();
          setIsLoggedIn(userData.isAuthenticated);
          setCurrentUser(userData.username);
        } else {
          setIsLoggedIn(false);
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    };

    checkAuthStatus();
  }, []);

  if (isNaN(newsId)) {
    return <div className={scss.error}>Invalid news identifier</div>;
  }

  if (newsLoading || commentsLoading) return <div className={scss.loading}>Loading...</div>;
  if (newsError || commentsError) return <div className={scss.error}>An error occurred while loading data</div>;
  if (!newsData) return <div className={scss.error}>News not found</div>;

  const handleAddComment = async () => {
    if (commentText.trim() && isLoggedIn) {
      try {
        await addComment({ newsId, text: commentText }).unwrap();
        setCommentText("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleUpdateComment = async (commentId: number) => {
    if (editedCommentText.trim()) {
      try {
        await updateComment({ commentId, text: editedCommentText }).unwrap();
        setEditingCommentId(null);
        setEditedCommentText("");
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment(commentId).unwrap();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleLikeComment = async (commentId: number) => {
    if (isLoggedIn) {
      try {
        await likeComment({ commentId }).unwrap();
      } catch (error) {
        console.error("Error liking comment:", error);
      }
    }
  };

  const handleReplyToComment = async (parentCommentId: number) => {
    if (replyText.trim() && isLoggedIn) {
      try {
        await addReply({ commentId: parentCommentId, text: replyText }).unwrap();
        setReplyingToCommentId(null);
        setReplyText("");
      } catch (error) {
        console.error("Error adding reply:", error);
      }
    }
  };

  const handleUpdateReply = async (replyId: number, text: string) => {
    if (text.trim()) {
      try {
        await updateReply({ replyId, text }).unwrap();
        setEditingCommentId(null);
        setEditedCommentText("");
      } catch (error) {
        console.error("Error updating reply:", error);
      }
    }
  };

  const handleDeleteReply = async (replyId: number) => {
    try {
      await deleteReply(replyId).unwrap();
    } catch (error) {
      console.error("Error deleting reply:", error);
    }
  };

  const sortedComments = commentsData?.slice().sort((a, b) => b.likes_count - a.likes_count) || [];

  const renderComment = (comment: any, isReply = false) => (
    <div key={comment.id} className={`${scss.comment} ${isReply ? scss.reply : ''}`}>
      <p>{comment.text}</p>
      <small>Author: {comment.author} | Date: {new Date(comment.created_at).toLocaleString()}</small>
      <div className={scss.commentActions}>
        <button onClick={() => handleLikeComment(comment.id)} className={scss.likeButton}>
          <ThumbsUp size={16} />
          <span>{comment.likes_count}</span>
        </button>
        {currentUser === comment.author && (
          <Menu>
            <MenuButton as="button" className={scss.moreButton}>
              <MoreVertical size={16} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => {
                setEditingCommentId(comment.id);
                setEditedCommentText(comment.text);
              }}>
                <Edit size={16} />
                <span>Edit</span>
              </MenuItem>
              <MenuItem onClick={() => isReply ? handleDeleteReply(comment.id) : handleDeleteComment(comment.id)}>
                <Trash2 size={16} />
                <span>Delete</span>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {!isReply && isLoggedIn && (
          <button onClick={() => setReplyingToCommentId(comment.id)} className={scss.replyButton}>
            <MessageCircle size={16} />
            <span>Reply</span>
          </button>
        )}
      </div>
      {editingCommentId === comment.id && !isReply && (
        <div className={scss.editCommentForm}>
          <textarea
            value={editedCommentText}
            onChange={(e) => setEditedCommentText(e.target.value)}
            placeholder="Edit your comment"
          />
          <button onClick={() => handleUpdateComment(comment.id)}>Save</button>
          <button onClick={() => setEditingCommentId(null)}>Cancel</button>
        </div>
      )}
      {replyingToCommentId === comment.id && (
        <div className={scss.replyForm}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply"
          />
          <button onClick={() => handleReplyToComment(comment.id)}>Reply</button>
          <button onClick={() => setReplyingToCommentId(null)}>Cancel</button>
        </div>
      )}
      {comment.replies && comment.replies.map((reply: any) => renderComment(reply, true))}
    </div>
  );

  return (
    <div className={scss.NewsDetailContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>News</h1>
            <hr />
          </div>
          <div className={scss.newsContent}>
            <h1>{newsData.description}</h1>
            <Image
              src={newsData.image}
              alt={newsData.description}
              width={700}
              height={500}
              quality={70}
              property="img"
            />
            <p>{newsData.content}</p>
            <div className={scss.newsInfo}>
              <p>Author: {newsData.author}</p>
              <p>Publication date: {new Date(newsData.created_at).toLocaleString()}</p>
              <p>Last update: {new Date(newsData.updated_at).toLocaleString()}</p>
            </div>
            <hr />
          </div>
          <div className={scss.commentsSection}>
            <h2>Comments</h2>
            {sortedComments.map((comment) => renderComment(comment))}
            {isLoggedIn ? (
              <div className={scss.addComment}>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write your comment"
                />
                <button onClick={handleAddComment} disabled={isAddingComment}>
                  {isAddingComment ? "Adding..." : "Add comment"}
                </button>
              </div>
            ) : (
              <p className={scss.loginPrompt}>Please log in to leave a comment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;