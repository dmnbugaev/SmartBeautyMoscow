import React from 'react';
import { ImageWithFallback } from './ffff/ImageWithFallback';
import { Award, Zap, Crown } from 'lucide-react';

const principles = [
  {
    icon: Award,
    title: 'Превосходство',
    description: 'Каждая процедура выполнена по высочайшим стандартам'
  },
  {
    icon: Zap,
    title: 'Инновации',
    description: 'Передовые технологии в сочетании с вечными техниками красоты'
  },
  {
    icon: Crown,
    title: 'Роскошь',
    description: 'Королевский опыт, созданный специально для вас'
  }
];

export function Philosophy() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="./3.jpg"
                alt="Smart Beauty Salon Interior"
                className="w-full h-full object-cover grayscale"
              />
              {/* Subtle border overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ border: '1px solid rgba(192, 192, 192, 0.3)' }}
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-10">
            {/* Section Title */}
            <div>
              <h2 
                className="text-4xl md:text-5xl mb-6"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#2F2F2F',
                  fontWeight: 600,
                  letterSpacing: '-0.01em'
                }}
              >
                О нас
              </h2>
              <p 
                className="mb-8"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#7D7D7D',
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  letterSpacing: '0.01em'
                }}
              >
                В Smart Beauty мы верим, что истинная элегантность заключается в идеальном балансе искусства и точности. Наш подход сочетает изысканность традиционных практик красоты с интеллектуальными современными методами.
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#7D7D7D',
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  letterSpacing: '0.01em'
                }}
              >
                Каждая процедура — это тщательно продуманный опыт, призванный сделать вас не просто красивой, но и уверенной в себе. Мы не следуем трендам — мы устанавливаем стандарты.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-8 pt-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div key={index} className="flex items-start space-x-5">
                    <div 
                      className="flex-shrink-0 p-3 rounded-sm"
                      style={{ 
                        backgroundColor: 'transparent',
                        border: '1px solid #C0C0C0'
                      }}
                    >
                      <Icon 
                        size={24} 
                        strokeWidth={1.5}
                        style={{ color: '#C0C0C0' }}
                      />
                    </div>
                    <div>
                      <h3 
                        className="mb-2"
                        style={{ 
                          fontFamily: "'Playfair Display', serif",
                          color: '#2F2F2F',
                          fontSize: '1.25rem',
                          fontWeight: 500
                        }}
                      >
                        {principle.title}
                      </h3>
                      <p 
                        style={{ 
                          fontFamily: "'Inter', sans-serif",
                          color: '#7D7D7D',
                          fontSize: '0.9375rem',
                          lineHeight: 1.6
                        }}
                      >
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}