const size = {
  desktopBreakPoint: "1024px",
  mobileBreakPoint: "767px",
};

export const device = {
  mobileRange: `(max-width: ${size.mobileBreakPoint})`,
  tabletRange: `(min-width: ${size.desktopBreakPoint}) and (max-width: ${size.mobileBreakPoint})`,
  desktopRange: `(min-width: ${size.desktopBreakPoint})`,
  allDevicesBeforeTablet: `(max-width: ${size.desktopBreakPoint})`,
};
