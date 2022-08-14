import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import { portuguese } from './translations/portuguese';
import { english } from './translations/english';

const resources = {
  pt: {
    translation: portuguese,
  },
  en: {
    translation: english,
  }
};

i18n.use(initReactI18next).use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false
    },
    fallbackLng: ["pt-br", "en-US"]
});

const changeLang = (lang) => {
    i18n.changeLanguage(lang);
}

export default i18n;
export { changeLang };