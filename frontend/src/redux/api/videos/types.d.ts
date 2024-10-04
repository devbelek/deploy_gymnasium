namespace VIDEO {
  interface IVideo {
    id: number;
    title: string;
    description: string;
    youtube_id: string;
  }

  type GetVideosResponse = IVideo[];
  type GetVideosRequest = void;
}
