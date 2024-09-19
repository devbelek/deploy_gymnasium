namespace APPEAL_TO_STUDENTS {
  interface IAppealToStudent {
    title: string;
    title_ky: string;
    title_ru: string;
    text: string;
    text_ky: string;
    text_ru: string;
  }
  type GetAppealToStudentRequest = {
    id: number;
  };
  type GetAppealToStudentResponse = IAppealToStudent;
}
