"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from "next/image";
import { useGetDetNewsQuery } from "@/redux/api/news";
import { useGetCommentsQuery, useAddCommentMutation, useDeleteCommentMutation } from "@/redux/api/comments";

// Определение типов
interface Comment {
  id: number;
  text: string;
  created_at: string;
}

interface NewsData {
  description: string;
  image: string;
  content: string;
}

const NewsDetailContent: React.FC = () => {
  const params = useParams();
  const newsDetail = params.newsDetail as string;

  const { data: newsData, error: newsError, isLoading: newsLoading } = useGetDetNewsQuery(newsDetail);
  const { data: commentsData, error: commentsError, isLoading: commentsLoading, refetch: refetchComments } = useGetCommentsQuery(Number(newsDetail));
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const [newCommentText, setNewCommentText] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string>('');

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleAddComment = async (): Promise<void> => {
    if (newCommentText.trim()) {
      try {
        await addComment({ news: Number(newsDetail), text: newCommentText }).unwrap();
        setNewCommentText('');
        refetchComments();
        setAlertMessage('Комментарий успешно добавлен!');
      } catch (error) {
        setAlertMessage('Не удалось добавить комментарий. Попробуйте еще раз.');
      }
    }
  };

  const handleDeleteComment = async (commentId: number): Promise<void> => {
    try {
      await deleteComment(commentId).unwrap();
      refetchComments();
      setAlertMessage('Комментарий успешно удален!');
    } catch (error) {
      setAlertMessage('Не удалось удалить комментарий. Попробуйте еще раз.');
    }
  };

  if (newsLoading) return <div className="flex justify-center items-center h-screen">Загрузка новости...</div>;
  if (newsError) return <div className="text-red-500 text-center">Ошибка загрузки новости.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Новости</h1>
      <div className="w-12 h-1 bg-blue-500 mx-auto mb-8"></div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{(newsData as NewsData)?.description}</h2>
          <Image
            src={(newsData as NewsData)?.image || '/placeholder-image.jpg'}
            alt="News Image"
            width={700}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <p className="text-gray-700">{(newsData as NewsData)?.content}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Комментарии пользователей:</h3>

      {alertMessage && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p>{alertMessage}</p>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
        <div className="p-6">
          <textarea
            value={newCommentText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewCommentText(e.target.value)}
            placeholder="Напишите комментарий..."
            className="w-full p-2 border border-gray-300 rounded mb-2"
            rows={3}
          />
          <button
            onClick={handleAddComment}
            disabled={isAddingComment}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isAddingComment ? 'Отправка...' : 'Отправить'}
          </button>
        </div>
      </div>

      {commentsLoading && <p>Загрузка комментариев...</p>}
      {commentsError && <p className="text-red-500">Ошибка загрузки комментариев.</p>}

      {(commentsData as Comment[])?.map((comment) => (
        <div key={comment.id} className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold">Пользователь</p>
                <p className="text-sm text-gray-500">{new Date(comment.created_at).toLocaleString()}</p>
              </div>
            </div>
            <p className="mb-4">{comment.text}</p>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsDetailContent;