namespace SCHOOL_PARLIAMENT {
    interface ISchoolParliament {
        student: [
            {
                name: string;
                surname: string;
            }
        ];
        type_of_administrator: {
            choosing: string;
        };
    }
    type GetSchoolParliamentResponse = ISchoolParliament[];
    type GetSchoolParliamentRequest = void;
}
