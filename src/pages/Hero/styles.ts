import { styled } from "../../stitches.config";

export const HeroDataContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column-reverse",
  gap: "4em",
  margin: "3em 0",
  "@md": {
    margin: "6em 0",
    flexDirection: "row",
  },
});
