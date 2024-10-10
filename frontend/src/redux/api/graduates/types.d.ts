namespace GRADUATES {
    interface IGraduates {
        surname: string;
        name: string;
        last_name: string;
        year: number;
        ort: number;
    }
    type GetGraduatesResponse = IGraduates[];

    type GetGraduatesRequest = void;
}
