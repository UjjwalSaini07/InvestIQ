import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <div className="relative flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#7B18C4] to-[#6AB8FF] md:min-h-screen sm:py-4">
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

        {/* Dot Indicators */}
        <div className="flex mt-4 space-x-2 sm:space-x-3 md:space-x-4 p-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 sm:w-1 sm:h-1 md:w-2 md:h-2 rounded-full transition-all duration-200 ${
                current === index
                  ? "bg-white scale-125 sm:scale-150 md:scale-175"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
