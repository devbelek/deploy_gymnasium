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
            choosing_ru: string | null; // Обновлено для большей ясности
        };
    }

    // Ответ для запроса получения всех олимпиадников
    type GetOlympiansResponse = IOlympian[];

    // Запрос для получения всех олимпиадников (пустой запрос)
    type GetOlympiansRequest = void;

    // Ответ для запроса получения типа олимпиадника
    type GetDetOlympianTypeResponse = IOlympian[];

    // Запрос для получения типа олимпиадника (возможные типы: строка, число или пустое значение)
    type GetDetOlympianTypeRequest = string | number | void;
}
