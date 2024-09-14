import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

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
        url: `${ENDPOINTS}/news/${id}`,
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
    addComment: build.mutation<NEWS.AddCommentResponse, { newsId: number; text: string }>({
      query: ({ newsId, text }) => ({
        url: `${ENDPOINTS}/news/${newsId}/comments/`,
        method: "POST",
        body: { text },
      }),
      invalidatesTags: ["comments"],
    }),
    updateComment: build.mutation<NEWS.UpdateCommentResponse, { commentId: number; text: string }>({
      query: ({ commentId, text }) => ({
        url: `${ENDPOINTS}/comments/${commentId}/`,
        method: "PATCH",
        body: { text },
      }),
      invalidatesTags: ["comments"],
    }),
    deleteComment: build.mutation<NEWS.DeleteCommentResponse, number>({
      query: (commentId) => ({
        url: `${ENDPOINTS}/comments/${commentId}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["comments"],
    }),
    likeComment: build.mutation<NEWS.LikeCommentResponse, number>({
      query: (commentId) => ({
        url: `${ENDPOINTS}/comments/${commentId}/like/`,
        method: "POST",
      }),
      invalidatesTags: ["comments"],
    }),
    addReply: build.mutation<NEWS.AddReplyResponse, { commentId: number; text: string }>({
      query: ({ commentId, text }) => ({
        url: `${ENDPOINTS}/comments/${commentId}/replies/`,
        method: "POST",
        body: { text },
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
} = api;