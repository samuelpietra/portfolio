import { useCallback } from "react";
import { Moon, Sun } from "lucide-react";

import { useAppearance } from "@/appearance";
import { useIntl } from "@/i18n";

export function useThemeSwitcher() {
  const { appearance, setAppearance } = useAppearance();
  const intl = useIntl();

  const next = appearance === "dark" ? "light" : "dark";
  const Icon = appearance === "dark" ? Sun : Moon;
  const label = intl.formatMessage({ id: `themeSwitcher.${next}` });
  const actionLabel = intl.formatMessage({
    id: next === "dark" ? "themeSwitcher.toDark" : "themeSwitcher.toLight",
  });

  const toggle = useCallback(() => setAppearance(next), [next, setAppearance]);

  return { Icon, label, actionLabel, toggle };
}
