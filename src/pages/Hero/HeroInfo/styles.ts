import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  maxWidth: 400,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  flexShrink: 0,
});

export const Title = styled("h2", {
  fontSize: "2rem",
  textTransform: "uppercase",
});

export const Top = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1em",
});

export const Description = styled("p", {
  fontSize: "1rem",
  color: "$gray500",
  lineHeight: "200%",
});

export const InfoWithIcon = styled("div", {
  "& .info-title": {
    display: "block",
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "$gray500",
    marginBottom: "0.3em",
  },
  "> div": {
    display: "flex",
    alignItems: "center",
    gap: "0.5em",
  },
  svg: {
    color: "$red500",
  },
});
