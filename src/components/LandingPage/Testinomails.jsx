import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
      name: "Harshat Mehta",
      role: "Trader",
      review: `Investiq has been a game-changer for me as a trader. The ability to customize my watchlist and access detailed stock analysis has saved me countless hours and improved my trading strategies.`,
    },
    {
      name: "Finn Smith",
      role: "Stock Analyst",
      review: `I’ve used many platforms, but Investiq stands out for its user-friendly interface and deep insights. It’s now my go-to tool for both stock and crypto analysis.`,
    },
    {
      name: "Rachel Johnson",
      role: "Broker",
      review: `Investiq’s features make managing client portfolios so much easier. The customizable watchlist and real-time analytics are invaluable tools for staying ahead in the market.`,
    },
    {
      name: "Donald Trump",
      role: "Investor",
      review: `Investiq is fantastic for investors who want to keep an eye on the stock and crypto markets. It’s simple, effective, and packed with useful tools.`,
    },
    {
      name: "Narendra Modi",
      role: "Investor",
      review: `As someone who values informed decision-making, Investiq provides the insights I need to stay updated on my investments. The platform’s flexibility is unmatched.`,
    },
  ];
  

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex justify-center items-center py-8 mb-6"
    >
      <div className="max-w-6xl mx-auto text-center px-1">
        <h2 className="text-white text-5xl font-extrabold mb-10 tracking-wide">
          Testimonials
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            700: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map(({ name, review }, index) => (
            <SwiperSlide
              key={index}
              className="relative p-5 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg transition-transform duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-white text-xl font-semibold">{name}</h3>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  {review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
