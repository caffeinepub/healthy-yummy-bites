import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      text: 'Best burgers and shakes in the area!',
      author: 'Happy Customer',
    },
    {
      text: 'Affordable prices and amazing taste.',
      author: 'Food Lover',
    },
    {
      text: 'Perfect place for snacks and coffee.',
      author: 'Regular Visitor',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600">
            What our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card glass-card p-8 rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 text-center italic">
                "{review.text}"
              </p>
              <p className="text-gray-500 text-center font-medium">
                - {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
