import { api } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

interface IAccount {
  user: string;
  avatar: string | null;
  about: string | null;
}

type GetAccountResponse = IAccount;
type GetAccountRequest = null;

type UpdateAccountResponse = IAccount;
type UpdateAccountRequest = Partial<IAccount>;

const getCSRFToken = (): string | null => {
  const csrfToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('csrftoken='))
    ?.split('=')[1];
  return csrfToken || null;
};

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query<GetAccountResponse, GetAccountRequest>({
      query: () => ({
        url: `${ENDPOINTS}/profile/`,
        method: "GET",
      }),
    }),
    updateAccount: build.mutation<UpdateAccountResponse, UpdateAccountRequest>({
      query: (body) => ({
        url: `${ENDPOINTS}/profile/`,
        method: "PUT",
        credentials: 'include',
        headers: {
          'X-CSRFToken': getCSRFToken() || '',
          'Content-Type': 'application/json',
        },
        body,
      }),
    }),
  }),
});

export const { useGetAccountQuery, useUpdateAccountMutation } = profileApi;
