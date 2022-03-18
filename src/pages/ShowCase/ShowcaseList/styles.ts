import { styled } from "../../../stitches.config";

export const ListGrid = styled("div", {
  marginTop: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "2em",
  "@media(max-width: 450)": {
    gridTemplateColumns: "repeat(1,1fr)",
  },
});
