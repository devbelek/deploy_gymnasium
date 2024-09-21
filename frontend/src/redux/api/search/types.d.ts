declare namespace SEARCH {
  interface ISearch {
    id: number;
    full_name: string | null;
    school_class__grade: string | null;
    last_name: string;
    name: string;
    school_class?: {
      grade: string;
    };
  }
  type GetSearchResponse = ISearch[];
  type GetSearchRequest = {
    full_name?: string;
    school_class__grade?: string;
  } | null;
}