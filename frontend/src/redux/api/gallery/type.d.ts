namespace GALLERY {
  interface IGallery {
    id: number;
    image: string;
    content: string;
  }
  type GetGalleryResponse = IGallery[];
  type GetGalleryRequest = void;
}
