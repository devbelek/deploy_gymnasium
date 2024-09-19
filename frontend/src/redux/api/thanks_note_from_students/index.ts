import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getThankNoteFromStudents: build.query<
      THANKS_NOTE_FROM_STUDENTS.GetThankNoteFromStudentResponse,
      THANKS_NOTE_FROM_STUDENTS.GetThankNoteFromStudentRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/thanks_note_from_students/`,
        method: "GET",
      }),
      providesTags: ["thanks_note_from_students"],
    }),
  }),
});

export const { useGetThankNoteFromStudentsQuery } = api;
