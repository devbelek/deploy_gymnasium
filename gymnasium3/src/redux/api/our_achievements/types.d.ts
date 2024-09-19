namespace OUR_ACHIEVEMENTS {
  interface IOurAchievements {
    image: null;
    content: string;
    content_ky: string;
    content_ru: string;
  }
  type GetOurAchievementsRequest = void;
  type GetOurAchievementsResponse = IOurAchievements[];
}
