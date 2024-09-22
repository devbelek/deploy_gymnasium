import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

namespace SEARCH {
  export interface ISearch {
    id: number;
    full_name: string | null;
    last_name: string | null;
    name: string | null;

    school_class: {
      grade: string;
    };
  }
  export type GetSearchResponse = ISearch[];
  export type GetSearchRequest = {
    full_name?: string;
    last_name?: string;
    name?: string;
    grage?: string;
    school_class?: string;
  };
}

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query<SEARCH.GetSearchResponse, SEARCH.GetSearchRequest>({
      query: (searchParams) => {
        const { full_name, school_class } = searchParams;
        let url = `${ENDPOINTS}/students/`;
        let params = {};

        if (full_name) {
          params = { ...params, full_name };
        }
        if (school_class) {
          params = { ...params, school_class };
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
