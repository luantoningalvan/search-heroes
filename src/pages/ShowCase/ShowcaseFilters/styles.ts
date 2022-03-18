import { styled } from "../../../stitches.config";

export const Bar = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "3em",
  "&>div": {
    display: "flex",
    gap: "1em",
    alignItems: "center",
  },
});

export const Results = styled("span", {
  color: "#9e9e9e",
  fontSize: "1rem",
});

export const ToggleSwitch = styled("input", {
  position: "relative",
  width: 60,
  height: 30,
  appearance: "none",
  background: "#e4e5e9",
  borderRadius: 15,
  transition: ".5s",
  cursor: "pointer",

  "&::before": {
    content: "",
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    top: 0,
    left: 0,
    transform: "scale(0.7)",
    background: "#f00",
    boxShadow: "0px 3px 8px rgba(225, 0, 0, 0.6)",
    transition: ".5s",
  },
  "&:checked::before": {
    left: 30,
  },
});

export const AlphabeticalOrderFilter = styled("div", {
  display: "flex",
  alignItems: "center",
  "& span": {
    color: "#fa7676",
    margin: "0 1em 0 0.5em",
    fontSize: "0.9rem",
  },
  "& svg": {
    color: "#f00",
  },
});

export const OnlyFavoritesFilter = styled("button", {
  display: "flex",
  alignItems: "center",
  color: "#fa7676",
  fontSize: "0.9rem",
  background: "transparent",
  cursor: "pointer",
  gap: "0.5em",
  padding: 8,
  height: 30,
  borderRadius: 15,
  border: "1px solid transparent",
  "& svg": {
    color: "#f00",
  },

  variants: {
    active: {
      true: {
        background: "#fdecec",
        color: "#f00",
        borderColor: "#f00",
        "& svg": {
          color: "#f00",
        },
      },
    },
  },
});
