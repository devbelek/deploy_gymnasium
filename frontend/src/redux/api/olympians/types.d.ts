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
            choosing_ru: string;
        };
        year: number;
        level: string;
        place: string;
    }

    type GetOlympiansResponse = IOlympian[];
    type GetOlympiansRequest = void;
    type GetDetOlympianTypeResponse = IOlympian[];
    type GetDetOlympianTypeRequest = string | number | void;
}
