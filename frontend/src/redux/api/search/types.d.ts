namespace SEARCH {
  interface ISearch {
    id: number;
    full_name: string | null;
    last_name: string | null;
    name: string | null;
    school_class: {
      grade: string;
    };
  }
  type GetSearchResponse = ISearch[];
  type GetSearchRequest = null;
}
