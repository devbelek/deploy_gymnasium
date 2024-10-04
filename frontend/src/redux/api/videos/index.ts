import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query<VIDEO.GetVideosResponse, VIDEO.GetVideosRequest>({
      query: () => ({
        url: `${ENDPOINTS}/videos/`,
        method: "GET",
      }),
      providesTags: ["videos"],
    }),
  }),
});

export const { useGetVideosQuery } = api;
