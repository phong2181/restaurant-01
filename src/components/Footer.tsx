import { Coffee } from "lucide-react";


export default function Footer(){
    return(
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
    )
}