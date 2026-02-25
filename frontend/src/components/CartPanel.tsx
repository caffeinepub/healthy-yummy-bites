import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onPlaceOrder: () => void;
}

export default function CartPanel({ isOpen, onClose, onPlaceOrder }: CartPanelProps) {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Panel - right drawer on desktop, bottom sheet on mobile */}
      <div
        className={`fixed z-50 bg-white shadow-2xl transition-transform duration-300 ease-in-out
          bottom-0 left-0 right-0 rounded-t-3xl max-h-[90vh]
          sm:bottom-auto sm:top-0 sm:left-auto sm:right-0 sm:h-full sm:w-96 sm:rounded-none sm:rounded-l-3xl
          ${isOpen
            ? 'translate-y-0 sm:translate-y-0 sm:translate-x-0'
            : 'translate-y-full sm:translate-y-0 sm:translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-orange-100 bg-gradient-to-r from-orange-50 to-white rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-none">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
            {items.length > 0 && (
              <span className="text-xs bg-orange-100 text-orange-600 font-semibold px-2 py-0.5 rounded-full">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-orange-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Items list */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 180px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-orange-300" />
              </div>
              <p className="text-gray-500 font-medium text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-1">Add some delicious items from our menu!</p>
            </div>
          ) : (
            <ul className="divide-y divide-orange-50 px-4 py-2">
              {items.map((item) => (
                <li key={item.id} className="py-4 flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                    <p className="text-sm text-orange-500 font-medium">₹{item.price} each</p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1 bg-orange-50 rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm hover:bg-orange-100 active:scale-90 transition-all"
                    >
                      <Minus className="w-3.5 h-3.5 text-orange-600" />
                    </button>
                    <span className="w-7 text-center font-bold text-gray-900 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm hover:bg-orange-100 active:scale-90 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5 text-orange-600" />
                    </button>
                  </div>

                  {/* Line total */}
                  <span className="text-sm font-bold text-gray-800 w-14 text-right">
                    ₹{item.price * item.quantity}
                  </span>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with total and place order */}
        {items.length > 0 && (
          <div className="border-t border-orange-100 px-5 py-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Total Amount</span>
              <span className="text-2xl font-bold text-orange-600">₹{totalPrice}</span>
            </div>
            <button
              onClick={onPlaceOrder}
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-2xl shadow-glow hover:shadow-glow-lg hover:from-orange-600 hover:to-orange-700 active:scale-95 transition-all duration-200"
            >
              🛒 Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
