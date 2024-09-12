namespace OLYMPIANS {
  interface IOlympian {
    name: string;
    surname: string;
    athletic_performance: string;
  }

  type GetOlympiansResponse = IOlympian[];

  type GetOlympiansRequest = null;
}
