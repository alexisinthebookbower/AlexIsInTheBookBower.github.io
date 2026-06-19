const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-toggle__icon");
const themeText = themeToggle.querySelector(".theme-toggle__text");
const savedTheme = localStorage.getItem("theme");

function setTheme(theme) {
  const isLight = theme === "light";

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  themeIcon.textContent = isLight ? "☾" : "☀";
  themeText.textContent = isLight ? "Dark mode" : "Light mode";
  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${isLight ? "dark" : "light"} mode`,
  );
  themeToggle.setAttribute("aria-pressed", String(isLight));
}

setTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  setTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});
