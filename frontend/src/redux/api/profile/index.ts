import { api as index } from ".."; // Импорт основного API-конфига

// const ENDPOINTS = process.env.NEXT_PUBLIC_API;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query<
      ACCOUNT.GetAccountResponse,
      ACCOUNT.GetAccountRequest
    >({
      query: () => ({
        url: `https://3-gymnasium.kg/api/profile`,
        method: "GET",
        credentials: "include", // Важно для передачи куки сессионного пользователя
      }),
      providesTags: ["accounts"],
    }),
  }),
});

export const { useGetAccountQuery } = api;
