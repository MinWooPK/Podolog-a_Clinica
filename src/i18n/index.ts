import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";
import de from "./locales/de.json";

const LANGS = ["es", "en", "de"];

// 🔒 Función segura para obtener idioma inicial
const getInitialLang = () => {
  if (typeof window === "undefined") return "es";

  const savedLang = localStorage.getItem("lang");

  if (savedLang && LANGS.includes(savedLang)) {
    return savedLang;
  }

  return "es";
};

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    de: { translation: de },
  },

  lng: getInitialLang(),
  fallbackLng: "es",

  interpolation: {
    escapeValue: false,
  },
});

// 🔄 Mantener localStorage siempre sincronizado
i18n.on("languageChanged", (lng) => {
  if (LANGS.includes(lng)) {
    localStorage.setItem("lang", lng);
  }
});

export default i18n;
