import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

namespace SEARCH {
  export interface ISearch {
    id: number;
    full_name: string | null;
    school_class__grade: string | null;
    last_name: string;
    name: string;
    school_class?: {
      grade: string;
    };
  }
  export type GetSearchResponse = ISearch[];
  export type GetSearchRequest = {
    full_name?: string;
    school_class__grade?: string;
  } | null;
}

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query<SEARCH.GetSearchResponse, SEARCH.GetSearchRequest>({
      query: (searchParams) => {
        if (!searchParams) return { url: `${ENDPOINTS}/students/` };
        const { full_name, school_class__grade } = searchParams;
        let url = `${ENDPOINTS}/students/`;
        let params = {};

        if (full_name) {
          params = { ...params, full_name };
        }
        if (school_class__grade) {
          params = { ...params, school_class__grade };
        }

        return {
          url,
          params,
        };
      },
      providesTags: ["search"],
    }),
  }),
});

export const { useGetSearchQuery } = api;