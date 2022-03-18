import { styled } from "../../../stitches.config";

export const Bar = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "3em",
  flexDirection: "column-reverse",
  gap: "1rem",

  "@sm": {
    flexDirection: "row",
  },

  "&>div": {
    display: "flex",
    gap: "1em",
    alignItems: "center",
    flexDirection: "column",
    "@md": {
      flexDirection: "row",
    },
  },
});

export const Results = styled("span", {
  color: "$gray400",
  fontSize: "1rem",
});

export const ToggleSwitch = styled("input", {
  position: "relative",
  width: 60,
  height: 30,
  appearance: "none",
  background: "$gray100",
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
    background: "$red500",
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
    color: "$red200",
    margin: "0 1em 0 0.5em",
    fontSize: "0.9rem",
  },
  "& svg": {
    color: "$red500",
  },
});

export const OnlyFavoritesFilter = styled("button", {
  display: "flex",
  alignItems: "center",
  color: "$red200",
  fontSize: "0.9rem",
  background: "transparent",
  cursor: "pointer",
  gap: "0.5em",
  padding: 8,
  height: 30,
  borderRadius: 15,
  border: "1px solid transparent",
  "& svg": {
    color: "$red500",
  },

  variants: {
    active: {
      true: {
        background: "$red50",
        color: "$red500",
        borderColor: "$red500",
        "& svg": {
          color: "$red500",
        },
      },
    },
  },
});
