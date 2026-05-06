import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "pietra-ui";
import "pietra-ui/styles.css";

import { useSystemAppearance } from "@/hooks";

import App from "./App.tsx";
import "./index.css";

function Root() {
  const appearance = useSystemAppearance();

  return (
    <ThemeProvider appearance={appearance}>
      <App />
    </ThemeProvider>
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
