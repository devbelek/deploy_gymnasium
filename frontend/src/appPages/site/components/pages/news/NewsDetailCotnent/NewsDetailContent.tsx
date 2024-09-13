import React, { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetDetNewsQuery } from "@/redux/api/news";
import { useGetCommentsQuery, useAddCommentMutation, useDeleteCommentMutation } from "@/redux/api/comments";
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const NewsDetailContent = () => {
  const { newsDetail } = useParams();
  const { data: newsData, error: newsError, isLoading: newsLoading } = useGetDetNewsQuery(String(newsDetail));
  const { data: commentsData, error: commentsError, isLoading: commentsLoading, refetch: refetchComments } = useGetCommentsQuery(Number(newsDetail));
  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const [newCommentText, setNewCommentText] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleAddComment = async () => {
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

  const handleDeleteComment = async (commentId) => {
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

      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">{newsData?.description}</h2>
        </CardHeader>
        <CardContent>
          <Image
            src={newsData?.image}
            alt="News Image"
            width={700}
            height={400}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <p className="text-gray-700">{newsData?.content}</p>
        </CardContent>
      </Card>

      <h3 className="text-xl font-semibold mb-4">Комментарии пользователей:</h3>
      
      {alertMessage && (
        <Alert className="mb-4">
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}

      <Card className="mb-4">
        <CardContent>
          <Textarea
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder="Напишите комментарий..."
            className="mb-2"
          />
          <Button onClick={handleAddComment} disabled={isAddingComment}>
            {isAddingComment ? 'Отправка...' : 'Отправить'}
          </Button>
        </CardContent>
      </Card>

      {commentsLoading && <p>Загрузка комментариев...</p>}
      {commentsError && <p className="text-red-500">Ошибка загрузки комментариев.</p>}
      
      {commentsData?.map((comment) => (
        <Card key={comment.id} className="mb-4">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar />
            <div>
              <p className="font-semibold">Пользователь</p>
              <p className="text-sm text-gray-500">{new Date(comment.created_at).toLocaleString()}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>{comment.text}</p>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" onClick={() => handleDeleteComment(comment.id)}>
              Удалить
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default NewsDetailContent;