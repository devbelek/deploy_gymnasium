export namespace ACCOUNT {
  export interface IAccount {
    user: string;
    avatar: string | null;
    about: string | null;
  }

  export type GetAccountResponse = IAccount;
  export type GetAccountRequest = null;

  export type UpdateAccountResponse = IAccount;
  export type UpdateAccountRequest = Partial<IAccount>;
}