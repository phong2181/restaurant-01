import React, { useState } from 'react';
import { Clock, MapPin, Phone, Star, X, Users, Coffee } from 'lucide-react';

interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  ingredients: string[];
  detailedDescription: string;
  allergens?: string[];
}

const menuData: Dish[] = [
  {
    id: '1',
    name: 'French Onion Soup',
    description: 'Traditional French onion soup with Gruyère cheese',
    price: '120,000 VND',
    image: 'https://images.pexels.com/photos/6287388/pexels-photo-6287388.jpeg',
    category: 'Appetizers',
    ingredients: ['Yellow onions', 'Beef broth', 'Gruyère cheese', 'French bread', 'Butter', 'Thyme'],
    detailedDescription: 'A classic French soup featuring caramelized onions in rich beef broth, topped with melted Gruyère cheese and crispy French bread croutons.',
    allergens: ['Dairy', 'Gluten']
  },
  {
    id: '2',
    name: 'Ribeye Beef Steak',
    description: 'Australian Ribeye beef steak cooked medium rare with green pepper sauce',
    price: '450,000 VND',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg',
    category: 'Main Courses',
    ingredients: ['250g Australian Ribeye beef', 'Green pepper sauce', 'Mashed potatoes', 'Butter', 'Milk', 'Salt', 'Pepper', 'Herbs'],
    detailedDescription: 'Premium Australian Ribeye beef, grilled to perfection medium rare to preserve its natural sweetness, served with flavorful green pepper sauce, creamy mashed potatoes, and steamed seasonal vegetables.',
    allergens: ['Dairy']
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Fresh lettuce, Parmesan cheese, signature Caesar dressing',
    price: '150,000 VND',
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
    category: 'Appetizers',
    ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Caesar dressing', 'Croutons', 'Anchovies', 'Garlic'],
    detailedDescription: 'Crisp romaine lettuce tossed with our signature Caesar dressing, topped with aged Parmesan cheese and house-made croutons.',
    allergens: ['Dairy', 'Fish', 'Gluten']
  },
  {
    id: '4',
    name: 'Apple Tart',
    description: 'Crispy baked apple tart served with vanilla ice cream',
    price: '90,000 VND',
    image: 'https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg',
    category: 'Desserts',
    ingredients: ['Fresh apples', 'Pastry dough', 'Vanilla ice cream', 'Cinnamon', 'Sugar', 'Butter'],
    detailedDescription: 'Traditional French apple tart with delicate pastry crust, sweet cinnamon-spiced apples, and a scoop of creamy vanilla ice cream.',
    allergens: ['Dairy', 'Gluten', 'Eggs']
  },
  {
    id: '5',
    name: 'Bordeaux Red Wine',
    description: 'A glass of premium French red wine',
    price: '180,000 VND',
    image: 'https://cafefcdn.com/2018/photo-1-1515122418414.jpg',
    category: 'Beverages',
    ingredients: ['Premium French red wine'],
    detailedDescription: 'A carefully selected Bordeaux red wine with rich, complex flavors and a smooth finish.',
    allergens: ['Sulfites']
  },
  {
    id: '6',
    name: 'Coq au Vin',
    description: 'A classic Italian pizza topped with rich tomato sauce, fresh mozzarella cheese, and fragrant basil leaves.',
    price: '580,000 VND',
    image: 'https://hoangviettravel.vn/wp-content/uploads/2020/02/cac-mon-an-chinh-cua-nguoi-chau-au-05-min.jpg',
    category: 'Graven',
    ingredients: ['Handmade pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil', 'Olive oil', 'Sea salt, black pepper'],
    detailedDescription: 'Traditional French dish featuring tender chicken braised in red wine with aromatic herbs, mushrooms, and pearl onions.',
    allergens: ['Dairy']
  },
  {
    id: '7',
    name: 'Coq au Vin',
    description: 'Classic French chicken braised in red wine with mushrooms',
    price: '380,000 VND',
    image: 'https://static.wixstatic.com/media/d253bb_b0977af075e34f6386f1030ca3da2cdb~mv2.jpg/v1/fill/w_604,h_442,al_c,q_80,enc_avif,quality_auto/d253bb_b0977af075e34f6386f1030ca3da2cdb~mv2.jpg',
    category: 'Main Courses',
    ingredients: ['Chicken thighs', 'Red wine', 'Mushrooms', 'Pearl onions', 'Bacon', 'Herbs'],
    detailedDescription: 'Traditional French dish featuring tender chicken braised in red wine with aromatic herbs, mushrooms, and pearl onions.',
    allergens: ['Dairy']
  },
  {
    id: '8',
    name: 'Pizza',
    description: 'Classic French chicken braised in red wine with mushrooms',
    price: '380,000 VND',
    image: 'https://i.pinimg.com/564x/77/35/dd/7735dd49ea9f5908da97618e43a4d510.jpg',
    category: 'Main Courses',
    ingredients: ['Chicken thighs', 'Red wine', 'Mushrooms', 'Pearl onions', 'Bacon', 'Herbs'],
    detailedDescription: 'Traditional French dish featuring tender chicken braised in red wine with aromatic herbs, mushrooms, and pearl onions.',
    allergens: ['Dairy']
  },
  {
    id: '8',
    name: 'Pizza',
    description: 'Classic French chicken braised in red wine with mushrooms',
    price: '380,000 VND',
    image: 'https://storage.googleapis.com/onelife-public/blog.onelife.vn/2021/10/cach-lam-salad-rau-cu-kieu-y-mon-khai-vi-498328159658.jpg',
    category: 'Main Courses',
    ingredients: ['Chicken thighs', 'Red wine', 'Mushrooms', 'Pearl onions', 'Bacon', 'Herbs'],
    detailedDescription: 'Traditional French dish featuring tender chicken braised in red wine with aromatic herbs, mushrooms, and pearl onions.',
    allergens: ['Dairy']
  }
];

const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Beverages'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const filteredDishes = selectedCategory === 'All' 
    ? menuData 
    : menuData.filter(dish => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <h1 className="text-3xl font-serif text-gray-800">Le Petit Jardin</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h2 className="text-5xl font-serif mb-4">Welcome to Le Petit Jardin</h2>
            <p className="text-xl mb-8">Experience authentic European cuisine in the heart of Ho Chi Minh City</p>
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              View Our Menu
            </button>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-600">10:00 AM - 10:00 PM</p>
              <p className="text-gray-600">Every Day</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Europe Street</p>
              <p className="text-gray-600">District 1, Ho Chi Minh City</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Capacity</h3>
              <p className="text-gray-600">50 guests</p>
              <p className="text-gray-600">Reservation Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-8 text-gray-800">Visit Us Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the charm of European cuisine in a cozy garden atmosphere
          </p>
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Phone className="h-5 w-5 text-amber-600" />
            <span className="text-lg text-gray-700">+84 28 1234 5678</span>
          </div>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors">
            Make a Reservation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="h-6 w-6 text-amber-600" />
            <span className="text-xl font-serif">Le Petit Jardin</span>
          </div>
          <p className="text-gray-400">
            A European dining experience in the heart of Ho Chi Minh City
          </p>
          <p className="text-gray-400 mt-2">
            Dine-in • Takeaway • Reservation Available
          </p>
        </div>
      </footer>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">{selectedDish.name}</h3>
                <span className="text-amber-600 font-bold text-xl">{selectedDish.price}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedDish.detailedDescription}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Ingredients:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDish.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedDish.allergens && selectedDish.allergens.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Allergens:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.allergens.map((allergen, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                  {selectedDish.category}
                </span>
                <button className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;