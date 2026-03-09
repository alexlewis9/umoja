import { Button, type ButtonProps } from "@chakra-ui/react";

type AppButtonProps = ButtonProps & {
  variantStyle?: "primary";
};

export function AppButton({ variantStyle = "primary", ...props }: AppButtonProps) {
  // I need to replace these with the figma values
  const styles =
    variantStyle === "primary"
      ? {
          bg: "#8B3A0E",
          color: "white",
          _hover: { bg: "#74310C" },
          _active: { bg: "#5E2709" },
        }
      : {};

  return (
    <Button
      borderRadius="full"
      fontWeight={600}
      transition="all 0.15s ease"
      {...styles}
      {...props}
    />
  );
}
