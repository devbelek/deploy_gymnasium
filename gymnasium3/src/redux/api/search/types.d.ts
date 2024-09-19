namespace SEARCH {
  interface ISearch {
    id: number;
    full_name: string | null;
    school_class__grade: string | null;
  }
  type GetSearchResponse = ISearch[];
  type GetSearchRequest = null;
}
