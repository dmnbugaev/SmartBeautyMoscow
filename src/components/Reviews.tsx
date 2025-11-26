import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'moscow00',
    rating: 5,
    text: 'Приятный персонал. Спасибо Даниэле за работу (ламинирование бровей). Отвечала на вопросы, рассказывала про шаги в процедуре. Результатом довольна.',
    service: 'Брови и ресницы'
  },
  {
    name: 'Константин Икомасов',
    rating: 5,
    text: 'Пришел за 15 минут до начала массажа, мастер был уже свободен и через 5 минут я уже лежал на массажном столике, поинтересовавшись что меня беспокоит мастер больше времени уделял этим местам, по времени ровно час, все понравилось, после массажа угостили зелёным чаем с жасмином. Советую к посещению.',
    service: 'Массаж'
  },
  {
    name: 'Татьяна',
    rating: 5,
    text: 'Делала у Екатерины чистку лица. Очень хорошее впечатление. Косметолог работает на совесть. Для нее важен результат, это очень ценно. В процессе мне все обьяснили, проконсультировали. В целом в салоне приятная легкая атмосфера. Приду еще )',
    service: 'Уход за кожей'
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: '#F8F8F8' }}>
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
            Отзывы наших клиентов
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
            Доверие — основа нашей работы
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-10 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: '#FAFAFA',
                border: '1px solid #E5E5E5'
              }}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#C0C0C0"
                    strokeWidth={0}
                    style={{ color: '#C0C0C0' }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p 
                className="mb-6"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#3A3A3A',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  letterSpacing: '0.01em'
                }}
              >
                "{review.text}"
              </p>

              {/* Divider */}
              <div 
                className="my-6"
                style={{ borderTop: '1px solid #E5E5E5' }}
              />

              {/* Author */}
              <div>
                <p 
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: '#2F2F2F',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    marginBottom: '0.25rem'
                  }}
                >
                  {review.name}
                </p>
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: '#7D7D7D',
                    fontSize: '0.875rem'
                  }}
                >
                  {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
