import { Heart, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'healthy-yummy-bites'
  );

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">Healthy Yummy Bites</h3>
            <p className="text-orange-400 text-lg font-medium">
              Fresh Taste • Great Value
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Adampur, Punjab, India
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919023031429"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 transition-colors px-4 py-2 rounded-full text-white font-semibold text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Order
            </a>

            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:+919023031429"
                className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <span>
                  <span className="text-orange-400 font-semibold text-xs mr-1">Primary:</span>
                  +91 90230 31429
                </span>
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a
                href="tel:+918264909201"
                className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <span>
                  <span className="text-gray-400 font-semibold text-xs mr-1">Secondary:</span>
                  +91 82649 09201
                </span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 mb-4">
              © {currentYear} Healthy Yummy Bites. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              Built with{' '}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
