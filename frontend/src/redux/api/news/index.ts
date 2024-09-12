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
    getDetNews: build.query<NEWS.GetDetNewsResponse, NEWS.GetDetNewsRequest>({
      query: (id) => ({
        url: `${ENDPOINTS}/news/${id}`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
  }),
});

export const { useGetNewsQuery, useGetDetNewsQuery } = api;
