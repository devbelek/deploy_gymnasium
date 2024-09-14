namespace DONATIONS {
  interface IDonation {
    id: number;
    user: number;
    amount: string;
    date: string;
    comment: string | null;
    confirmation_file: string;
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
