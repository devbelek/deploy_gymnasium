namespace TEACHERS {
  interface ITeacher {
    id?: number;
    teachers_status: string;
    surname: string;
    name: string;
    last_name: string;
    experience: string;
    subject: string;
    subject_ky: string;
    subject_ru: string;
    education: string;
    education_ky: string;
    education_ru: string;
    successes: string;
    successes_ky: string;
    successes_ru: string;
    image: string;
  }

  type GetTeachersResponse = ITeacher[];
  type GetTeachersRequest = void;
  type GetDetTeachersResponse = ITeacher;
  type GetDetTeachersRequest = string | number;
}
