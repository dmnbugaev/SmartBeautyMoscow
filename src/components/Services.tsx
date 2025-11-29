import React from 'react';
import {
  Waves,
  Eye,
  Sparkles,
  TrendingUp,
  Brush,
  MoreHorizontal,
} from 'lucide-react';

const serviceCategories = [
  {
    category: 'Массаж',
    icon: Waves,
    items: [
      { name: 'Детский остеопат/мануальщик', price: '5 000 ₽' },
      { name: 'Мануальный терапевт/остеопат', price: '12 000 ₽' },
      { name: 'Расслабляющий массаж', price: '3 500 ₽' },
      { name: 'Массаж рук', price: '800 ₽' },
      { name: 'Массаж ног и ступней', price: '2 000 ₽' },
      { name: 'Массаж шейно-воротниковой зоны', price: '1 400 ₽' },
      { name: 'Массаж тела на выбор', price: '3 500 ₽' },
      { name: 'Классический массаж спины', price: '2 500 ₽' },
      { name: 'Stoun therapy', price: '4 000 ₽' },
      { name: 'Массаж лица', price: '2 500 ₽' }
    ]
  },
  {
    category: 'Брови и ресницы',
    icon: Eye,
    items: [
      { name: 'Архитектура бровей', price: '2 000 ₽' },
      { name: 'Эффект Кайли, Мокрый, Лучики и другие', price: '500 ₽' },
      { name: 'Счастье-спа для ресниц', price: '800 ₽' },
      { name: 'Счастье-спа для бровей', price: '1 000 ₽' },
      { name: 'Ботокс для ресниц', price: '900 ₽' },
      { name: 'Ботокс для бровей', price: '1 000 ₽' },
      { name: 'Ламинирование ресниц', price: '3 000 ₽' },
      { name: 'Снятие ресниц', price: '300 ₽' },
      { name: 'Голливудское наращивание', price: '4 400 ₽' },
      { name: 'Тройной объем (3D) , Голливуд', price: '3 600 ₽' },
      { name: 'Полуторный или двойный объем(1,5-2D)', price: '3 300 ₽' },
      { name: 'Классическое наращивание (1D)/мокрый эффект', price: '3 000 ₽' },
      { name: 'Окрашивание ресниц краской', price: '700 ₽' },
      { name: 'Ламинирование бровей', price: '2 500 ₽' },
      { name: 'Окрашивание бровей краской', price: '1 000 ₽' },
      { name: 'Коррекция бровей', price: '1 000 ₽' },
      { name: 'Снятие ресниц(чужая и без последующего наращивания)', price: '300 ₽' }
    ]
  },
  {
    category: 'Косметология',
    icon: Sparkles,
    items: [
      { name: 'Карбокситерапия Ботокс эффект от Bronzi', price: '3 000 ₽' },
      { name: 'Чистка лица комплекс', price: '12 000 ₽' },
      { name: 'Комплекс Моментальный лифтинг', price: '5 000 ₽' },
      { name: 'Комплекс Мультиэффект', price: '3 000 ₽' },
      { name: 'Комплекс для лица Летняя свежесть', price: '4 000 ₽' },
      { name: 'Комплекс для лица Королевский уход', price: '7 000 ₽' },
      { name: 'Крио/термо терапия', price: '2 300 ₽' },
      { name: 'Комбинированная чистка лица', price: '5 000 ₽' },
      { name: 'Чистка спины', price: '6 000 ₽' },
      { name: 'Парафинотерапия для ног горячая', price: '1 500 ₽' },
      { name: 'Парафинотерапия для рук горячая', price: '1 200 ₽' },
      { name: 'Карбокситерапия неинвазивная DermaTime, NSC', price: '5 600 ₽' },
      { name: 'Альгинатная маска', price: '1 800 ₽' },
      { name: 'Поверхностный пилинг на выбор', price: '2 500 ₽' },
      { name: 'Программа Anti-acne', price: '7 000 ₽' },
      { name: 'Кислородное насыщение (окситерапия)', price: '3 000 ₽' },
      { name: 'HydraFacial (гидропилинг)', price: '5 000 ₽' },
      { name: 'Антипигментная программа', price: '7 000 ₽' },
      { name: 'Антикуперозная программа', price: '6 000 ₽' },
      { name: 'Аппаратная шлифовка лица (броссаж)', price: '1 000 ₽' },
      { name: 'Хромодиодовая терапия (LED маска)', price: '2 350 ₽' },
      { name: 'BioRePeelC13', price: '5 600 ₽' },
      { name: 'PRX-T33 пилинг', price: '5 600 ₽' },
      { name: 'Безинъекционная мезотерапия', price: '4 000 ₽' },
      { name: 'Фракционная мезотерапия шеи и зоны декольте', price: '7 000 ₽' },
      { name: 'Фракционная мезотерапия лица', price: '5 950 ₽' },
      { name: 'Микротоковая терапия', price: '3 400 ₽' },
      { name: 'RF-лифтинг', price: '3 500 ₽' },
      { name: 'Ультразвуковая чистка', price: '3 300 ₽' },
      { name: 'SPA процедура для лица,шеи и зоны декольте', price: '4 500 ₽' },
      { name: 'SPA процедура для лица', price: '3 500 ₽' }
    ]
  },
  {
    category: 'Коррекция фигуры',
    icon: TrendingUp,
    items: [
      { name: 'Body перезагрузка', price: '12 000 ₽' },
      { name: 'Микротоковая терапия тела', price: '4 000 ₽' },
      { name: 'Обертывание на выбор по зонам', price: '1 200 ₽' },
      { name: 'Корректирующий массаж 30 мин', price: '1 800 ₽' },
      { name: 'Корректирующий массаж 60 мин', price: '3 500 ₽' },
      { name: 'Корректирующий массаж 45 мин', price: '2 500 ₽' },
      { name: 'Микротоковая терапия грудных мышц', price: '3 000 ₽' },
      { name: 'Прессотерапия', price: '2 500 ₽' },
      { name: 'Комплекс Кавитация (3 зоны) + RF-лифтинг + Миостимуляция', price: '9 900 ₽' },
      { name: 'Кавитация: 3 зоны', price: '5 500 ₽' },
      { name: 'Кавитация: 2 зоны', price: '4 000 ₽' },
      { name: 'Кавитация: 1 зона', price: '2 500 ₽' },
      { name: 'RF-лифтинг: 3 зоны', price: '7 500 ₽' },
      { name: 'RF-лифтинг: 2 зоны', price: '5 200 ₽' },
      { name: 'RF-лифтинг: 1 зона', price: '3 200 ₽' },
      { name: 'Миостимуляция: все тело (30 мин)', price: '2 000 ₽' },
      { name: 'Миостимуляция: две зоны (30 мин)', price: '1 650 ₽' },
      { name: 'Миостимуляция: одна зона (30 мин)', price: '1 250 ₽' },
      { name: 'Штаны для прессотерапии', price: '500 ₽' },
      { name: 'Вакуумный массаж (20 мин)', price: '2 500 ₽' },
      { name: 'Прессотерапия (30 мин)', price: '2 500 ₽' }
    ]
  },
  {
    category: 'Перманент',
    icon: Brush,
    items: [
      { name: 'Перманентный макияж Межресничка', price: '11 000 ₽' },
      { name: 'Перманентный макияж Стрелки', price: '12 000 ₽' },
      { name: 'Перманентный макияж Брови', price: '12 000 ₽' },
      { name: 'Перманентный макияж Губы', price: '11 000 ₽' }
    ]
  },
  {
    category: 'Прочие услуги',
    icon: MoreHorizontal, 
    items: [
      { name: 'Аренда кабинета', price: '500 ₽' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
