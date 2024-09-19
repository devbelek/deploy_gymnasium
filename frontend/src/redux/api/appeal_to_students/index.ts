import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAppealToStudents: build.query<
      APPEAL_TO_STUDENTS.GetAppealToStudentResponse,
      APPEAL_TO_STUDENTS.GetAppealToStudentRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/appeal_to_students/`,
        method: "GET",
      }),
      providesTags: ["appeal_to_students"],
    }),
  }),
});

export const { useGetAppealToStudentsQuery } = api;
