declare namespace NEWS {
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
    description_ky: null | string;
    description_ru: null | string;
  }

  interface IComment {
    id: number;
    author: string;
    text: string;
    created_at: string;
    updated_at: string;
    likes_count: number;
    is_liked: boolean;
    replies: IComment[];
  }

  type GetNewsResponse = INews[];
  type GetNewsRequest = void;

  type GetDetNewsResponse = INews;
  type GetDetNewsRequest = number;

  type GetCommentsResponse = IComment[];
  type GetCommentsRequest = number;

  interface AddCommentRequest {
    newsId: number;
    text: string;
    parentId?: number;
  }
  type AddCommentResponse = IComment;

  interface UpdateCommentRequest {
    commentId: number;
    text: string;
    parentId?: number;
  }
  type UpdateCommentResponse = IComment;

  interface DeleteCommentRequest {
    commentId: number;
    parentId?: number;
  }
  type DeleteCommentResponse = void;

  interface LikeCommentRequest {
    commentId: number;
  }
  type LikeCommentResponse = { detail: string };

  interface GetAccountResponse {
    id: number;
    username: string;
    email: string;
    is_staff: boolean;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    isAuthenticated: boolean;
  }
}