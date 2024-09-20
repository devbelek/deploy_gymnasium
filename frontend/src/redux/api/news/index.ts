import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCSRFToken } from './csrf';

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API}/${ENDPOINTS}/`,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = getCSRFToken();
      if (token) {
        headers.set('X-CSRFToken', token);
      }
      return headers;
    },
  }),
  tagTypes: ['news', 'comments', 'account'],
  endpoints: (build) => ({
    getNews: build.query<NEWS.GetNewsResponse, NEWS.GetNewsRequest>({
      query: () => ({
        url: 'news/',
        method: 'GET',
      }),
      providesTags: ['news'],
    }),
    getDetNews: build.query<NEWS.GetDetNewsResponse, number>({
      query: (id) => ({
        url: `news/${id}/`,
        method: 'GET',
      }),
      providesTags: ['news'],
    }),
    getComments: build.query<NEWS.GetCommentsResponse, number>({
      query: (newsId) => ({
        url: `news/${newsId}/comments/`,
        method: 'GET',
      }),
      providesTags: ['comments'],
    }),
    addComment: build.mutation<NEWS.AddCommentResponse, NEWS.AddCommentRequest>({
      query: ({ newsId, text, parentId }) => ({
        url: parentId ? `comments/${parentId}/reply/` : `news/${newsId}/comments/`,
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['comments'],
    }),
    updateComment: build.mutation<NEWS.UpdateCommentResponse, NEWS.UpdateCommentRequest>({
      query: ({ commentId, text, parentId }) => ({
        url: parentId
          ? `comments/${parentId}/replies/${commentId}/`
          : `comments/${commentId}/`,
        method: 'PATCH',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['comments'],
    }),
    deleteComment: build.mutation<NEWS.DeleteCommentResponse, NEWS.DeleteCommentRequest>({
      query: ({ commentId, parentId }) => ({
        url: parentId
          ? `comments/${parentId}/replies/${commentId}/`
          : `comments/${commentId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['comments'],
    }),
    likeComment: build.mutation<NEWS.LikeCommentResponse, NEWS.LikeCommentRequest>({
      query: ({ commentId }) => ({
        url: 'comments/like/',
        method: 'POST',
        body: JSON.stringify({ comment_id: commentId }),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['comments'],
    }),
    getAccount: build.query<any, null>({
      query: () => ({
        url: 'accounts/user/',
        method: 'GET',
      }),
      providesTags: ['account'],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetDetNewsQuery,
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useLikeCommentMutation,
  useGetAccountQuery,
} = api;