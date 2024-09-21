namespace SEARCH {
  export interface ISearch {
    id: number;
    full_name: string | null;
    school_class__grade: string | null;
  }
  export type GetSearchResponse = ISearch[];
  export type GetSearchRequest = {
    full_name?: string;
    school_class__grade?: string;
  } | null;
}