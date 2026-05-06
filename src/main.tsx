import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "pietra-ui";
import "pietra-ui/styles.css";

import { useSystemAppearance } from "@/hooks";
import { LocaleProvider } from "@/i18n";

import App from "./App.tsx";
import "./index.css";

function Root() {
  const appearance = useSystemAppearance();

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
    <Root />
  </StrictMode>,
);
