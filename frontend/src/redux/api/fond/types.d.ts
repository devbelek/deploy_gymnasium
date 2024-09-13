namespace DONATIONS {
  interface IDonation {
    id: number;
    user: string;
    amount: string;
    date: string;
    confirmation_file: string;
    comment: string;
    is_verified: boolean;
  }

  type GetFondResponse = IDonation[];
  type GetFondRequest = void;

  // Обновленный тип для запроса создания пожертвования
  interface CreateDonationRequest {
    amount: string;
    confirmation_file: File;
    comment: string;
  }

  // Тип ответа при создании пожертвования (предполагаем, что сервер возвращает созданное пожертвование)
  type CreateDonationResponse = IDonation;

  // Оставляем эти типы на случай, если они используются где-то еще в вашем приложении
  type GetDonationResponse = IDonation[];
  type GetDonationRequest = Partial<IDonation>;
}