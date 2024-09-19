namespace ABOUT_US {
  interface IAbout {
    years_for_school: number;
    students: number;
    graduates_per_year: number;
    count_books: number;
  }
  type GetAboutResponse = IAbout[];

  type GetAboutRequest = void;
}
