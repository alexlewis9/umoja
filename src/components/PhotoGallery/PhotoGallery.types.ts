export type PhotoGalleryItem = {
  type?: "image" | "video";
  src?: string;
  alt?: string;
  label?: string;
  poster?: string;
};

export type PhotoGalleryHeader = {
  title?: string;
  subtitle?: string;
};

export type PhotoGalleryProps = {
  header?: PhotoGalleryHeader;
  items?: PhotoGalleryItem[];
};

export type GalleryLayoutSlot = {
  fallbackLabel: string;
  mediaType?: "image" | "video";
  columnSpan: { base: number; sm: number; md: number };
  rowSpan: { base: number; sm: number; md: number };
};
