import { Box, Heading } from "@chakra-ui/react";

export type PageHeaderProps = {
  title?: string;
  subtitle?: string;
  titleAs?: "h1" | "h2" | "h3";
  titleSize?: "2xl" | "3xl" | "4xl";
  subtitleAs?: "h2" | "h3" | "h4";
  subtitleSize?: "md" | "lg" | "xl";
  mb?: { base?: number; md?: number };
};

export default function PageHeader({
  title,
  subtitle,
  titleAs = "h1",
  titleSize = "4xl",
  subtitleAs = "h2",
  subtitleSize = "lg",
  mb = { base: 12, md: 16 },
}: PageHeaderProps) {
  const hasSubtitle = Boolean(subtitle?.trim());

  return (
    <Box textAlign="center" mb={mb}>
      <Heading
        as={titleAs}
        size={titleSize}
        color="black"
        mb={hasSubtitle ? 4 : 0}
      >
        {title}
      </Heading>
      {hasSubtitle ? (
        <Heading as={subtitleAs} size={subtitleSize} color="gray.600">
          {subtitle}
        </Heading>
      ) : null}
    </Box>
  );
}
