namespace THANKS_NOTE_FROM_GRADUATES {
  interface IThankNoteFromGraduate {
    image: null;
    title: string;
    text: string;
  }
  type GetThankNoteFromGraduateRequest = {
    id: number;
  };

  type GetThankNoteFromGraduateResponse = IThankNoteFromGraduate;
}
