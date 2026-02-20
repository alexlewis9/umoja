import { Button, type ButtonProps } from "@chakra-ui/react";

type AppButtonProps = ButtonProps & {
  variantStyle?: "primary";
};

export function AppButton({ variantStyle = "primary", ...props }: AppButtonProps) {
  const styles =
    variantStyle === "primary"
      ? {
          bg: "#9F3E0B",
          color: "white",
          _hover: { bg: "#823811" },
          _active: { bg: "#823811" },
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
