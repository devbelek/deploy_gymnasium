namespace REKVIZIT {
  interface IRekvizit {
    id?: number;
    requisite: string;
  }
  type GetRekvizitResponse = IRekvizit[];
  type GetRekvizitRequest = void;
}
