import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from "react";

import { useSystemAppearance } from "@/hooks";

import { STORAGE_KEY } from "./appearance.consts";
import type { Appearance } from "./appearance.types";
import { isSupportedAppearance } from "./appearance.utils";

interface AppearanceContextValue {
  appearance: Appearance;
  setAppearance: (appearance: Appearance) => void;
}

const AppearanceContext = createContext<AppearanceContextValue | null>(null);

export function AppearanceProvider({ children }: { children: ReactNode }) {
  const system = useSystemAppearance();
  const [explicit, setExplicit] = useState<Appearance | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isSupportedAppearance(stored) ? stored : null;
  });

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) {
        return;
      }

      if (event.newValue === null) {
        setExplicit(null);
        return;
      }

      if (isSupportedAppearance(event.newValue)) {
        setExplicit(event.newValue);
      }
    };

    window.addEventListener("storage", onStorage);

    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const appearance = explicit ?? system;

  const setAppearance = useCallback((next: Appearance) => {
    setExplicit(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <AppearanceContext.Provider value={{ appearance, setAppearance }}>
      {children}
    </AppearanceContext.Provider>
  );
}

export function useAppearance() {
  const context = useContext(AppearanceContext);

  if (!context) {
    throw new Error("useAppearance must be used within AppearanceProvider");
  }

  return context;
}
