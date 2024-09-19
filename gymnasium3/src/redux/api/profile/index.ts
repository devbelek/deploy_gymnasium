import { api } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const getCSRFToken = (): string | null => {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken="))
    ?.split("=")[1];
  return csrfToken || null;
};

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query<
      ACCOUNT.GetAccountResponse,
      ACCOUNT.GetAccountRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/profile/`,
        method: "GET",
        credentials: "include",
      }),
    }),
    updateAccount: build.mutation<
      ACCOUNT.UpdateAccountResponse,
      ACCOUNT.UpdateAccountRequest
    >({
      query: (body) => ({
        url: `${ENDPOINTS}/profile/`,
        method: "PUT",
        body,
        credentials: "include",
        headers: {
          "X-CSRFToken": getCSRFToken() || "",
        },
      }),
    }),
  }),
});

export const { useGetAccountQuery, useUpdateAccountMutation } = profileApi;
