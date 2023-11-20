import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#E05297',
        light: '#e785b4',
        dark: '#c70064',
        contrastText: '#E0E2E5', //textos de nav
      },
      text: { //color de texto simple
        primary: '#78716c',
        secondary: '#78716c',
        disabled: '#78716c',
      },
      divider: '#FAD9E6',
      background: {
        paper: '#ffffff',
        default: '#FCEEF5',
      },
    },
  });
