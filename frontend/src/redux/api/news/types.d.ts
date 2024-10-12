import { api as index } from "..";
import { getCSRFToken } from "./csrf";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

namespace NEWS {
  export interface INews {
    id: number;
    author: string;
    image: string;
    title: string;
    title_ky: string;
    title_ru: string;
    created_at: string;
    updated_at: string;
    description: string;
    description_ky: null | string;
    description_ru: null | string;
    comments_count: number;
  }

  export interface IComment {
    id: number;
    author: string;
    text: string;
    created_at: string;
    updated_at: string;
    likes_count: number;
    is_liked: boolean;
    replies: IComment[];
  }

  export type GetNewsResponse = INews[];
  export type GetNewsRequest = void;
  export type GetDetNewsResponse = INews;
  export type GetDetNewsRequest = string | number;

  export type GetCommentsResponse = IComment[];
  export type GetCommentsRequest = number;

  export type AddCommentResponse = IComment;
  export type AddCommentRequest = {
    newsId: number;
    text: string;
    parentId?: number;
  };

  export type UpdateCommentResponse = IComment;
  export type UpdateCommentRequest = {
    commentId: number;
    text: string;
    parentId?: number;
  };

  export type DeleteCommentResponse = void;
  export type DeleteCommentRequest = { commentId: number; parentId?: number };

  export type LikeCommentResponse = { detail: string };
  export type LikeCommentRequest = { commentId: number };
}
