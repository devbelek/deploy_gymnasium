import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getThankNoteFromGraduates: build.query<
      THANKS_NOTE_FROM_GRADUATES.GetThankNoteFromGraduateResponse,
      THANKS_NOTE_FROM_GRADUATES.GetThankNoteFromGraduateRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/thanks_note_from_graduates/`,
        method: "GET",
      }),
      providesTags: ["thanks_note_from_graduates"],
    }),
  }),
});

export const { useGetThankNoteFromGraduatesQuery } = api;
