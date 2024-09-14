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

  type GetDonationResponse = IDonation[];
  type GetDonationRequest = IDonation;
}
