"use client";

import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(52, 71, 103, 1)",
    },
    secondary: {
      main: "rgba(70, 41, 18, 1)",
    },
    error: {
      main: "rgba(220, 27, 36, 1)",
    },
    warning: {
      main: "rgba(255, 161, 1, 1)",
    },
    background: {
      default: "rgba(247, 248, 250, 1)",
    },
    text: {
      primary: "rgba(17, 20, 26, 1)",
      secondary: "rgba(127, 143, 164, 1)",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h6: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.body2,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body2,
        }),
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};  

export default ThemeProvider;
