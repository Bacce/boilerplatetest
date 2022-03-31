import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langEnGb from './locales/en_GB.json';
import langEsEs from './locales/es_ES.json';

export enum languagesEnum {
  enGB = "enGB",
  esES = "esES",
}

const resources = {
  'enGB': {
    translation: langEnGb
  },
  'esES': {
    translation: langEsEs
  },
};

i18n.use(initReactI18next)
  .init({
    resources,
    lng: 'enGB',
    debug: true
  }, (err, t) => {
    if (err) return

    try { // Just in case localstorage is disabled
        const storedLang = localStorage.getItem('language');
        if (storedLang) i18n.changeLanguage(storedLang);

        i18n.on('languageChanged', (lng:string) => {
            localStorage.setItem('language', lng);
        });
    }
    catch(e){}
  });
  
export default i18n;