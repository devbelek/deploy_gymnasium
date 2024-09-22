import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getOlympians: build.query<
            OLYMPIANS.GetOlympiansResponse,
            OLYMPIANS.GetOlympiansRequest
        >({
            query: () => ({
                url: `${ENDPOINTS}/students/olympians/`,
                method: "GET",
            }),
            providesTags: ["olympians"],
        }),
        getOlympiansSelection: build.query<
            OLYMPIANS.GetDetOlympianTypeResponse,
            OLYMPIANS.GetDetOlympianTypeRequest
        >({
            query: (id) => ({
                url: `${ENDPOINTS}/olymp_categories/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetOlympiansQuery, useGetOlympiansSelectionQuery } = api;
