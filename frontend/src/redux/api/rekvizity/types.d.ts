namespace REKVIZIT {
  interface IRekvizit {
    id?: number;
    requisite_first: string;
    requisite_second: string;
  }
  type GetRekvizitResponse = IRekvizit[];
  type GetRekvizitRequest = void;
}
