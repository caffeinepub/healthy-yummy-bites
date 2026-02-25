import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

export default function OrderCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hungry? Order Now!
          </h2>
          <p className="text-xl md:text-2xl text-orange-100 mb-12">
            Get your favorite food delivered fresh and fast
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-cream-50 text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:scale-110 font-bold group"
              onClick={() => window.open('https://wa.me/919023031429', '_blank')}
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Order on WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-10 py-7 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 font-bold"
              onClick={() => window.open('tel:+919023031429')}
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
