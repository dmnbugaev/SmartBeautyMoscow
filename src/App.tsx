import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { SignUp } from './components/SignUp';
import { Philosophy } from './components/Philosophy';
import { Footer } from './components/Footer';
import CookieConsent from './components/CookieConsent';
import YandexMetrikaCounter from './components/YandexMetrikaCounter';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Reviews />
        <SignUp />
        
      </main>
      <Footer />
      

      <CookieConsent />
      <YandexMetrikaCounter counterId={105876531} />

    </div>
  );
}
