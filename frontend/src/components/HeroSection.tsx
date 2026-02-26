import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.png"
          alt="Delicious food"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 rounded-3xl">
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in tracking-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: '#FF6B00',
              textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.9)',
            }}
          >
            Healthy Yummy Bites
          </h1>
          <p className="text-xl md:text-2xl text-orange-300 mb-8 font-medium tracking-wide">
            Fresh • Tasty • Healthy Fast Food
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="btn-primary group text-lg px-8 py-6 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/919023031429', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Order on WhatsApp
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="btn-secondary text-lg px-8 py-6 rounded-full border-2 border-orange-400 text-white hover:bg-orange-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={scrollToMenu}
            >
              View Menu
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-orange-400" />
      </div>
    </section>
  );
}
