import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import {locales} from './locales';

RNLocalize.addEventListener('change', () => {
  const language = RNLocalize.getLocales()[0].languageCode;
  i18n.changeLanguage(language);
  console.log(`>> language has been changed to ${language}`);
});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: locales,
    fallbackLng: 'en',
    lng: RNLocalize.getLocales()[0].languageCode,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
