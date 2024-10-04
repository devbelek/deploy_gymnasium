namespace GALLERY {
  interface IGallery {
    id: number;
    image: string;
    title: string;
    content: string;
  }
  type GetGalleryResponse = IGallery[];
  type GetGalleryRequest = void;
}
