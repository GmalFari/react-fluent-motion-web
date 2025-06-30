
import { motion } from 'framer-motion';
import { useSearchParams } from '@react-router/react';
import { i18n } from '@lingui/core';
import IconGlobe from '~icons/lucide/globe';

export default function LanguageSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentLocale = searchParams.get('locale') || 'en';

  const handleLanguageChange = (locale: string) => {
    setSearchParams({ locale });
    i18n.activate(locale);
  };

  return (
    <div className="flex items-center space-x-2">
      <IconGlobe className="w-5 h-5 text-gray-600" />
      <div className="flex bg-gray-100 rounded-full p-1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLocale === 'en'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLanguageChange('ar')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLocale === 'ar'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          العربية
        </motion.button>
      </div>
    </div>
  );
}
