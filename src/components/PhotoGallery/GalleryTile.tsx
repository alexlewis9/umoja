import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import type { GalleryLayoutSlot, PhotoGalleryItem } from "./PhotoGallery.types";

type GalleryTileProps = {
  item?: PhotoGalleryItem;
  columnSpan: GalleryLayoutSlot["columnSpan"];
  rowSpan: GalleryLayoutSlot["rowSpan"];
  fallbackLabel: string;
  defaultType?: "image" | "video";
};

export default function GalleryTile({
  item,
  columnSpan,
  rowSpan,
  fallbackLabel,
  defaultType = "image",
}: GalleryTileProps) {
  const type = item?.type ?? defaultType;
  const label = item?.label ?? fallbackLabel;
  const hasSource = Boolean(item?.src);

  return (
    <Box
      as="article"
      position="relative"
      overflow="hidden"
      borderRadius="1rem"
      border="1px solid"
      borderColor="rgba(17, 17, 17, 0.08)"
      gridColumn={{ base: `span ${columnSpan.base}`, sm: `span ${columnSpan.sm}`, md: `span ${columnSpan.md}` }}
      gridRow={{ base: `span ${rowSpan.base}`, sm: `span ${rowSpan.sm}`, md: `span ${rowSpan.md}` }}
      background="linear-gradient(145deg, #e9e4df, #d8d1cb)"
      boxShadow="inset 0 1px 0 rgba(255, 255, 255, 0.7)"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at top left, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0) 40%)",
        zIndex: 0,
      }}
      _after={{
        content: '""',
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(17, 17, 17, 0) 45%, rgba(17, 17, 17, 0.18) 100%)",
        opacity: hasSource ? 1 : 0,
        transition: "opacity 160ms ease",
        zIndex: 0,
      }}
    >
      {hasSource ? (
        <Box
          as="span"
          position="absolute"
          left="0.9rem"
          top="0.9rem"
          zIndex={2}
          borderRadius="999px"
          bg="rgba(17, 17, 17, 0.72)"
          color="white"
          fontSize="0.68rem"
          fontWeight="700"
          letterSpacing="0.14em"
          px="0.55rem"
          py="0.35rem"
          textTransform="uppercase"
        >
          {type}
        </Box>
      ) : null}
      <Box position="absolute" inset="0" display="flex" alignItems="center" justifyContent="center" zIndex={1}>
        {hasSource && type === "video" ? (
          <video
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={item?.src}
            poster={item?.poster}
            controls
            muted
            playsInline
          />
        ) : null}

        {hasSource && type === "image" ? (
          <Image
            src={item?.src ?? ""}
            alt={item?.alt ?? label}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
        ) : null}

        {!hasSource ? (
          <Text
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px="1rem"
            color="#171717"
            fontSize={{ base: "1.05rem", md: "clamp(1rem, 1.8vw, 1.75rem)" }}
            fontWeight="700"
            letterSpacing="0.12em"
            textAlign="center"
            textTransform="uppercase"
            fontFamily="var(--font-lato), Arial, Helvetica, sans-serif"
          >
            {label}
          </Text>
        ) : null}
      </Box>

      {hasSource && item?.label ? (
        <Text
          position="absolute"
          left="1rem"
          right="1rem"
          bottom="0.9rem"
          zIndex={2}
          color="white"
          fontSize="0.9rem"
          fontWeight="700"
          lineHeight="1.2"
          textShadow="0 1px 2px rgba(0, 0, 0, 0.32)"
        >
          {item.label}
        </Text>
      ) : null}
    </Box>
  );
}
