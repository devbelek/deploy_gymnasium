import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getGraduates: build.query<
            GRADUATES.GetGraduatesResponse,
            GRADUATES.GetGraduatesRequest
        >({
            query: () => ({
                url: `${ENDPOINTS}/graduates/`,
                method: "GET",
            }),
            providesTags: ["news"],
        }),
    }),
});

export const { useGetGraduatesQuery } = api;
