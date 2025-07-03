import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialQuote = () => {
  const sectionRef = useRef();
  const divBox = useRef();
  const divButton = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 100,  },
      {
        y: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          end: "top -50%",
          toggleActions:"play reverse play reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      divBox.current,
      { x: 400, opacity:0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: divBox.current,
          start: "top 80%",
          end: "top -20%",
          // scrub:1,
          toggleActions:"play reverse play reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      divButton.current,
     { x: -400, opacity:0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: divButton.current,
          start: "top 80%",
          end: "top -20%",
          toggleActions:"play reverse play reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-6 px-6 md:px-16 bg-white"
    >
      {/* Compare Solutions Button */}
      <div 
       ref={divButton}
      className="flex justify-center mb-10">
        <button 
        className="inline-flex -ml-195 items-center px-6 py-3 bg-sky-600 text-white text-base font-semibold rounded-full hover:bg-blue-800 transition-colors duration-300">
          Compare our solutions
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>

      {/* Testimonial Box */}
      <div
      ref={divBox}
      className="max-w-5xl mx-auto bg-sky-600 text-white rounded-3xl p-30 relative">
        <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 relative z-10">
          Everything goes back to account management. If we have issues, we have
          one point of contact to get it fixed... <br />
          Amex GBT has all the data to aggregate and apply where necessary
        </p>

        {/* Author */}
        <div className="text-sm md:text-base font-semibold">
          Head of travel <br />
          <span className="font-normal">Global healthcare company</span>
        </div>

        {/* Quotation mark decoration */}
        <div className="absolute bottom-6 right-6 text-blue-400 text-[120px] md:text-[150px] leading-none opacity-30 select-none">
          &rdquo;
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
