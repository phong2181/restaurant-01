{/* Header */}
import { Coffee } from 'lucide-react';
import styles from '../css/index.module.css';

export default function Header() {
  return (
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
  )
}