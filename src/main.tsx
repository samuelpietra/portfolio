import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "pietra-ui";
import "pietra-ui/styles.css";

import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
