import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getStudents: build.query<
            STUDENTS.GetStudentsResponse,
            STUDENTS.GetStudentsRequest
        >({
            query: () => ({
                url: `${ENDPOINTS}/students/`,
                method: "GET",
            }),
            providesTags: ["students"],
        }),
    }),
});

export const { useGetStudentsQuery } = api;
