namespace NEWS {
  interface INews {
    id: number;
    author: string;
    image: string;
    content: string;
    content_ky: string;
    content_ru: string;
    created_at: string;
    updated_at: string;
    description: string;
    description_ky: null;
    description_ru: null;
  }
  type GetNewsResponse = INews[];
  type GetNewsRequest = void;
  type GetDetNewsResponse = INews;
  type GetDetNewsRequest = string | number;
}
