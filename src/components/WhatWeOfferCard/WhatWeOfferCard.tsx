import { Box, Text, type BoxProps } from "@chakra-ui/react";
import { type ReactNode } from "react";

type WhatWeOfferCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  showDefaultIcon?: boolean;
} & BoxProps;

function RocketIcon() {
  return (
    <Box as="span" boxSize="10" display="inline-flex">
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" aria-hidden="true">
        <path d="M14.187 4.086c1.57-.53 3.262-.84 4.813-.836a1.5 1.5 0 0 1 1.5 1.5c.004 1.551-.306 3.243-.836 4.813-.535 1.586-1.315 3.192-2.327 4.556-1.004 1.354-2.295 2.456-3.836 3.047l-2.027.778-.297.445a4.5 4.5 0 0 1-7.162.58 4.5 4.5 0 0 1 .58-7.162l.445-.297.778-2.027c.59-1.541 1.692-2.832 3.047-3.836 1.364-1.012 2.97-1.792 4.556-2.327Zm2.563 2.664a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-8.01 12.916a6.016 6.016 0 0 1-3.76-3.76l-1.73.87a.75.75 0 0 0-.364.93l1.11 3.329a.75.75 0 0 0 .949.474l3.326-1.109a.75.75 0 0 0 .469-.73Zm6.51-6.51a.75.75 0 0 1 1.061 0l2.533 2.533a.75.75 0 0 1-1.06 1.06l-2.534-2.532a.75.75 0 0 1 0-1.061Z" />
      </svg>
    </Box>
  );
}

export default function WhatWeOfferCard({
  title,
  description,
  icon,
  showDefaultIcon = true,
  ...rest
}: WhatWeOfferCardProps) {
  const renderedIcon = icon ?? (showDefaultIcon ? <RocketIcon /> : null);

  return (
    <Box
      as="article"
      bgGradient="to-b"
      gradientFrom="orange.900"
      gradientTo="orange.700"
      color="fg.inverted"
      borderRadius="2xl"
      boxShadow="lg"
      px="8"
      py="10"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap="4"
      minH="xs"
      maxW="xs"
      {...rest}
    >
      <Box color="fg.inverted" minH="10" display="flex" alignItems="center" justifyContent="center">
        {renderedIcon}
      </Box>

      <Text as="h3" fontSize="2xl" fontWeight="semibold" lineHeight="short">
        {title}
      </Text>

      <Text fontSize="lg" lineHeight="tall" color="fg.inverted">
        {description}
      </Text>
    </Box>
  );
}
