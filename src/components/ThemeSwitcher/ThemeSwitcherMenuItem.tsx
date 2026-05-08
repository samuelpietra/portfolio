import { DropdownMenu, Flex } from "pietra-ui";

import { useThemeSwitcher } from "./useThemeSwitcher";

export function ThemeSwitcherMenuItem() {
  const { Icon, label, toggle } = useThemeSwitcher();

  return (
    <DropdownMenu.Item onSelect={toggle}>
      <Flex align="center" gap="2">
        <Icon size={14} />
        {label}
      </Flex>
    </DropdownMenu.Item>
  );
}
