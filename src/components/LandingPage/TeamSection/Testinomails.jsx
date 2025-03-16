import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Harshat Mehta",
    role: "Trader",
    review: `Investiq is a game-changer. The custom watchlist and detailed analysis save time and enhance my strategies effectively.`,
  },
  {
    name: "Elon Musk",
    role: "Stock Analyst",
    review: `Investiq stands out with its user-friendly interface and insights. It’s my go-to tool for stock and crypto analysis.`,
  },
  {
    name: "Sundar Pichai",
    role: "Broker",
    review: `Managing portfolios is easier with Investiq. Its watchlist and real-time analytics are invaluable for staying ahead.`,
  },
  {
    name: "Donald Trump",
    role: "Investor",
    review: `Investiq is perfect for investors. It’s simple, effective, and packed with great tools for stock and crypto tracking.`,
  },
  {
    name: "Narendra Modi",
    role: "Investor",
    review: `For informed decision-making, Investiq’s insights are unmatched. Its flexibility keeps me updated on investments.`,
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex justify-center items-center py-8 mb-6"
    >
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-4xl sm:text-5xl font-extrabold mb-10 tracking-wide">
          Testimonials
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map(({ name, review }, index) => (
            <SwiperSlide
              key={index}
              className="h-full relative p-5 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-105"
            >
              <div className="h-full flex flex-col justify-between">
                <div className="relative z-10 flex-grow">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">
                    {name}
                  </h3>
                  <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
                    {review}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;