namespace GRADUATES {
    interface IGraduates {
        surname: string;
        name: string;
        last_name: string;
        year: number;
        ort: number | null;
    }
    type GetGraduatesResponse = IGraduates[];

    type GetGraduatesRequest = void;
}
