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
        getStudentsClass: build.query<
            STUDENTS.GetStudentsClassResponse,
            STUDENTS.GetStudentsClassRequest
        >({
            query: (id) => ({
                url: `${ENDPOINTS}/students/?school_class?grade=${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetStudentsQuery, useGetStudentsClassQuery } = api;
