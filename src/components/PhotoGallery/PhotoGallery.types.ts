export type PhotoGalleryItem = {
  type?: "image" | "video";
  src?: string;
  alt?: string;
  label?: string;
  poster?: string;
};

export type PhotoGalleryProps = {
  title?: string;
  subtitle?: string;
  items?: PhotoGalleryItem[];
};

export type GalleryLayoutSlot = {
  fallbackLabel: string;
  mediaType?: "image" | "video";
  columnSpan: { base: number; sm: number; md: number };
  rowSpan: { base: number; sm: number; md: number };
};
