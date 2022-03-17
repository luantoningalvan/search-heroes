import { styled } from "@stitches/react";

export const Container = styled("div", {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const Image = styled("img", {
  width: 300,
  height: 300,
  objectFit: "cover",
  borderRadius: "50%",
  boxShadow: "0px 0px 100px rgba(255,0,0,.4)",
});
