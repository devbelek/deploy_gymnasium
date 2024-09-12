import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getGallery: build.query<
      GALLERY.GetGalleryResponse,
      GALLERY.GetGalleryRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/gallery/`,
        method: "GET",
      }),
      providesTags: ["gallery"],
    }),
  }),
});

export const { useGetGalleryQuery } = api;
