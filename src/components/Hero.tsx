// components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
        <div className="text-white">
          <h2 className="text-5xl font-serif mb-4">Welcome to Le Petit Jardin</h2>
          <p className="text-xl mb-8">
            Experience authentic European cuisine in the heart of Ho Chi Minh City
          </p>
          <a
            href="#menu"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            View Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}
