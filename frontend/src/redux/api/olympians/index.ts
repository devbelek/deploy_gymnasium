import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getOlympians: build.query<
            OLYMPIANS.GetOlympiansResponse,
            OLYMPIANS.GetOlympiansRequest
        >({
            query: () => ({
                url: `${ENDPOINTS}/olympians/`,
                method: "GET",
            }),
            providesTags: ["olympians"],
        }),
    }),
});

export const { useGetOlympiansQuery } = api;
