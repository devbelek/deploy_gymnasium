import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTeachers: build.query<
      TEACHERS.GetTeachersResponse,
      TEACHERS.GetTeachersRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/teachers/`,
        method: "GET",
      }),

      providesTags: ["teachers"],
    }),
    getDetTeacher: build.query<
      TEACHERS.GetDetTeachersResponse,
      TEACHERS.GetDetTeachersRequest
    >({
      query: (id) => ({
        url: `${ENDPOINTS}/teachers/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTeachersQuery, useGetDetTeacherQuery } = api;
