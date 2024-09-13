import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comment, NewComment, Like } from './types';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL, // URL бэкенда
    credentials: 'include',  // Куки будут отправляться автоматически для сессий
  }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], number>({
      query: (newsId) => `api/comments/?news_id=${newsId}`,
    }),
    addComment: builder.mutation<Comment, NewComment>({
      query: (newComment) => ({
        url: 'api/comments/',
        method: 'POST',
        body: newComment,
      }),
    }),
    updateComment: builder.mutation<Comment, { commentId: number; text: string }>({
      query: ({ commentId, text }) => ({
        url: `api/comments/${commentId}/`,
        method: 'PUT',
        body: { text },
      }),
    }),
    deleteComment: builder.mutation<{ success: boolean }, number>({
      query: (commentId) => ({
        url: `api/comments/${commentId}/`,
        method: 'DELETE',
      }),
    }),
    likeComment: builder.mutation<Like, { commentId: number }>({
      query: ({ commentId }) => ({
        url: `api/likes/`,
        method: 'POST',
        body: { comment: commentId },
      }),
    }),
    unlikeComment: builder.mutation<{ success: boolean }, number>({
      query: (commentId) => ({
        url: `api/likes/${commentId}/`,
        method: 'DELETE',
      }),
    }),
    replyToComment: builder.mutation<Comment, { commentId: number; text: string }>({
      query: ({ commentId, text }) => ({
        url: `api/comment-replies/`,
        method: 'POST',
        body: { comment: commentId, text },
      }),
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useLikeCommentMutation,
  useUnlikeCommentMutation,
  useReplyToCommentMutation,
} = commentsApi;
