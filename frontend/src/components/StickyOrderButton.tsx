import { MessageCircle, Phone } from 'lucide-react';

export default function StickyOrderButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex items-stretch shadow-2xl">
        {/* Call Primary */}
        <a
          href="tel:+919023031429"
          className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 transition-colors text-sm"
          aria-label="Call primary number"
        >
          <Phone className="h-5 w-5" />
          <span>Call</span>
        </a>

        {/* WhatsApp Order - center, larger */}
        <button
          className="flex-[2] flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 transition-colors text-base"
          onClick={() => window.open('https://wa.me/919023031429', '_blank')}
          aria-label="Order on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          Order on WhatsApp
        </button>

        {/* Call Secondary */}
        <a
          href="tel:+918264909201"
          className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 transition-colors text-sm"
          aria-label="Call secondary number"
        >
          <Phone className="h-5 w-5" />
          <span>Call 2</span>
        </a>
      </div>
    </div>
  );
}
