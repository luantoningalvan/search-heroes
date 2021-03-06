import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "6em auto",
  "& h3": {
    marginTop: "1em",
    fontSize: "1.9rem",
  },
  "& p": {
    marginTop: "1em",
    fontSize: "1rem",
    color: "$gray500",
  },
  "& a": {
    display: "block",
    textDecoration: "none",
    color: "$red500",
    marginTop: "2em",
  },
});
