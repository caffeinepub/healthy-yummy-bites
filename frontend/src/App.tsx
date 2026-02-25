import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import OrderCTASection from './components/OrderCTASection';
import Footer from './components/Footer';
import StickyOrderButton from './components/StickyOrderButton';
import CartIcon from './components/CartIcon';
import CartPanel from './components/CartPanel';
import CheckoutModal from './components/CheckoutModal';
import { CartProvider, useCart } from './contexts/CartContext';
import { formatWhatsAppOrder } from './utils/whatsappOrder';
import type { CustomerInfo } from './utils/whatsappOrder';

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { items, totalPrice, clearCart } = useCart();

  function handlePlaceOrder() {
    setIsCheckoutOpen(true);
  }

  function handleCheckoutSubmit(info: CustomerInfo) {
    const url = formatWhatsAppOrder(info, items, totalPrice);
    window.open(url, '_blank');
    clearCart();
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  }

  return (
    <div className="min-h-screen">
      <CartIcon onClick={() => setIsCartOpen((prev) => !prev)} />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <OrderCTASection />
      <Footer />
      <StickyOrderButton />
      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onPlaceOrder={handlePlaceOrder}
      />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSubmit={handleCheckoutSubmit}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
