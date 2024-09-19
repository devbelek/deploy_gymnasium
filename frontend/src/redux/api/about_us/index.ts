import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAbout: build.query<ABOUT_US.GetAboutResponse, ABOUT_US.GetAboutRequest>({
      query: () => ({
        url: `${ENDPOINTS}/about-us/`,
        method: "GET",
      }),
      providesTags: ["about"],
    }),
  }),
});

export const { useGetAboutQuery } = api;
