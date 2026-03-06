import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types/language';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLangState] = useState<Language>(() => {
        // Check localStorage first
        const savedLang = localStorage.getItem('adminLang') as Language;
        return (savedLang === 'en' || savedLang === 'zh') ? savedLang : 'en';
    });

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('adminLang', newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
