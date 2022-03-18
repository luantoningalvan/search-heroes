import { styled } from "../../stitches.config";

export const SearchBox = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: 700,
});

export const SearchInput = styled("input", {
  width: "100%",
  background: "#FDECEC",
  height: 64,
  borderRadius: 32,
  padding: 16,
  paddingLeft: 64,
  boxSizing: "border-box",
  border: "none",
  fontSize: "1rem",
  color: "#f00",
  "&::placeholder": {
    color: "#fa7676",
  },
});

export const SearchIcon = styled("div", {
  position: "absolute",
  left: 0,
  height: 64,
  width: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#f00",
});
