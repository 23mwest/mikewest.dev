const THEME_KEY = "theme";
const LIGHT_THEME = "light";
const DARK_THEME = "night";
const THEME_MODES = ["system", "light", "dark"];

function getStoredMode() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  return THEME_MODES.includes(storedTheme) ? storedTheme : "system";
}

function getEffectiveMode(mode) {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return mode;
}

function applyTheme(mode) {
  const effectiveMode = getEffectiveMode(mode);
  const isDark = effectiveMode === "dark";
  document.documentElement.dataset.theme = isDark ? DARK_THEME : LIGHT_THEME;
  document.documentElement.classList.toggle("dark", isDark);

  const themeLabels = document.querySelectorAll(".theme-tab-label");
  themeLabels.forEach((label) => {
    label.classList.remove("tab-active");
    label.classList.remove("text-accent");
  });

  const themeTab = document.querySelector(
    `input[name="theme_tabs"][value="${mode}"]`,
  );
  if (themeTab instanceof HTMLInputElement) {
    themeTab.checked = true;

    const activeLabel = document.querySelector(
      `.theme-tab-label[data-theme-mode="${mode}"]`,
    );
    if (activeLabel instanceof HTMLLabelElement) {
      activeLabel.classList.add("tab-active");
      activeLabel.classList.add("text-accent");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let currentMode = getStoredMode();
  applyTheme(currentMode);

  const themeTabs = document.querySelectorAll('input[name="theme_tabs"]');
  themeTabs.forEach((tab) => {
    tab.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) {
        return;
      }

      const nextMode = target.value;
      if (!THEME_MODES.includes(nextMode)) {
        return;
      }

      currentMode = nextMode;
      localStorage.setItem(THEME_KEY, nextMode);
      applyTheme(nextMode);
    });
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (currentMode === "system") {
      applyTheme(currentMode);
    }
  });
});
