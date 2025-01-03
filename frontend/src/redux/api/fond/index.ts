import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getDonations: build.query<
      DONATIONS.GetDonationsResponse,
      DONATIONS.GetDonationsRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/donations/`,
        method: "GET",
      }),
      providesTags: ["donations"],
    }),
  }),
});

export const { useGetDonationsQuery } = api;
