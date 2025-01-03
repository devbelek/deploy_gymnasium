namespace STUDENTS {
    interface IStudent {
        name: string;
        surname: string;
        last_name: string | null;
        year: number;
        olympian_status?: { choosing: string };
        school_class: { grade: string; parallel: string };
        classroom_teacher: [
            {
                last_name: string | null;
                name: string;
                surname: string;
            }
        ];
        status_in_class: string;
    }

    type GetStudentsResponse = IStudent[];
    type GetStudentsRequest = void;

    type GetStudentsClassResponse = IStudent[];
    type GetStudentsClassRequest = string | number | void;
}
