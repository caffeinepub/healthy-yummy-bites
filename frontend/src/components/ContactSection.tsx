import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600">
            Come and enjoy our delicious food
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">Apampur, Punjab</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:+919023031429"
                    className="text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    +91 90230 31429
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                  <p className="text-gray-700">Open daily</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <Button
                    variant="link"
                    className="text-gray-700 hover:text-orange-600 p-0 h-auto"
                    onClick={() => window.open('https://wa.me/919023031429', '_blank')}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="glass-card rounded-3xl overflow-hidden shadow-premium">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-cream-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-700 text-lg font-medium">
                  Google Maps Location
                </p>
                <p className="text-gray-500 mt-2">
                  Apampur, Punjab, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
