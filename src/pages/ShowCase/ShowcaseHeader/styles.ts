import { styled } from "../../../stitches.config";

export const Header = styled("header", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 32,
});

export const Title = styled("h2", {
  marginTop: "1.8em",
  fontSize: "2rem",
});

export const Description = styled("p", {
  marginTop: "0.5em",
  marginBottom: "2em",
  display: "block",
  fontSize: "1rem",
  color: "#9e9e9e",
});
