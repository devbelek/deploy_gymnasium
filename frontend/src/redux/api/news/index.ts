import { api as index } from "..";
import { getCSRFToken } from './csrf';

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

interface AddCommentRequest {
  newsId: number;
  text: string;
  parentCommentId?: number;
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
      query: ({ newsId, text, parentCommentId }) => ({
        url: `${ENDPOINTS}/news/${newsId}/comments/`,
        method: "POST",
        body: JSON.stringify({ text, parent_comment_id: parentCommentId }),
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ["comments"],
    }),
    updateComment: build.mutation<NEWS.UpdateCommentResponse, NEWS.UpdateCommentRequest>({
      query: ({ commentId, text }) => ({
        url: `${ENDPOINTS}/comments/${commentId}/`,
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
      query: (commentId) => ({
        url: `${ENDPOINTS}/comments/${commentId}/`,
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
        url: `${ENDPOINTS}/likes/toggle/`,
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
    addReply: build.mutation<NEWS.AddReplyResponse, NEWS.AddReplyRequest>({
      query: ({ commentId, text }) => ({
        url: `${ENDPOINTS}/comment_replies/`,
        method: "POST",
        body: JSON.stringify({ parent_comment: commentId, text }),
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ["comments"],
    }),
    updateReply: build.mutation<NEWS.UpdateReplyResponse, NEWS.UpdateReplyRequest>({
      query: ({ replyId, text }) => ({
        url: `${ENDPOINTS}/comment_replies/${replyId}/`,
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
    deleteReply: build.mutation<NEWS.DeleteReplyResponse, NEWS.DeleteReplyRequest>({
      query: (replyId) => ({
        url: `${ENDPOINTS}/comment_replies/${replyId}/`,
        method: "DELETE",
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
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
  useAddReplyMutation,
  useUpdateReplyMutation,
  useDeleteReplyMutation,
} = api;