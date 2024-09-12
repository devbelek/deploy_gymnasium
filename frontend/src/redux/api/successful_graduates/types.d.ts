namespace SUCCESSFUL_GRADUATES {
    interface ISuccessfulGraduates {
        content: string;
        content_ky: string;
        content_ru: string;
        graduate: {
            last_name: string;
            name: string;
            surname: string;
            year: number;
        };
        image: string;
        year: number;
    }

    type GetSuccessfulGraduatesResponse = ISuccessfulGraduates[];
    type GetSuccessfulGraduatesRequest = void;
}
