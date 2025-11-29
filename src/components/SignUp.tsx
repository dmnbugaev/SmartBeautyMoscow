import React from 'react';

export function SignUp() {
  const handleSignUpClick = () => {
    // Здесь должна быть ссылка на вашу страницу записи в dikidi
    window.open('https://dikidi.net/683755', '_blank');
  };

  return (
    <section id="signup" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#2F2F2F',
              fontWeight: 600,
              letterSpacing: '-0.01em'
            }}
          >
            Записаться на приём
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
            Начните свой путь к безупречности
          </p>
        </div>

        {/* Content Block with Image and Button */}
        <div className="p-12" style={{ backgroundColor: '#F8F8F8', border: '1px solid #E5E5E5' }}>
          <div className="flex flex-col items-center justify-center space-y-20">
            {/* Image Block */}
            <div className="flex justify-center w-full">
              <img 
                src="/1.jpg" 
                alt="Запись на приём"
                className="h-64 object-cover rounded-lg" 
                style={{ 
                  maxWidth: '450px', 
                  width: '100%',
                  paddingBottom: '25px'
                }}
              />
            </div>

            {/* Sign Up Button */}
            <div className="flex flex-col items-center w-full max-w-sm">
              <button
                onClick={handleSignUpClick}
                className="w-full px-12 py-5 transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: '#C0C0C0',
                  color: '#2F2F2F',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.1em',
                  fontWeight: 500,
                  maxWidth: '450px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2F2F2F';
                  e.currentTarget.style.color = '#FAFAFA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C0C0C0';
                  e.currentTarget.style.color = '#2F2F2F';
                }}
              >
                ЗАПИСАТЬСЯ
              </button>
              
              {/* Additional Info */}
              <p 
                className="text-center mt-4"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#7D7D7D',
                  fontSize: '0.8125rem'
                }}
              >
                Нажмите кнопку выше для перехода в систему онлайн-записи
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}