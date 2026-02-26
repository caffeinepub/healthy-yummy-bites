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
            {/* Location */}
            <div className="glass-card p-8 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">Adampur, Punjab, India</p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="glass-card p-8 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">Primary</span>
                      <a
                        href="tel:+919023031429"
                        className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                      >
                        +91 90230 31429
                      </a>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Secondary</span>
                      <a
                        href="tel:+918264909201"
                        className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                      >
                        +91 82649 09201
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
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

            {/* WhatsApp + Call Buttons */}
            <div className="glass-card p-8 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Order Now</h3>
                  <div className="flex flex-col gap-2">
                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl"
                      onClick={() => window.open('https://wa.me/919023031429', '_blank')}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Order
                    </Button>
                    <div className="flex gap-2">
                      <a
                        href="tel:+919023031429"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors font-semibold text-sm"
                      >
                        <Phone className="h-4 w-4" />
                        Primary
                      </a>
                      <a
                        href="tel:+918264909201"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors font-semibold text-sm"
                      >
                        <Phone className="h-4 w-4" />
                        Secondary
                      </a>
                    </div>
                  </div>
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
                  Adampur, Punjab, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
