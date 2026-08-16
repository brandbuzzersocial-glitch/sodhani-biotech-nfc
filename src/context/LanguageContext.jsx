import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const WORLD_LANGUAGES = [
  { code: 'en', name: 'English', flag: 'https://naturaldyes.io/images/english-language.png' },
  { code: 'tr', name: 'Turkish', flag: 'https://naturaldyes.io/images/turkish-language.png' },
  { code: 'de', name: 'German', flag: 'https://naturaldyes.io/images/german-language.png' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ar', name: 'Arabic', flag: '🇦🇪' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' }
];

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Inject Google Translate script dynamically for any-language translation support
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,tr,de,es,fr,it,pt,ar,hi,zh-CN,ja,ko,ru,nl,pl,vi,th,id,cs,el,hu,ro,sv,da,fi,no',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            },
            'google_translate_element'
          );
        }
      };
    };

    addGoogleTranslateScript();
  }, []);

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);

    // If selecting via Google Translate cookie/select element
    const googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event('change'));
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, languages: WORLD_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
