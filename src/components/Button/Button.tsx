import { Button, type ButtonProps } from "@chakra-ui/react";

const variantStyles = {
  primary: {
    bg: "brand.primary",
    color: "white",
    _hover: { bg: "brand.primaryHover" },
    _active: { bg: "brand.primaryActive" },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
} as const;

type AppButtonProps = ButtonProps & {
  variantStyle?: keyof typeof variantStyles;
};

export function AppButton({
  variantStyle = "primary",
  ...props
}: AppButtonProps) {
  const styles = variantStyles[variantStyle];

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