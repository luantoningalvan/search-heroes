import { styled } from "../../../stitches.config";

export const Header = styled("header", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 32,

  "> img": {
    maxWidth: "310px",
    width: "100%",
  },
});

export const Title = styled("h2", {
  marginTop: "1.8em",
  fontSize: "2rem",
  textAlign: "center",
});

export const Description = styled("p", {
  marginTop: "0.5em",
  marginBottom: "2em",
  display: "block",
  fontSize: "1rem",
  color: "$gray400",
  textAlign: "center",
});
