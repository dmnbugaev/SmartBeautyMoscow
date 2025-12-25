import React, { useEffect } from 'react';

interface YandexMetrikaProps {
  counterId: number;
}

declare global {
  interface Window {
    ym?: (counterId: number, action: string, ...args: any[]) => void;
  }
}

const YandexMetrikaCounter: React.FC<YandexMetrikaProps> = ({ counterId }) => {
  useEffect(() => {
    let isInitialized = false;

    // Функция для загрузки скрипта
    const loadScript = () => {
      if (document.querySelector('script[src*="yandex.ru/metrika"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://mc.yandex.ru/metrika/tag.js';
      script.async = true;
      script.onload = () => {
        console.log('Yandex.Metrika script loaded');
        checkConsentAndInit();
      };
      
      document.head.appendChild(script);
    };

    // Функция проверки согласия и инициализации
    const checkConsentAndInit = () => {
      const consent = localStorage.getItem('cookie-consent');
      
      if (consent === 'accepted' && window.ym && !isInitialized) {
        try {
          window.ym(counterId, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
          });
          isInitialized = true;
          console.log(`Metrika ${counterId} initialized`);
        } catch (error) {
          console.error('Metrika init error:', error);
        }
      }
    };

    // Проверяем согласие при монтировании
    checkConsentAndInit();
    
    // Загружаем скрипт (но не инициализируем без согласия)
    loadScript();

    // Слушаем изменения в localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        setTimeout(checkConsentAndInit, 100); // Небольшая задержка
      }
    };

    // Слушаем клики по кнопке принятия
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.textContent?.includes('Принять') || target.closest('button[onclick*="accept"]')) {
        setTimeout(checkConsentAndInit, 200);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('click', handleClick);

    // Noscript для счетчика
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute;left:-9999px;" alt="" /></div>`;
    document.head.appendChild(noscript);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('click', handleClick);
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, [counterId]);

  return null;
};

export default YandexMetrikaCounter;