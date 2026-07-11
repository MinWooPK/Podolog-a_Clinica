import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      stack: string;
      medium: string;
    };
    colors: {
      principal: Record<string, string>;
      extra: Record<string, string>;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xg: string;
    };
  }
}
