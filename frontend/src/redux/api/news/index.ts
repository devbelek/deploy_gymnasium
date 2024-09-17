import { api as index } from "..";
import { getCSRFToken } from './csrf';

const BASE_URL = process.env.NEXT_PUBLIC_API || '';
const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT || '';

interface AddCommentRequest {
  newsId: number;
  text: string;
  parentId?: number;
}

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<NEWS.GetNewsResponse, NEWS.GetNewsRequest>({
      query: () => ({
        url: `${BASE_URL}/${ENDPOINTS}/news/`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
    getDetNews: build.query<NEWS.GetDetNewsResponse, number>({
      query: (id) => ({
        url: `${BASE_URL}/${ENDPOINTS}/news/${id}/`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
    getComments: build.query<NEWS.GetCommentsResponse, number>({
      query: (newsId) => ({
        url: `${BASE_URL}/${ENDPOINTS}/news/${newsId}/comments/`,
        method: "GET",
      }),
      providesTags: ["comments"],
    }),
    addComment: build.mutation<NEWS.AddCommentResponse, AddCommentRequest>({
      query: ({ newsId, text, parentId }) => ({
        url: parentId
          ? `${BASE_URL}/${ENDPOINTS}/comments/${parentId}/reply/`
          : `${BASE_URL}/${ENDPOINTS}/news/${newsId}/comments/`,
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
          ? `${BASE_URL}/${ENDPOINTS}/comments/${parentId}/replies/${commentId}/`
          : `${BASE_URL}/${ENDPOINTS}/comments/${commentId}/`,
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
          ? `${BASE_URL}/${ENDPOINTS}/comments/${parentId}/replies/${commentId}/`
          : `${BASE_URL}/${ENDPOINTS}/comments/${commentId}/`,
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
        url: `${BASE_URL}/${ENDPOINTS}/comments/like/`,
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
      query: (username) => ({
        url: `${BASE_URL}/${ENDPOINTS}/profile/${username}/`,
        method: "GET",
      }),
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