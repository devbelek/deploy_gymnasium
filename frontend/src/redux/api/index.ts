import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API}`,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: [
    "teachers",
    "students",
    "news",
    "graduates",
    "gallery",
    "thanks_note_from_students",
    "appeal_to_students",
    "Contacts",
    "thanks_note_from_graduates",
    "successful_graduates",
    "our_achievements",
    "school_parliament",
    "gimnasium_class",
    "olympians",
    "accounts",
    "donations",
  ],
  endpoints: () => ({}),
});
