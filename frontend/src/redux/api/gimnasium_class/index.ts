import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getGimnasiumClass: build.query<
      GIMNASIUM_CLASS.GetGimnasiumClassResponse,
      GIMNASIUM_CLASS.GetGimnasiumClassRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/gimnasium_class/`,
        method: "GET",
      }),
      providesTags: ["gimnasium_class"],
    }),
  }),
});

export const { useGetGimnasiumClassQuery} = api
