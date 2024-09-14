export interface Comment {
  id: number;
  news: number;
  author: {
    id: number;
    username: string;
  };
  text: string;
  created_at: string;
  updated_at: string;
  replies: CommentReply[];
  likes: Like[];
  isLiked: boolean;
}

export interface NewComment {
  news: number;
  text: string;
}

export interface CommentReply {
  id: number;
  comment: number;
  author: {
    id: number;
    username: string;
  };
  text: string;
  created_at: string;
  updated_at: string;
}

export interface Like {
  id: number;
  comment: number;
  user: {
    id: number;
    username: string;
  };
}
