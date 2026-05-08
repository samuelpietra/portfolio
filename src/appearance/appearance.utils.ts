import { SUPPORTED_APPEARANCES } from "./appearance.consts";
import type { Appearance } from "./appearance.types";

export function isSupportedAppearance(value: unknown): value is Appearance {
  return typeof value === "string" && (SUPPORTED_APPEARANCES as readonly string[]).includes(value);
}
