import { styled } from "../../../stitches.config";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1em",
  "@xs": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  "@sm": {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "@md": {
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "1.5em",
  },
  "@lg": {
    gridTemplateColumns: "repeat(5,1fr)",
  },
});

export const Comic = styled("div", {
  "> img": {
    width: "100%",
    height: "auto",
  },
  h5: {
    fontSize: "0.9rem",
    color: "$gray500",
    marginTop: "0.5em",
  },
});

export const Title = styled("h4", {
  fontSize: "1rem",
  color: "$gray500",
  marginBottom: "1em",
});
