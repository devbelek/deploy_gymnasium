import { api as index } from "..";
import { getCSRFToken } from './csrf';

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

interface AddCommentRequest {
  newsId: number;
  text: string;
  parentId?: number;
}

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<NEWS.GetNewsResponse, NEWS.GetNewsRequest>({
      query: () => ({
        url: `${ENDPOINTS}/news/`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
    getDetNews: build.query<NEWS.GetDetNewsResponse, number>({
      query: (id) => ({
        url: `${ENDPOINTS}/news/${id}/`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
    getComments: build.query<NEWS.GetCommentsResponse, number>({
      query: (newsId) => ({
        url: `${ENDPOINTS}/news/${newsId}/comments/`,
        method: "GET",
      }),
      providesTags: ["comments"],
    }),
    addComment: build.mutation<NEWS.AddCommentResponse, AddCommentRequest>({
      query: ({ newsId, text, parentId }) => ({
        url: parentId ? `${ENDPOINTS}/comments/${parentId}/reply/` : `${ENDPOINTS}/news/${newsId}/comments/`,
        method: "POST",
        body: JSON.stringify({ text }),
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ["comments"],
    }),
    updateComment: build.mutation<NEWS.UpdateCommentResponse, NEWS.UpdateCommentRequest>({
      query: ({ commentId, text, parentId }) => ({
        url: parentId
          ? `${ENDPOINTS}/comments/${parentId}/replies/${commentId}/`
          : `${ENDPOINTS}/comments/${commentId}/`,
        method: "PATCH",
        body: JSON.stringify({ text }),
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ["comments"],
    }),
    deleteComment: build.mutation<NEWS.DeleteCommentResponse, NEWS.DeleteCommentRequest>({
      query: ({ commentId, parentId }) => ({
        url: parentId
          ? `${ENDPOINTS}/comments/${parentId}/replies/${commentId}/`
          : `${ENDPOINTS}/comments/${commentId}/`,
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
        url: `${ENDPOINTS}/comments/like/`,
        method: "POST",
        body: JSON.stringify({ comment_id: commentId }),
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ["comments"],
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
} = api;