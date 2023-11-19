import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      common: {
        black: 'red', //textos del tooltip
        white: 'red',
      },
      primary: {
        main: '#E05297',
        light: '#e785b4',
        dark: '#c70064',
        contrastText: '#E0E2E5', //textos de nav
      },
      secondary:{
        main: 'green',
        light: 'green',
        dark: 'green',
        contrastText: 'green', 
      },
      grey:{
        50: '#0000ff', // fondo del tooltip
        100: '#0000ff',
        200: '#0000ff',
        300: '#0000ff',
        400: '#0000ff',
        500: '#0000ff',
        600: '#0000ff',
        700: '#0000ff',
        800: '#0000ff',
        900: '#0000ff',
        A100: '#0000ff',
        A200: '#0000ff',
        A400: '#0000ff',
        A700: '#0000ff',
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
  
export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      
    },
  });
