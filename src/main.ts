import "./style.css";

type Theme = "light" | "dark" | "system";

type State = {
  theme: Theme;
};

const ready = (fn: () => void) => {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

const main = () => {
  const state: State = {
    theme: "light",
  };
  console.log("Welcome to blog-css package!");

  const themeButton = document.getElementById("themeButton");

  themeButton?.addEventListener("click", (e) => {
    e.preventDefault();

    if (state.theme === "light") {
      state.theme = "dark";
    } else if (state.theme === "dark") {
      state.theme = "system";
    } else {
      state.theme = "light";
    }

    console.log({ currentTheme: state.theme });

    document.querySelector("html")?.setAttribute("data-theme", state.theme);
  });
};

ready(main);
