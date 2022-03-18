import { styled } from "../../../stitches.config";
import { Search } from "../../../components/Search";

export const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1em",
  "@md": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
