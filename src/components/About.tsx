import { Clock, MapPin, Users } from "lucide-react";

export default function About(){
    return(
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
    )
}