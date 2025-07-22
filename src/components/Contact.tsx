import { Phone } from "lucide-react";

export default function Contact(){
    return(
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
    )
}