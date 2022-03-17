import { styled } from "@stitches/react";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: "1.5em",
});

export const Comic = styled("div", {
  "> img": {
    width: "100%",
    height: "auto",
  },
  h5: {
    fontSize: "0.9rem",
    color: "#333",
    marginTop: "0.5em",
  },
});

export const Title = styled("h4", {
  fontSize: "1rem",
  color: "#333",
  marginBottom: "1em",
});
