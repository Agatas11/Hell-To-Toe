const themeToggle = document.querySelector(".theme-toggle");
const themeImages = document.querySelectorAll("[data-light-src][data-dark-src]");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  themeImages.forEach((image) => {
    image.src = image.dataset[isDark ? "darkSrc" : "lightSrc"];
  });
}

applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});