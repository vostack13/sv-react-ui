import { THEME_DARK, THEME_LIGHT } from "./contants";

export type Theme = typeof THEME_DARK | typeof THEME_LIGHT

export type UseThemeValues = {
  theme: Theme;
  isDark: boolean;
  toggle: () => void;
}