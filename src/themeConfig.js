// src/themeConfig.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Peyda-Reg",
    allVariants: { color: "#1a1a1a" },
  },
  palette: {
    mode: "light",
    primary: { main: "#d32f2f" },
    secondary: { main: "#f5f5f5" },
    background: { default: "#ffffff", paper: "#f5f5f5" },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: "#ffffff", color: "#d32f2f" },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#8B0000", // Dark red color for links
          "&:hover": {
            color: "#d32f2f", // Brighter red on hover
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Peyda-Reg",
    allVariants: { color: "#f5f5f5" },
  },
  palette: {
    mode: "dark",
    primary: { main: "#ff2d2d" },
    secondary: { main: "#1a1a1a" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: "#1a1a1a", color: "#ff2d2d" },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#CC0000", // Dark red color for links
          "&:hover": {
            color: "#ff2d2d", // Brighter red on hover
          },
        },
      },
    },
  },
});
