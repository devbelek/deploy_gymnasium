import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query<
      CONTACTS.GetContactsResponse,
      CONTACTS.GetContactsRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/Contacts/`,
        method: "GET",
      }),
      providesTags: ["Contacts"],
    }),
  }),
});

export const { useGetContactsQuery } = api;
