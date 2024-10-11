declare namespace CONTACTS {
  interface IContact {
    phone_number: string;
    address: string;
    instagram: string;
    youtube: string;
    telegram: string;
  }

  type GetContactsResponse = IContact[];
  type GetContactsRequest = void;
}