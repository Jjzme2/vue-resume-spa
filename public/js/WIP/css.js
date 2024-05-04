// ? 7e5e9d14-7c98-4ade-b175-9edb61b122b0

const Themes = {
  themes: {
    dark: {
      "--primary-background-color": "#333",
      "--primary-panel-color": "#444",
      "--primary-text-color": "white",
    },
    light: {
      "--primary-background-color": "white",
      "--primary-panel-color": "#f5f5f5",
      "--primary-text-color": "black",
    },
  },

  setTheme(themeName) {
    const theme = this.themes[themeName] || this.themes.light;
    Object.entries(theme).forEach(([key, value]) => {
      document.body.style[key] = value;
    });
  },
};

const Main = {
  SetCSSPropertyByElement: (element, property, value) => {
    element.style.setProperty(property, value);
  },
};

export default {
  Main,
  Themes,
};
