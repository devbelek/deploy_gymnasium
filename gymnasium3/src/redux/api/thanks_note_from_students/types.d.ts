namespace THANKS_NOTE_FROM_STUDENTS {
  interface IThankNoteFromStudent {
    image: null;
    title: string;
    text: string;
  }

  type GetThankNoteFromStudentRequest = {
    id: number;
  };

  type GetThankNoteFromStudentResponse = IThankNoteFromStudent;
}
