import { useEffect, useState } from "react";

export function useSystemAppearance() {
  const [appearance, setAppearance] = useState<"light" | "dark">(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => setAppearance(e.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return appearance;
}
