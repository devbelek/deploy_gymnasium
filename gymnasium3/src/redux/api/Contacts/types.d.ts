namespace CONTACTS {
  interface IContact {
    phone_number: string;
    address: string;
    instagram: string;
    whatsapp: string;
    telegram: string;
  }
  type GetContactsResponse = IContact

  type GetContactsRequest = void
}
