import React, { useState } from 'react';
import { Calendar, Clock, User, Phone } from 'lucide-react';

export function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const services = [
    'Умный уход за кожей',
    'Точные стрижки',
    'Королевские ресницы и брови',
    'Окрашивание премиум-класса'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    // Here you would typically send the data to your backend
    alert('Спасибо за запись! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-12" style={{ backgroundColor: '#F8F8F8', border: '1px solid #E5E5E5' }}>
          <div className="space-y-8">
            {/* Name */}
            <div>
              <label 
                htmlFor="name"
                className="flex items-center space-x-2 mb-3"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#2F2F2F',
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  fontWeight: 500
                }}
              >
                <User size={16} style={{ color: '#C0C0C0' }} />
                <span>ИМЯ</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: '#FAFAFA',
                  border: '1px solid #E5E5E5',
                  color: '#2F2F2F',
                  fontSize: '0.9375rem'
                }}
                placeholder="Ваше имя"
              />
            </div>

            {/* Phone */}
            <div>
              <label 
                htmlFor="phone"
                className="flex items-center space-x-2 mb-3"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#2F2F2F',
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  fontWeight: 500
                }}
              >
                <Phone size={16} style={{ color: '#C0C0C0' }} />
                <span>ТЕЛЕФОН</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: '#FAFAFA',
                  border: '1px solid #E5E5E5',
                  color: '#2F2F2F',
                  fontSize: '0.9375rem'
                }}
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            {/* Service */}
            <div>
              <label 
                htmlFor="service"
                className="flex items-center space-x-2 mb-3"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#2F2F2F',
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  fontWeight: 500
                }}
              >
                <span>УСЛУГА</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: '#FAFAFA',
                  border: '1px solid #E5E5E5',
                  color: '#2F2F2F',
                  fontSize: '0.9375rem'
                }}
              >
                <option value="">Выберите услугу</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label 
                  htmlFor="date"
                  className="flex items-center space-x-2 mb-3"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: '#2F2F2F',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    fontWeight: 500
                  }}
                >
                  <Calendar size={16} style={{ color: '#C0C0C0' }} />
                  <span>ДАТА</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 transition-all duration-300 focus:outline-none"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#FAFAFA',
                    border: '1px solid #E5E5E5',
                    color: '#2F2F2F',
                    fontSize: '0.9375rem'
                  }}
                />
              </div>

              {/* Time */}
              <div>
                <label 
                  htmlFor="time"
                  className="flex items-center space-x-2 mb-3"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: '#2F2F2F',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    fontWeight: 500
                  }}
                >
                  <Clock size={16} style={{ color: '#C0C0C0' }} />
                  <span>ВРЕМЯ</span>
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 transition-all duration-300 focus:outline-none"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#FAFAFA',
                    border: '1px solid #E5E5E5',
                    color: '#2F2F2F',
                    fontSize: '0.9375rem'
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-12 py-5 transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: '#C0C0C0',
                  color: '#2F2F2F',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.1em',
                  fontWeight: 500,
                  border: '1px solid #C0C0C0'
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
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
