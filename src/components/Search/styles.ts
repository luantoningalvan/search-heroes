import { styled } from "../../stitches.config";

export const SearchBox = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: 700,
});

export const SearchInput = styled("input", {
  width: "100%",
  background: "$red50",
  height: 64,
  borderRadius: 32,
  padding: 16,
  paddingLeft: 64,
  boxSizing: "border-box",
  border: "none",
  fontSize: "1rem",
  color: "$red500",
  "&::placeholder": {
    color: "$red200",
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
  color: "$red500",
});
