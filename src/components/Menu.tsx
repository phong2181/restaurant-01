// components/Menu.tsx
import { Dish, categories } from '../data/menuData';
import { useState } from 'react';

interface MenuProps {
  menuData: Dish[];
  setSelectedDish: (dish: Dish) => void;
}

export default function Menu({ menuData, setSelectedDish }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDishes = selectedCategory === 'All'
    ? menuData
    : menuData.filter(dish => dish.category === selectedCategory);

  return (
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">Our Menu</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map(dish => (
              <div
                key={dish.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedDish(dish)}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
                    <span className="text-amber-600 font-bold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex items-center">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      {dish.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
