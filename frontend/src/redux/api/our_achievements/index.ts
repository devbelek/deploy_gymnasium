import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getOurAchievements: build.query<
      OUR_ACHIEVEMENTS.GetOurAchievementsResponse,
      OUR_ACHIEVEMENTS.GetOurAchievementsRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/our_achievements/`,
        method: "GET",
      }),
      providesTags: ["our_achievements"],
    }),
  }),
});

export const { useGetOurAchievementsQuery } = api;
