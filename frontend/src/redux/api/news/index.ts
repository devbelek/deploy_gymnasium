import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCSRFToken } from './csrf';

const BASE_URL = process.env.NEXT_PUBLIC_API || '';
const ENDPOINTS = '';

interface AddCommentRequest {
  newsId: number;
  text: string;
  parentId?: number;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['news', 'comments', 'userProfile'],
  endpoints: (build) => ({
    getNews: build.query<NEWS.GetNewsResponse, NEWS.GetNewsRequest>({
      query: () => '/news/',
      providesTags: ["news"],
    }),
    getDetNews: build.query<NEWS.GetDetNewsResponse, number>({
      query: (id) => `/news/${id}/`,
      providesTags: ["news"],
    }),
    getComments: build.query<NEWS.GetCommentsResponse, number>({
      query: (newsId) => `/news/${newsId}/comments/`,
      providesTags: ["comments"],
    }),
    addComment: build.mutation<NEWS.AddCommentResponse, AddCommentRequest>({
      query: ({ newsId, text, parentId }) => ({
        url: parentId ? `/comments/${parentId}/reply/` : `/news/${newsId}/comments/`,
        method: "POST",
        body: { text },
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
        },
      }),
      invalidatesTags: ["comments"],
    }),
    updateComment: build.mutation<NEWS.UpdateCommentResponse, NEWS.UpdateCommentRequest>({
      query: ({ commentId, text, parentId }) => ({
        url: parentId
          ? `/comments/${parentId}/replies/${commentId}/`
          : `/comments/${commentId}/`,
        method: "PATCH",
        body: { text },
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
        },
      }),
      invalidatesTags: ["comments"],
    }),
    deleteComment: build.mutation<NEWS.DeleteCommentResponse, NEWS.DeleteCommentRequest>({
      query: ({ commentId, parentId }) => ({
        url: parentId
          ? `/comments/${parentId}/replies/${commentId}/`
          : `/comments/${commentId}/`,
        method: "DELETE",
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
        },
      }),
      invalidatesTags: ["comments"],
    }),
    likeComment: build.mutation<NEWS.LikeCommentResponse, NEWS.LikeCommentRequest>({
      query: ({ commentId }) => ({
        url: `/comments/like/`,
        method: "POST",
        body: { comment_id: commentId },
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
        },
      }),
      invalidatesTags: ["comments"],
    }),
    getUserProfile: build.query<NEWS.GetUserProfileResponse, NEWS.GetUserProfileRequest>({
      query: (username) => `/profile/${username}/`,
      providesTags: ["userProfile"],
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
  useGetUserProfileQuery,
} = api;