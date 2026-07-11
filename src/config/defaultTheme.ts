import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  fonts: {
    stack: "OatmealPro-Regular",
    medium: "OatmealPro-Medium",
  },
  colors: {
    principal: {
      first: "#F3AB30",
      secondary: "#18595B",
      terciary: "#49DDD9",
      fourthy: "#CB7301",
      fifthy: "#3CBBBB",
      bold: "#ff9900",
      green: "#35ac19",
      orion: "#140F33",
      vanth: "#646174",
      moon: "#B7B7B7",
      ceres: "#E6E6E6",
      eris: "#F2F2F2",
      sirius: "#FCFCFC",
      abell: "#0F0F0F",
      air: "#F8F8F8",
      pure: "#FFFFFF",
      grey: "#777777",
      black: "#000000",
    },
    extra: {
      whatsapp: "#1EBEA5",
      phone: "#6889FF",
      mail: "#C0C0C0",
      earth: "#426DD8",
      crab: "#857BF9",
      volans: "#FF97D5",
      sword: "#FF7576",
      omega: "#FFBE5C",
      cygnus: "#121F3D",
      corvus: "#262255",
      canes: "#5C2A48",
      antares: "#4D2323",
      mars: "#716661",
      success: "#17B12A",
      sirius: "#FCFCFC",
    },
  },
  breakpoints: {
    xs: "320px",
    sm: "576px",
    md: "767px",
    lg: "991px",
    xl: "1199px",
    xxl: "1399px",
    xg: "1499px",
  },
};

export default defaultTheme;
