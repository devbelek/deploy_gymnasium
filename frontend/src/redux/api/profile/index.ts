import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query<ACCOUNT.GetAccountResponse, ACCOUNT.GetAccountRequest>({
      query: () => ({
        url: `https://3-gymnasium.kg/api/profile`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["accounts"],
    }),
    updateAccount: build.mutation<ACCOUNT.UpdateAccountResponse, ACCOUNT.UpdateAccountRequest>({
      query: (body) => ({
        url: `https://3-gymnasium.kg/api/profile`,
        method: "PUT",
        body,
        credentials: "include",
      }),
      invalidatesTags: ["accounts"],
    }),
  }),
});

export const { useGetAccountQuery, useUpdateAccountMutation } = api;
