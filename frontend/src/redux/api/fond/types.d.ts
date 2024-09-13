namespace DONATIONS {
  interface IDonation {
    id: number;
    user: number; // Предполагаем, что это ID пользователя
    amount: string; // DecimalField в Django обычно сериализуется в строку
    date: string;
    comment: string | null;
    confirmation_file: string; // Путь к файлу
    is_verified: boolean;
    verification_message: string;
  }

  type GetFondResponse = IDonation[];
  type GetFondRequest = void;

  interface CreateDonationRequest {
    amount: string;
    comment?: string;
    confirmation_file: File;
  }

  type CreateDonationResponse = IDonation;
}