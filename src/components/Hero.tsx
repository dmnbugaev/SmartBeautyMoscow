import React from 'react';
import { ImageWithFallback } from './ffff/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 multilayer-gradient" />
        </div>
        <style>{`
          .multilayer-gradient {
            background: 
              radial-gradient(circle at 20% 80%, rgba(80, 80, 80, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(30, 30, 30, 0.4) 0%, transparent 80%),
              linear-gradient(180deg, rgba(47, 47, 47, 0.8) 0%, rgba(47, 47, 47, 0.3) 100%);
            animation: pulseLayers 4s ease-in-out infinite;
          }

          @keyframes pulseLayers {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl tracking-tight"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#FAFAFA',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.01em'
            }}
          >
            Smart Beauty
          </h1>

          {/* Sub-headline */}
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#D4D4D4',
              fontWeight: 300,
              letterSpacing: '0.01em',
              lineHeight: 1.6
            }}
          >
            Добро пожаловать в Smart Beauty — где передовые технологии встречаются с королевским уходом.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a 
              href="/services#services"
              className="px-12 py-4 transition-all duration-300 inline-block"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: '#C0C0C0',
                color: '#2F2F2F',
                fontSize: '0.9375rem',
                letterSpacing: '0.1em',
                fontWeight: 500,
                border: '1px solid #C0C0C0',
                textDecoration: 'none', // убираем подчеркивание ссылки
                cursor: 'pointer'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FAFAFA';
                e.currentTarget.style.borderColor = '#FAFAFA';
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FAFAFA';
                e.currentTarget.style.color = '#2F2F2F';
                e.currentTarget.style.borderColor = '#C0C0C0';
              }}
            >
              НАШИ УСЛУГИ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}