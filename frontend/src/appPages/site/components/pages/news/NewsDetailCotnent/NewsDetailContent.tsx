"use client";
import { useParams } from "next/navigation";
import scss from "./NewsDetailContent.module.scss";
import { useGetDetNewsQuery } from "@/redux/api/news";
import { useGetCommentsQuery, useAddCommentMutation, useDeleteCommentMutation } from "@/redux/api/comments";
import Image from "next/image";
import { useState } from "react";

const NewsDetailContent = () => {
  const { newsDetail } = useParams();
  const { data: newsData } = useGetDetNewsQuery(String(newsDetail));
  const { data: commentsData, error: commentsError, isLoading: commentsLoading } = useGetCommentsQuery(Number(newsDetail));
  const [addComment] = useAddCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = async () => {
    if (newCommentText.trim()) {
      await addComment({ news: Number(newsDetail), text: newCommentText });
      setNewCommentText('');  // Очистка поля после отправки
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    await deleteComment(commentId);
  };

  return (
    <div className={scss.NewsDetailContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>Новости</h1>
            <hr />
          </div>
          <div className={scss.newsContent}>
            <h1>{newsData?.description}</h1>
            <Image
              src={newsData?.image!}
              alt="img"
              width={700}
              height={500}
              quality={70}
            />
            <p>{newsData?.content}</p>
            <hr />
          </div>
          <div className={scss.newsComments}>
            <h2>Комментарии пользователей:</h2>
            <div className={scss.commentList}>
              {commentsLoading && <p>Загрузка комментариев...</p>}
              {commentsError && <p>Ошибка загрузки комментариев.</p>}
              {commentsData?.map((comment) => (
                <div key={comment.id} className={scss.comment}>
                  <p>{comment.text}</p>
                  <button onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
                </div>
              ))}
            </div>
            <div className={scss.addComment}>
              <textarea
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Напишите комментарий..."
              />
              <button onClick={handleAddComment}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;
