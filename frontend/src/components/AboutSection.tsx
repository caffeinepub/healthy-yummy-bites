import { Utensils, Heart, Leaf } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          
          <div className="glass-card p-8 md:p-12 rounded-3xl shadow-premium mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Healthy Yummy Bites is a modern café-style fast food spot in Adampur offering fresh burgers, wraps, pizzas, shakes, mojitos, and snacks made with quality ingredients and great taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Quality ingredients in every bite</p>
            </div>

            <div className="feature-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-gray-600">Crafted with care and passion</p>
            </div>

            <div className="feature-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Great Taste</h3>
              <p className="text-gray-600">Delicious flavors you'll love</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
