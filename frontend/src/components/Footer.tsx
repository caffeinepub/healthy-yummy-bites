import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'healthy-yummy-bites'
  );

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">Healthy Yummy Bites</h3>
            <p className="text-orange-400 text-lg font-medium">
              Fresh Taste • Great Value
            </p>
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
