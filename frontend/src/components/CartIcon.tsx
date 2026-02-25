import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartIconProps {
  onClick: () => void;
}

export default function CartIcon({ onClick }: CartIconProps) {
  const { totalItems } = useCart();

  return (
    <button
      onClick={onClick}
      aria-label={`Shopping cart, ${totalItems} items`}
      className="fixed top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-premium-lg border border-orange-100 hover:scale-110 active:scale-95 transition-all duration-200"
      style={{ minWidth: 48, minHeight: 48 }}
    >
      <ShoppingCart className="w-6 h-6 text-orange-500" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center leading-none shadow-md">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
}
