import { styled } from "../../stitches.config";

export const Button = styled("button", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$red500",
  borderRadius: "50%",
  flexGrow: 0,
  flexShrink: 0,

  "&:hover": {
    background: "rgba(0,0,0,.05)",
  },
  variants: {
    size: {
      md: {
        height: 32,
        width: 32,
      },
      lg: {
        height: 48,
        width: 48,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
