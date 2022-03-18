import { styled, keyframes } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "6em auto",
  "& span": {
    marginTop: "1.5em",
    fontSize: "1rem",
  },
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Circle = styled("div", {
  height: 48,
  width: 48,
  border: "5px solid $red500",
  borderRightColor: "transparent",
  borderRadius: "50%",
  animation: `${spin} .75s linear infinite`,
});
