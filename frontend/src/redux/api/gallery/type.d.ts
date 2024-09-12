namespace GALLERY {
  interface IGallery {
    id?: number;
    image: string;
    content: string;
    url_video?: string;
  }
  type GetGalleryResponse = IGallery[];
  type GetGalleryRequest = void;
}
