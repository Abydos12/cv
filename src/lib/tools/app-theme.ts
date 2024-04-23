import { writable } from "svelte/store";
import { type CarbonIcon, Light, Moon, Screen } from "carbon-icons-svelte";

type Theme = "light" | "dark" | "system";

interface ThemeCategory {
  name: Theme;
  label: string;
  symbol: string;
  icon: typeof CarbonIcon;
}

const STORAGE_KEY = "theme";

export const themes: ThemeCategory[] = [
  { name: "light", label: "Light", symbol: "🌕", icon: Light },
  { name: "dark", label: "Dark", symbol: "🌑", icon: Moon },
  { name: "system", label: "System", symbol: " 🌓", icon: Screen },
];

export const theme = writable<Theme>(getDefaultMode());

function getDefaultMode(): Theme {
  if (!(STORAGE_KEY in localStorage)) {
    return "system";
  } else {
    return localStorage.getItem(STORAGE_KEY) as Theme;
  }
}

export function applyTheme(_theme: Theme) {
  theme.set(_theme);
  switch (_theme) {
    case "system":
      return localStorage.removeItem(STORAGE_KEY);
    case "light":
    case "dark":
      return localStorage.setItem(STORAGE_KEY, _theme);
  }
}

theme.subscribe((_theme) => {
  if (
    _theme === "dark" ||
    (_theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
