import { styled } from "../../../stitches.config";

export const ListGrid = styled("div", {
  marginTop: "2rem",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2em",
  "@sm": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  "@md": {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "@lg": {
    gridTemplateColumns: "repeat(4,1fr)",
  },
});
