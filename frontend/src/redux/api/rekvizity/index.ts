import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getRekvizit: build.query<
      REKVIZIT.GetRekvizitResponse,
      REKVIZIT.GetRekvizitRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/donations-requisite/`,
        method: "GET",
      }),
      providesTags: ["rekvizit"],
    }),
  }),
});

export const { useGetRekvizitQuery } = api;
