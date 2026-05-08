import type { SUPPORTED_APPEARANCES } from "./appearance.consts";

export type Appearance = (typeof SUPPORTED_APPEARANCES)[number];
