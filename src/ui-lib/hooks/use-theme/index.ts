import { useCallback, useEffect, useMemo, useState } from "react"
import { THEMES, THEME_DARK, THEME_LIGHT, THEME_LOCALSTORAGE_NAME } from "./contants";
import { Theme, UseThemeValues } from "./types";

const setThemeToLocalStorage = (theme: Theme ) => {
  window.localStorage.setItem(THEME_LOCALSTORAGE_NAME, theme)
}

const getThemeByLocalStorage = (): any => {
  window.localStorage.getItem(THEME_LOCALSTORAGE_NAME)
}

const getTheme = (): Theme => {
  const hasLocalStorage = window && window.localStorage;

  let theme = hasLocalStorage ? getThemeByLocalStorage() : ''

  if (THEMES.includes(theme)) {
    return theme as Theme
  }

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')

  theme = userMedia.matches ? THEME_LIGHT : THEME_DARK

  if (hasLocalStorage) {
    setThemeToLocalStorage(theme)
  }

  return theme
}

const nextTheme = (theme: Theme): Theme => {
  const newTheme = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT
  setThemeToLocalStorage(newTheme)

  return newTheme;
}

export const useTheme = (): UseThemeValues => {
  const [theme, setTheme] = useState<Theme>(getTheme);

  
  
  const toggle = useCallback(() => {
    
    console.log('theme', theme);
    setTheme(nextTheme(theme))
  }, [theme]);

  const isDark = useMemo(() => theme === THEME_DARK, [theme])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return { theme, isDark, toggle }
}