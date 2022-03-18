import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  "@md": {
    justifyContent: "flex-end",
  },
});

export const Image = styled("img", {
  width: 300,
  height: 300,
  objectFit: "cover",
  borderRadius: "50%",
  boxShadow: "0px 0px 100px rgba(255,0,0,.4)",
});
