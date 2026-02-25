export default function GallerySection() {
  const galleryItems = [
    {
      src: '/assets/generated/gallery-burger.dim_800x600.png',
      alt: 'Delicious Burgers',
      title: 'Burgers',
    },
    {
      src: '/assets/generated/gallery-pizza.dim_800x600.png',
      alt: 'Fresh Pizza',
      title: 'Pizza',
    },
    {
      src: '/assets/generated/gallery-shake.dim_800x600.png',
      alt: 'Refreshing Shakes',
      title: 'Shakes',
    },
    {
      src: '/assets/generated/gallery-wrap.dim_800x600.png',
      alt: 'Tasty Wraps',
      title: 'Wraps',
    },
    {
      src: '/assets/generated/gallery-fries.dim_800x600.png',
      alt: 'Crispy Fries',
      title: 'Fries',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            A taste of what we offer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white text-2xl font-bold p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
