import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    credentials: 'include',
  }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (newsId) => `news/${newsId}/comments/`,
      providesTags: ['Comments'],
    }),
    addComment: builder.mutation({
      query: ({ newsId, text }) => ({
        url: `news/${newsId}/comments/`,
        method: 'POST',
        body: { text },
      }),
      invalidatesTags: ['Comments'],
    }),
    updateComment: builder.mutation({
      query: ({ commentId, text }) => ({
        url: `comments/${commentId}/`,
        method: 'PATCH',
        body: { text },
      }),
      invalidatesTags: ['Comments'],
    }),
    deleteComment: builder.mutation({
      query: (commentId) => ({
        url: `comments/${commentId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comments'],
    }),
    likeComment: builder.mutation({
      query: (commentId) => ({
        url: `comments/${commentId}/like/`,
        method: 'POST',
      }),
      invalidatesTags: ['Comments'],
    }),
    addReply: builder.mutation({
      query: ({ commentId, text }) => ({
        url: `comments/${commentId}/reply/`,
        method: 'POST',
        body: { text },
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useLikeCommentMutation,
  useAddReplyMutation,
} = api;