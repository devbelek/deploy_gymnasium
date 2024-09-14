// Тип для комментария
export interface Comment {
  id: number;
  news: number;  // ID новости, к которой привязан комментарий
  author: {
    id: number;
    username: string;
  };
  text: string;
  created_at: string;
  updated_at: string;
  replies: CommentReply[];  // Массив ответов на комментарий
  likes: Like[];  // Массив лайков комментария
}

// Тип для нового комментария, который отправляется при создании
export interface NewComment {
  news: number;  // ID новости, к которой привязан комментарий
  text: string;  // Текст комментария
}

// Тип для ответа на комментарий
export interface CommentReply {
  id: number;
  comment: number;  // ID комментария, к которому привязан ответ
  author: {
    id: number;
    username: string;
  };
  user?: {  //
    id: number;
    username: string;
  };
  text: string;
  created_at: string;
  updated_at: string;
}

// Тип для лайка
export interface Like {
  id: number;
  comment: number;  // ID комментария, который был лайкнут
  user: {
    id: number;
    username: string;
  };
}




