namespace ACCOUNT {
  interface IAccount {
    user: string;
    avatar: string | null;
    about: string | null;
  }

  type GetAccountResponse = IAccount;
  type GetAccountRequest = null;

  type UpdateAccountResponse = IAccount;
  type UpdateAccountRequest = FormData;
}
