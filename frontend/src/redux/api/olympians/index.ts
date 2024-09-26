import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT || "default_endpoint_here"; // Optional fallback

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getOlympians: build.query<
            OLYMPIANS.GetOlympiansResponse,
            OLYMPIANS.GetOlympiansRequest
        >({
            query: () => ({
                url: `${ENDPOINTS}/olympians`,
                method: "GET",
            }),
            providesTags: ["olympians"],
        }),
        getOlympiansSelection: build.query<
            OLYMPIANS.GetDetOlympianTypeResponse,
            OLYMPIANS.GetDetOlympianTypeRequest
        >({
            query: (id) => ({
                url: `${ENDPOINTS}/students/olympians/olymp_categories/${id}`, // Added trailing slash
                method: "GET",
            }),
        }),
    }),
});

export const { useGetOlympiansQuery, useGetOlympiansSelectionQuery } = api;
