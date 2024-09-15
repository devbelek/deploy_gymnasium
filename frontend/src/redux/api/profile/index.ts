import { api } from "..";

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query<ACCOUNT.GetAccountResponse, ACCOUNT.GetAccountRequest>({
      query: () => ({
        url: `profile`,
        method: "GET",
      }),
    }),
    updateAccount: build.mutation<ACCOUNT.UpdateAccountResponse, ACCOUNT.UpdateAccountRequest>({
      query: (body) => ({
        url: `profile`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetAccountQuery, useUpdateAccountMutation } = profileApi;

export namespace ACCOUNT {
  export interface IAccount {
    user: string;
    avatar: string | null;
    about: string | null;
  }

  export type GetAccountResponse = IAccount;
  export type GetAccountRequest = null;

  export type UpdateAccountResponse = IAccount;
  export type UpdateAccountRequest = Partial<IAccount>;
}