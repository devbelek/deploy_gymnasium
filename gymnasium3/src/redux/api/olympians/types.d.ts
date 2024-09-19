namespace OLYMPIANS {
    interface IOlympian {
        id: number;
        student: {
            name: string;
            surname: string;
        };
        name_of_olympia: {
            choosing: string;
            choosing_ky: string;
            choosing_ru: null;
        };
    }
    type GetOlympiansResponse = IOlympian[];

    type GetOlympiansRequest = void;
}
