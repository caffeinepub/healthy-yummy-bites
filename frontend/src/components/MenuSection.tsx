import { useState } from 'react';
import { menuData } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Check } from 'lucide-react';

function parsePrice(priceStr: string): number {
  return parseInt(priceStr.replace(/[^\d]/g, ''), 10) || 0;
}

export default function MenuSection() {
  const { addToCart } = useCart();
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});

  function handleAddToCart(itemName: string, priceStr: string) {
    const price = parsePrice(priceStr);
    addToCart(itemName, price);
    const key = itemName.toLowerCase().replace(/\s+/g, '-');
    setAddedMap((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [key]: false }));
    }, 1200);
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600">
            Delicious food made fresh daily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuData.map((category) => (
            <div
              key={category.id}
              className="menu-card glass-card p-6 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-glow">
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item, index) => {
                  const itemKey = item.name.toLowerCase().replace(/\s+/g, '-');
                  const isAdded = addedMap[itemKey];

                  if (item.priceSmall && item.priceLarge) {
                    // Dual-price items (pizza): show two add-to-cart buttons
                    return (
                      <div key={index} className="p-3 rounded-xl hover:bg-orange-50/50 transition-colors duration-200">
                        <span className="text-gray-700 font-medium block mb-2 break-words">{item.name}</span>
                        <div className="flex gap-2 flex-wrap">
                          <button
                            onClick={() => handleAddToCart(`${item.name} (Small)`, item.priceSmall!)}
                            className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 active:scale-95
                              ${addedMap[`${item.name.toLowerCase().replace(/\s+/g, '-')}-small`]
                                ? 'bg-green-500 text-white'
                                : 'bg-orange-500 text-white hover:bg-orange-600'
                              }`}
                          >
                            {addedMap[`${item.name.toLowerCase().replace(/\s+/g, '-')}-small`]
                              ? <Check className="w-3 h-3" />
                              : <ShoppingCart className="w-3 h-3" />
                            }
                            {item.priceSmall}
                          </button>
                          <button
                            onClick={() => handleAddToCart(`${item.name} (Large)`, item.priceLarge!)}
                            className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 active:scale-95
                              ${addedMap[`${item.name.toLowerCase().replace(/\s+/g, '-')}-large`]
                                ? 'bg-green-500 text-white'
                                : 'bg-orange-600 text-white hover:bg-orange-700'
                              }`}
                          >
                            {addedMap[`${item.name.toLowerCase().replace(/\s+/g, '-')}-large`]
                              ? <Check className="w-3 h-3" />
                              : <ShoppingCart className="w-3 h-3" />
                            }
                            {item.priceLarge}
                          </button>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-xl hover:bg-orange-50/50 transition-colors duration-200 gap-2"
                    >
                      <span className="text-gray-700 font-medium flex-1 break-words">{item.name}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-orange-600 font-bold bg-orange-100 px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                          {item.price}
                        </span>
                        <button
                          onClick={() => handleAddToCart(item.name, item.price!)}
                          aria-label={`Add ${item.name} to cart`}
                          className={`flex items-center justify-center gap-1 min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95
                            ${isAdded
                              ? 'bg-green-500 text-white shadow-md'
                              : 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm hover:shadow-md'
                            }`}
                        >
                          {isAdded ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <ShoppingCart className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
