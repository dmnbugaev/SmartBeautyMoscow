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
        backgroundColor: isScrolled ? 'rgba(250, 250, 250, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        borderBottom: isScrolled ? '1px solid #E5E5E5' : '1px solid rgba(255, 255, 255, 0.1)'
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
                color: isScrolled ? '#2F2F2F' : '#FAFAFA'
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
                  color: isScrolled ? '#6B6B6B' : '#D4D4D4',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C0C0C0'}
                onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#6B6B6B' : '#D4D4D4'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Book Now Button - Desktop */}
          <div className="hidden md:block">
            <button 
              className="px-8 py-3 border transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: 'transparent',
                color: isScrolled ? '#2F2F2F' : '#FAFAFA',
                borderColor: isScrolled ? '#C0C0C0' : '#FAFAFA',
                fontSize: '0.9375rem',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? '#C0C0C0' : '#FAFAFA';
                e.currentTarget.style.color = '#2F2F2F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = isScrolled ? '#2F2F2F' : '#FAFAFA';
              }}
            >
              ЗАПИСЬ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: isScrolled ? '#2F2F2F' : '#FAFAFA' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            className="md:hidden py-6 transition-colors duration-300"
            style={{ borderTop: isScrolled ? '1px solid #E5E5E5' : '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 transition-colors duration-300"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: isScrolled ? '#6B6B6B' : '#D4D4D4',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.02em'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="px-8 py-3 border mt-4 transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: 'transparent',
                  color: isScrolled ? '#2F2F2F' : '#FAFAFA',
                  borderColor: isScrolled ? '#C0C0C0' : '#FAFAFA',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.05em'
                }}
              >
                ЗАПИСЬ
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}