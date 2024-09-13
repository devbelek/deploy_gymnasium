import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getFond: build.query<DONATIONS.GetFondResponse, DONATIONS.GetFondRequest>({
      query: () => ({
        url: `${ENDPOINTS}/donations/`,
        method: "GET",
      }),
      providesTags: ["donations"],
    }),
    postDonations: build.mutation<
      DONATIONS.GetDonationResponse,
      DONATIONS.GetDonationRequest
    >({
      query: (data) => ({
        url: `${ENDPOINTS}/donations/`,
        method: "POST",
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers: data instanceof FormData ? {} : { 'Content-Type': 'application/json' },
      }),
      invalidatesTags: ["donations"],
    }),
  }),
});

export const { useGetFondQuery, usePostDonationsMutation } = api;