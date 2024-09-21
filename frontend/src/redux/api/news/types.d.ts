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
  type GetDetNewsRequest = string | number;

  type GetCommentsResponse = IComment[];
  type GetCommentsRequest = number;

  type AddCommentResponse = IComment;
  type AddCommentRequest = { newsId: number; text: string; parentId?: number };

  type UpdateCommentResponse = IComment;
  type UpdateCommentRequest = {
    commentId: number;
    text: string;
    parentId?: number;
  };

  type DeleteCommentResponse = void;
  type DeleteCommentRequest = { commentId: number; parentId?: number };

  type LikeCommentResponse = { detail: string };
  type LikeCommentRequest = { commentId: number };
}
