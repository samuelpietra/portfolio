import { IconButton } from "pietra-ui";

import { useThemeSwitcher } from "./useThemeSwitcher";

export function ThemeSwitcher() {
  const { Icon, actionLabel, toggle } = useThemeSwitcher();

  return (
    <IconButton aria-label={actionLabel} color="gray" onClick={toggle} variant="ghost">
      <Icon size={20} />
    </IconButton>
  );
}
