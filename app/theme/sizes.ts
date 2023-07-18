const spacings = {
  xxxsmall: "0.1em",
  xxsmall: "0.6em",
  xmsmall: "0.8em",
  xsmall: "1.2em",
  small: "1.6em",
  xmedium: "2em",
  medium: "3em",
  large: "3.5em",
  xlarge: "4rem",
  xxlarge: "4.8em",
  sixLarge: "6.5em",
  xxxlarge: "9.6em",
} as const;

const sizes = {
  spacings,
} as const;

export { sizes };
