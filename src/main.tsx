import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import App from "./App.tsx";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          body: { backgroundColor: theme.palette.green.light },
        })}
      />
      <App />
    </ThemeProvider>
  </StrictMode>
);
