namespace DONATIONS {
  interface IDonations {
    id?: number;
    surname: string;
    name: string;
    count: number;
  }
  type GetDonationsResponse = IDonations[];
  type GetDonationsRequest = void;
}
