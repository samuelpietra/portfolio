import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "pietra-ui";
import "pietra-ui/styles.css";

import { AppearanceProvider, useAppearance } from "@/appearance";
import { LocaleProvider } from "@/i18n";

import App from "./App.tsx";
import "./index.css";
import "./styles/section-frame.css";

function ThemedApp() {
  const { appearance } = useAppearance();

  return (
    <ThemeProvider appearance={appearance}>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <AppearanceProvider>
      <ThemedApp />
    </AppearanceProvider>
  </StrictMode>,
);
