"use client";
import { useParams } from "next/navigation";
import scss from "./NewsDetailContent.module.scss";
import { useGetDetNewsQuery, useGetCommentsQuery, useAddCommentMutation } from "@/redux/api/news";
import Image from "next/image";
import { useState } from "react";
import { getCSRFToken } from '@/utils/csrf';  // Измените путь в соответствии с вашей структурой проекта

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsId = typeof params.newsDetail === 'string' ? parseInt(params.newsDetail, 10) : NaN;
  const [commentText, setCommentText] = useState("");

  const { data: newsData, isLoading: newsLoading, error: newsError } = useGetDetNewsQuery(newsId);
  const { data: commentsData, isLoading: commentsLoading, error: commentsError } = useGetCommentsQuery(newsId);
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();

  if (isNaN(newsId)) {
    return <div>Некорректный идентификатор новости</div>;
  }

  if (newsLoading || commentsLoading) return <div>Загрузка...</div>;
  if (newsError || commentsError) return <div>Произошла ошибка при загрузке данных</div>;
  if (!newsData) return <div>Новость не найдена</div>;

  const handleAddComment = async () => {
    if (commentText.trim()) {
      const csrfToken = getCSRFToken();
      if (!csrfToken) {
        console.error("CSRF token not found");
        // Здесь можно добавить логику обработки отсутствия токена
        return;
      }
      try {
        await addComment({ newsId, text: commentText }).unwrap();
        setCommentText("");
      } catch (error) {
        console.error("Ошибка при добавлении комментария:", error);
        // Здесь можно добавить отображение ошибки пользователю
      }
    }
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
              <p>Автор: {newsData.author}</p>
              <p>Дата публикации: {new Date(newsData.created_at).toLocaleString()}</p>
              <p>Последнее обновление: {new Date(newsData.updated_at).toLocaleString()}</p>
            </div>
            <hr />
          </div>
          <div className={scss.commentsSection}>
            <h2>Комментарии</h2>
            {commentsData && commentsData.map((comment) => (
              <div key={comment.id} className={scss.comment}>
                <p>{comment.text}</p>
                <small>Автор: {comment.author} | Дата: {new Date(comment.created_at).toLocaleString()}</small>
              </div>
            ))}
            <div className={scss.addComment}>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Напишите ваш комментарий"
              />
              <button onClick={handleAddComment} disabled={isAddingComment}>
                {isAddingComment ? "Добавление..." : "Добавить комментарий"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;