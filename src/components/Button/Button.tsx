import { Button, type ButtonProps } from "@chakra-ui/react";

type AppButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: "primary";
};

export function AppButton({
  variant = "primary",
  ...props
}: AppButtonProps) {
  const styles =
    variant === "primary"
      ? {
          bg: "#8B3A0E",
          color: "white",
          _hover: { bg: "#74310C" },
          _active: { bg: "#5E2709" },
          _disabled: {
            bg: "#C7C7C7",
            color: "#6B6B6B",
            cursor: "not-allowed",
            opacity: 1,
            _hover: {
              bg: "#C7C7C7",
            },
            _active: {
              bg: "#C7C7C7",
            },
          },
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