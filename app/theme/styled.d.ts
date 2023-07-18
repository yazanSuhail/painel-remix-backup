import "styled-components";

import themes from ".";

type Theme = typeof themes;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}