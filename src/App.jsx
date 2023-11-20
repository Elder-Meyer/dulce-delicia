import React from "react";
import { Router } from "./routes/Router";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./styles/ThemeMui";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
