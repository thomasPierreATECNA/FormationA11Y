import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: "var(--primary-500)",
      secondary: "var(--secondary-500)",
      danger: "var(--red-500)",
      info: "var(--blue-500)",
      warning: "var(--orange-500)",
      success: "var(--green-500)",
      lighter: "var(--text-lighter)",
      light: "var(--text-light)",
      dark: "var(--text-dark)",
      darker: "var(--text-darker)",
      default: "var(--text)",
    },
  },
});
