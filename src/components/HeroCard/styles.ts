import { styled, keyframes } from "@stitches/react";

export const HeroImage = styled("img", {
  borderBottom: "4px solid #f00",
  width: "100%",
  height: "auto",
});

export const HeroInfo = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "1em",
  "& h4": {
    fontSize: "1.1rem",
    color: "#404040",
  },
});

var shimmer = keyframes({
  "0%": { backgroundPosition: "-1200px 0" },
  "100%": { backgroundPosition: "1200px 0" },
});

export const SkeletonContainer = styled("div", {
  ".skeleton-box": {
    animationDuration: "2.2s",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    animationName: `${shimmer}`,
    animationTimingFunction: "linear",
    background:
      "linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%)",
    backgroundSize: "1200px 100%",
  },

  ".cover": {
    width: "100%",
    paddingTop: "100%",
    position: "relative",
    div: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
    },
  },
  ".text-line": { width: "90%", height: "20px", marginTop: "12px" },
});
