import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSchoolParliament: build.query<
      SCHOOL_PARLIAMENT.GetSchoolParliamentResponse,
      SCHOOL_PARLIAMENT.GetSchoolParliamentRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/school_parliament/`,
        method: "GET",
      }),
      providesTags: ["school_parliament"],
    }),
  }),
});

export const { useGetSchoolParliamentQuery } = api;
