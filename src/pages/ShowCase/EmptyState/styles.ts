import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "6em auto",
  "& h3": {
    marginTop: "1em",
    fontSize: "1.3rem",
  },
  "& p": {
    marginTop: "0.5em",
    fontSize: "0.9rem",
    color: "$gray500",
  },
});
