import { styled } from "../../../stitches.config";

export const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1em",
  "@md": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
