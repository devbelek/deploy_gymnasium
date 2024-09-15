import { api } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query<ACCOUNT.GetAccountResponse, ACCOUNT.GetAccountRequest>({
      query: () => ({
        url: `${ENDPOINTS}/profile/`,
        method: "GET",
      }),
    }),
    updateAccount: build.mutation<ACCOUNT.UpdateAccountResponse, ACCOUNT.UpdateAccountRequest>({
      query: (body) => ({
        url: `${ENDPOINTS}/profile/`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetAccountQuery, useUpdateAccountMutation } = profileApi;
