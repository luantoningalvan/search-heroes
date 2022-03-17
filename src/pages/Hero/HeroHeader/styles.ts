import { styled } from "@stitches/react";
import { Search } from "../../../components/Search";

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const CustomSearch = styled(Search, {
  maxWidth: 400,

  "> div": {
    height: 48,
  },
  input: {
    height: 48,
  },
});
