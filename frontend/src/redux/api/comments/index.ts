import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comment, NewComment, Like, CommentReply } from './types';
import { getCookie } from '../utils/csrf';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_ENDPOINT}/`,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const csrfToken = getCookie('csrftoken');
      if (csrfToken) {
        headers.set('X-CSRFToken', csrfToken);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], number>({
      query: (newsId) => `comments/?news_id=${newsId}`,
    }),
    getReplies: builder.query<CommentReply[], number>({
      query: (commentId) => `comment_replies/for_comment/?comment_id=${commentId}`,
    }),
    addComment: builder.mutation<Comment, NewComment>({
      query: (newComment) => ({
        url: 'comments/',
        method: 'POST',
        body: newComment,
      }),
    }),
    updateComment: builder.mutation<Comment, { commentId: number; text: string }>({
      query: ({ commentId, text }) => ({
        url: `comments/${commentId}/`,
        method: 'PUT',
        body: { text },
      }),
    }),
    deleteComment: builder.mutation<{ success: boolean }, number>({
      query: (commentId) => ({
        url: `comments/${commentId}/`,
        method: 'DELETE',
      }),
    }),
    likeComment: builder.mutation<Like, { commentId: number }>({
      query: ({ commentId }) => ({
        url: 'likes/',
        method: 'POST',
        body: { comment: commentId },
      }),
    }),
    unlikeComment: builder.mutation<{ success: boolean }, number>({
      query: (commentId) => ({
        url: `likes/${commentId}/`,
        method: 'DELETE',
      }),
    }),
    replyToComment: builder.mutation<CommentReply, { commentId: number; text: string }>({
      query: ({ commentId, text }) => ({
        url: 'comment_replies/',
        method: 'POST',
        body: { comment: commentId, text },
      }),
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetRepliesQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useLikeCommentMutation,
  useUnlikeCommentMutation,
  useReplyToCommentMutation,
} = commentsApi;