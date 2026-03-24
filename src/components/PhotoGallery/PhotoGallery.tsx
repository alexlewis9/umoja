import { Box } from "@chakra-ui/react";

import GalleryTile from "./GalleryTile";
import PhotoGalleryHeader from "./PhotoGalleryHeader";
import type { GalleryLayoutSlot, PhotoGalleryProps } from "./PhotoGallery.types";
export type { PhotoGalleryItem, PhotoGalleryProps } from "./PhotoGallery.types";

const galleryLayout: GalleryLayoutSlot[] = [
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 2, md: 2 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 2, md: 2 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 2, md: 2 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 2, md: 2 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  {
    fallbackLabel: "Video",
    mediaType: "video",
    columnSpan: { base: 2, sm: 5, md: 8 },
    rowSpan: { base: 2, sm: 3, md: 3 },
  },
  {
    fallbackLabel: "Image",
    columnSpan: { base: 2, sm: 3, md: 4 },
    rowSpan: { base: 2, sm: 3, md: 3 },
  },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 2, md: 2 }, rowSpan: { base: 1, sm: 2, md: 2 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 2, md: 2 }, rowSpan: { base: 1, sm: 2, md: 2 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 3, md: 3 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 3, md: 3 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 4, md: 4 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 4, md: 4 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  { fallbackLabel: "Image", columnSpan: { base: 1, sm: 4, md: 4 }, rowSpan: { base: 1, sm: 1, md: 1 } },
  {
    fallbackLabel: "Video",
    mediaType: "video",
    columnSpan: { base: 2, sm: 5, md: 5 },
    rowSpan: { base: 2, sm: 2, md: 2 },
  },
];

export default function PhotoGallery({
  title = "UMOJA's Photo Gallery",
  subtitle = "Add your own image or video URLs to replace any placeholder tile.",
  items = [],
}: PhotoGalleryProps) {
  const tileCount = Math.max(items.length, galleryLayout.length);

  return (
    <Box as="section" width="100%">
      <PhotoGalleryHeader title={title} subtitle={subtitle} />

      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(8, minmax(0, 1fr))", md: "repeat(12, minmax(0, 1fr))" }}
        gridAutoRows={{ base: "120px", sm: "78px", md: "84px" }}
        gap="0.5rem"
      >
        {Array.from({ length: tileCount }, (_, index) => {
          const slot = galleryLayout[index % galleryLayout.length];

          return (
            <GalleryTile
              key={`${items[index]?.src ?? items[index]?.label ?? "placeholder"}-${index}`}
              item={items[index]}
              columnSpan={slot.columnSpan}
              rowSpan={slot.rowSpan}
              fallbackLabel={slot.fallbackLabel}
              defaultType={slot.mediaType ?? "image"}
            />
          );
        })}
      </Box>
    </Box>
  );
}
