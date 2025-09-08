import { useState, useEffect, useCallback } from "react";

export default function Carousel({ slides, interval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [nextSlide, interval]);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full md:min-h-screen sm:py-4">
      {/* <div className="relative flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#7B18C4] to-[#6AB8FF] md:min-h-screen sm:py-4"> */}
        <div className="relative w-full max-w-[90%] md:max-w-[75%] lg:max-w-[65%] h-auto max-h-[90vh] flex justify-center items-center overflow-hidden rounded-lg">
          {slides.map((s, index) => (
            <img
              key={index}
              src={s}
              alt={`Slide ${index + 1}`}
              className={`w-full h-auto max-h-[250px] sm:max-h-[500px] md:max-h-[600px] object-contain transition-opacity duration-700 ${
                index === current ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
