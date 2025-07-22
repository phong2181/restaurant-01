import { Dish } from "../data/menuData";
import { X } from "lucide-react";

interface DishModalProps {
  dish: Dish;
  onClose: () => void;
}

export default function DishModal({ dish, onClose }: DishModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">{dish.name}</h3>
            <span className="text-amber-600 font-bold text-xl">{dish.price}</span>
          </div>

          <p className="text-gray-600 mb-6">{dish.detailedDescription}</p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Ingredients:</h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {dish.allergens && dish.allergens.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Allergens:</h4>
              <div className="flex flex-wrap gap-2">
                {dish.allergens.map((allergen, index) => (
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
              {dish.category}
            </span>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
