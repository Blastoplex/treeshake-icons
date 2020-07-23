import { style } from "treat";
export const link = style({
  backgroundColor: "blue"
});

export const button = style({
  backgroundColor: "red",
  selectors: {
    [`${link} &`]: {
      backgroundColor: "aqua"
    }
  }
});
