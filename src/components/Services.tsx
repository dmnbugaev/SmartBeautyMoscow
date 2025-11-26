import React from 'react';
import { Scissors, Droplet, Sparkles, Palette, Eye, Wind } from 'lucide-react';

const serviceCategories = [
  {
    category: 'Стрижки',
    icon: Scissors,
    items: [
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' }
    ]
  },
  {
    category: 'Окрашивание',
    icon: Palette,
    items: [
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' }
    ]
  },
  {
    category: 'Уход за волосами',
    icon: Droplet,
    items: [
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' }
    ]
  },
  {
    category: 'Косметология',
    icon: Sparkles,
    items: [
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' }
    ]
  },
  {
    category: 'Брови и ресницы',
    icon: Eye,
    items: [
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' }
    ]
  },
  {
    category: 'Укладки',
    icon: Wind,
    items: [
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' },
      { name: 'Позиция', price: 'xxx ₽' }
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#2F2F2F',
              fontWeight: 600,
              letterSpacing: '-0.01em'
            }}
          >
            Услуги и цены
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#7D7D7D',
              fontSize: '1.0625rem',
              lineHeight: 1.7
            }}
          >
            Полный спектр услуг для вашей безупречной красоты
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-8 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#F8F8F8',
                  border: '1px solid #E5E5E5'
                }}
              >
                {/* Icon & Category Title */}
                <div className="mb-6">
                  <div 
                    className="inline-flex p-3 rounded-sm mb-4"
                    style={{ 
                      backgroundColor: 'transparent',
                      border: '1px solid #C0C0C0'
                    }}
                  >
                    <Icon 
                      size={24} 
                      strokeWidth={1.5}
                      style={{ color: '#C0C0C0' }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: '#2F2F2F',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {category.category}
                  </h3>
                </div>

                {/* Service Items */}
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex justify-between items-start py-2"
                      style={{ borderBottom: itemIndex < category.items.length - 1 ? '1px solid #E5E5E5' : 'none' }}
                    >
                      <span 
                        style={{ 
                          fontFamily: "'Inter', sans-serif",
                          color: '#3A3A3A',
                          fontSize: '0.9375rem',
                          lineHeight: 1.5
                        }}
                      >
                        {item.name}
                      </span>
                      <span 
                        className="ml-3"
                        style={{ 
                          fontFamily: "'Inter', sans-serif",
                          color: '#C0C0C0',
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
