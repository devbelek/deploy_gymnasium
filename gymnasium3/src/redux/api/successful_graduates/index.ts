import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getSuccessfulGraduates: build.query<
            SUCCESSFUL_GRADUATES.GetSuccessfulGraduatesResponse,
            SUCCESSFUL_GRADUATES.GetSuccessfulGraduatesRequest
        >({
            query: () => ({
                url: `${ENDPOINTS}/successful-graduates/`,
                method: "GET",
            }),
            providesTags: ["successful_graduates"],
        }),
    }),
});

export const { useGetSuccessfulGraduatesQuery } = api;
