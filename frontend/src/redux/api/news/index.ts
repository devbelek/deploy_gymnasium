import { api as index } from "..";
import { getCSRFToken } from "./csrf";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<NEWS.GetNewsResponse, NEWS.GetNewsRequest>({
      query: () => `${ENDPOINTS}/news/`,
      providesTags: ["news"],
    }),
    getDetNews: build.query<NEWS.GetDetNewsResponse, NEWS.GetDetNewsRequest>({
      query: (id) => `${ENDPOINTS}/news/${id}/`,
      providesTags: ["news"],
    }),
    getComments: build.query<NEWS.GetCommentsResponse, NEWS.GetCommentsRequest>(
      {
        query: (newsId) => `${ENDPOINTS}/news/${newsId}/comments/`,
        providesTags: ["comments"],
      }
    ),
    addComment: build.mutation<NEWS.AddCommentResponse, NEWS.AddCommentRequest>(
      {
        query: ({ newsId, text, parentId }) => ({
          url: parentId
            ? `${ENDPOINTS}/comments/${parentId}/reply/`
            : `${ENDPOINTS}/news/${newsId}/comments/`,
          method: "POST",
          body: { text },
          credentials: "include",
          headers: {
            "X-CSRFToken": getCSRFToken() || "",
            "Content-Type": "application/json",
          },
        }),
        invalidatesTags: ["comments"],
      }
    ),
    updateComment: build.mutation<
      NEWS.UpdateCommentResponse,
      NEWS.UpdateCommentRequest
    >({
      query: ({ commentId, text, parentId }) => ({
        url: parentId
          ? `${ENDPOINTS}/comments/${parentId}/replies/${commentId}/`
          : `${ENDPOINTS}/comments/${commentId}/`,
        method: "PATCH",
        body: { text },
        credentials: "include",
        headers: {
          "X-CSRFToken": getCSRFToken() || "",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["comments"],
    }),
    deleteComment: build.mutation<
      NEWS.DeleteCommentResponse,
      NEWS.DeleteCommentRequest
    >({
      query: ({ commentId, parentId }) => ({
        url: parentId
          ? `${ENDPOINTS}/comments/${parentId}/replies/${commentId}/`
          : `${ENDPOINTS}/comments/${commentId}/`,
        method: "DELETE",
        credentials: "include",
        headers: {
          "X-CSRFToken": getCSRFToken() || "",
        },
      }),
      invalidatesTags: ["comments"],
    }),
    likeComment: build.mutation<
      NEWS.LikeCommentResponse,
      NEWS.LikeCommentRequest
    >({
      query: ({ commentId }) => ({
        url: `${ENDPOINTS}/comments/like/`,
        method: "POST",
        body: { comment_id: commentId },
        credentials: "include",
        headers: {
          "X-CSRFToken": getCSRFToken() || "",
          "Content-Type": "application/json",
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
