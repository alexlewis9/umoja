import { Button, type ButtonProps } from "@chakra-ui/react";

type AppButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: "primary";
};

const variantStyles = {
  primary: {
    bg: "brand.primary",
    color: "white",
    _disabled: {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
} as const;

export function AppButton({
  variant = "primary",
  ...props
}: AppButtonProps) {
  const styles = variantStyles[variant];

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