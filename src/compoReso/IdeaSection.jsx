import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IdeaSection = () => {
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end:"top 10%",
          // markers:true,
          toggleActions: 'play reverse play reverse',
        },
      });

      gsap.from(para1Ref.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: para1Ref.current,
          start: 'top 85%',
                    end:"top 25%",
          toggleActions: 'play reverse play reverse',
                    // markers:true,
        },
      });

      gsap.from(para2Ref.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: para2Ref.current,
          start: 'top 85%',
                    end:"top 20%",
          toggleActions: 'play reverse play reverse',
                    // markers:true,
        },
      });

      gsap.from(buttonsRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.6,
        ease: 'power3.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: 'top 90%',
                    end:"top 30%",
          toggleActions: 'play reverse play reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-sky-600 text-white text-left relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 flex justify-center">
        <div className="absolute w-80 h-80 bg-white opacity-5 rounded-full -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-white opacity-5 rounded-full top-1/3 left-1/4 transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute w-72 h-72 bg-white opacity-5 rounded-full bottom-1/4 right-1/4"></div>
        <div className="absolute w-64 h-64 bg-white opacity-5 rounded-full -bottom-16 -right-16"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold w-300 leading-tight mb-8"
        >
          Every business starts with an idea.<br /> But the best ideas demand your <br /> action.
        </h2>
        <p ref={para1Ref} className="text-lg mb-6">
          Need help on your trip?
        </p>
        <p ref={para2Ref} className="text-lg mb-8">
          Visit our{' '}
          <a href="#" className="text-blue-400 hover:underline">
            Traveler Support page.
          </a>
        </p>

        <div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
          ref={buttonsRef}
        >
          <button className="inline-flex items-center px-8 py-3 bg-white text-blue-900 text-lg font-medium rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
            Find a solution
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
          <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white text-lg font-medium rounded-full shadow-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
            Request a demo
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;