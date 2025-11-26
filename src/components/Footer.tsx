import React from 'react';
import { Instagram, MessageCircle, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      id="contact" 
      className="py-16 px-6 lg:px-12"
      style={{ backgroundColor: '#2F2F2F' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#FAFAFA',
                fontWeight: 500
              }}
            >
              Smart Beauty
            </h3>
            <p 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: '#7D7D7D',
                fontSize: '0.875rem',
                lineHeight: 1.6
              }}
            >
              Где точность встречается с элегантностью, а интеллект определяет красоту.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="mb-6"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: '#C0C0C0',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                fontWeight: 500
              }}
            >
              КОНТАКТЫ
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin 
                  size={18} 
                  strokeWidth={1.5}
                  style={{ color: '#7D7D7D', marginTop: '2px' }}
                />
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: '#7D7D7D',
                    fontSize: '0.875rem',
                    lineHeight: 1.6
                  }}
                >
                  Москва, ул Дубининская 11,<br />стр. 1
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone 
                  size={18} 
                  strokeWidth={1.5}
                  style={{ color: '#7D7D7D' }}
                />
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: '#7D7D7D',
                    fontSize: '0.875rem'
                  }}
                >
                  +7 (968) 441-77-00
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail 
                  size={18} 
                  strokeWidth={1.5}
                  style={{ color: '#7D7D7D' }}
                />
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: '#7D7D7D',
                    fontSize: '0.875rem'
                  }}
                >
                  hello@smartbeauty.ru
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 
              className="mb-6"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: '#C0C0C0',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                fontWeight: 500
              }}
            >
              ЧАСЫ РАБОТЫ
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock 
                  size={18} 
                  strokeWidth={1.5}
                  style={{ color: '#7D7D7D', marginTop: '2px' }}
                />
                <div>
                  <p 
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      color: '#7D7D7D',
                      fontSize: '0.875rem',
                      lineHeight: 1.6
                    }}
                  >
                    Пн-Вс: 11:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 
              className="mb-6"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: '#C0C0C0',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                fontWeight: 500
              }}
            >
              МЫ В СОЦСЕТЯХ
            </h4>
            <div className="flex space-x-5">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: MessageCircle, label: 'WhatsApp' },
                { icon: Send, label: 'Telegram' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: '#7D7D7D' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#C0C0C0'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#7D7D7D'}
                    aria-label={social.label}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 mt-8"
          style={{ borderTop: '1px solid rgba(125, 125, 125, 0.2)' }}
        >
          <p 
            className="text-center"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#7D7D7D',
              fontSize: '0.8125rem'
            }}
          >
            © 2025 Smart Beauty. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}