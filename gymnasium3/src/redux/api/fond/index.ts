import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

// Функция для получения CSRF токена из cookie
function getCsrfToken() {
  const name = "csrftoken=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getFond: build.query<DONATIONS.GetFondResponse, DONATIONS.GetFondRequest>({
      query: () => ({
        url: `${ENDPOINTS}/donations/`,
        method: "GET",
      }),
      providesTags: ["donations"],
    }),
    postDonations: build.mutation<DONATIONS.CreateDonationResponse, FormData>({
      query: (data) => {
        console.log("postDonations called with data:", {
          amount: data.get("amount"),
          comment: data.get("comment"),
          file: data.get("confirmation_file"),
        });

        return {
          url: `${ENDPOINTS}/donations/`,
          method: "POST",
          body: data,
          headers: {
            "X-CSRFToken": getCsrfToken(),
          },
        };
      },
      invalidatesTags: ["donations"],
    }),
  }),
});

export const { useGetFondQuery, usePostDonationsMutation } = api;
