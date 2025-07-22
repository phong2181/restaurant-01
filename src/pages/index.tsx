// pages/index.tsx
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DishModal from '../components/DishModal';
import { Dish, menuData } from '../data/menuData';

export default function HomePage() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <Hero />
      <About />
      <Menu menuData={menuData} setSelectedDish={setSelectedDish} />
      <Contact />
      <Footer />

      {selectedDish && (
        <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </div>
  );
}
