import { styled } from "../../stitches.config";

export const Main = styled("main", {
  maxWidth: 1024,
  margin: "0 auto",
  padding: 24,
  minHeight: "100vh",
});

export const Footer = styled("footer", {
  width: "100%",
  background: "$red500",
  textAlign: "center",
  padding: "2rem",
  boxSizing: "border-box",

  "& a": {
    color: "$white",
    textDecoration: "none",
  },
});
