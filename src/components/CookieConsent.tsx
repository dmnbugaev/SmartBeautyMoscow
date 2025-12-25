import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('CookieConsent: useEffect запущен');
    
    const consent = localStorage.getItem('cookie-consent');
    console.log('CookieConsent: localStorage cookie-consent =', consent);
    
    if (!consent) {
      console.log('CookieConsent: показываем через 500ms');
      setTimeout(() => {
        console.log('CookieConsent: setIsVisible(true)');
        setIsVisible(true);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    console.log('CookieConsent: принято');
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    console.log('CookieConsent: отклонено');
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  console.log('CookieConsent: render, isVisible =', isVisible);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-red-500 p-4 text-white">
      <div className="flex items-center gap-2 mb-2">
        <Cookie className="w-5 h-5" />
        <span className="font-bold">Тест: Cookie окно</span>
      </div>
      <p className="text-sm mb-3">Мы используем cookies для улучшения сайта</p>
      <div className="flex gap-2">
        <button
          onClick={handleDecline}
          className="px-3 py-1 bg-white text-red-500 hover:bg-gray-100"
        >
          Отклонить
        </button>
        <button
          onClick={handleAccept}
          className="px-3 py-1 bg-black text-white hover:bg-gray-800"
        >
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;