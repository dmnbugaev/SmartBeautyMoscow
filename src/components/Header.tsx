import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Определяем, должен ли хедер быть белым
  const shouldBeWhite = isScrolled || isMenuOpen;

  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'О нас', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Записаться', href: '#signup' }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: shouldBeWhite ? 'rgba(250, 250, 250, 0.95)' : 'transparent',
        backdropFilter: shouldBeWhite ? 'blur(8px)' : 'none',
        borderBottom: shouldBeWhite ? '1px solid #E5E5E5' : '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-3xl tracking-tight transition-colors duration-300" 
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                color: shouldBeWhite ? '#2F2F2F' : '#FAFAFA'
              }}
            >
              Smart Beauty
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-300"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: shouldBeWhite ? '#6B6B6B' : '#D4D4D4',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C0C0C0'}
                onMouseLeave={(e) => e.currentTarget.style.color = shouldBeWhite ? '#6B6B6B' : '#D4D4D4'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Book Now Button - Desktop */}
          <div className="hidden md:block">
            <a 
              target="_blank"
              href="https://dikidi.net/683755"
              className="px-8 py-3 border transition-all duration-300 inline-block cursor-pointer"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: 'transparent',
                color: shouldBeWhite ? '#2F2F2F' : '#FAFAFA',
                borderColor: shouldBeWhite ? '#C0C0C0' : '#FAFAFA',
                fontSize: '0.9375rem',
                letterSpacing: '0.05em',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = shouldBeWhite ? '#C0C0C0' : '#FAFAFA';
                e.currentTarget.style.color = '#2F2F2F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = shouldBeWhite ? '#2F2F2F' : '#FAFAFA';
              }}
            >
              ЗАПИСЬ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: shouldBeWhite ? '#2F2F2F' : '#FAFAFA' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            className="md:hidden py-6 transition-colors duration-300"
            style={{ borderTop: shouldBeWhite ? '1px solid #E5E5E5' : '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 transition-colors duration-300"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: shouldBeWhite ? '#6B6B6B' : '#D4D4D4',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.02em'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                target="_blank"
                href= "https://dikidi.net/683755"
                className="px-8 py-3 border mt-4 transition-all duration-300 inline-block"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: 'transparent',
                  color: shouldBeWhite ? '#2F2F2F' : '#FAFAFA',
                  borderColor: shouldBeWhite ? '#C0C0C0' : '#FAFAFA',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.05em',
                  textDecoration: 'none' // убираем подчеркивание ссылки
                }}
              >
                ЗАПИСЬ
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}