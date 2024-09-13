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
      DONATIONS.CreateDonationResponse,
      DONATIONS.CreateDonationRequest
    >({
      query: (data) => {
        const formData = new FormData();
        formData.append("amount", data.amount);
        formData.append("confirmation_file", data.confirmation_file);
        formData.append("comment", data.comment);

        return {
          url: `${ENDPOINTS}/donations/`,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["donations"],
    }),
  }),
});

export const { useGetFondQuery, usePostDonationsMutation } = api;