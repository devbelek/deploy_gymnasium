namespace STUDENTS {
    interface IStudent {
        name: string;
        surname: string;
        last_name: string;
        year: number;
        olympian_status?: { choosing: string };
        school_class: { grade: string; parallel: string };
        classroom_teacher: [
            {
                last_name: string;
                name: string;
                surname: string;
            }
        ];
    }

    type GetStudentsResponse = IStudent[];
    type GetStudentsRequest = void;

    type GetStudentsClassResponse = IStudent[];
    type GetStudentsClassRequest = string | number | void;
}
