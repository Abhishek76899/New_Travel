import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechnologySection = () => {
  const rowRef = useRef();
  const headingRef = useRef();

  const solutions = [
    {
      title: 'Egencia',
      description:
        'Egencia™ makes building and managing a travel management program easy, helping you stay on top of expenses, restrictions, and policies – all in one place.',
      img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2023/10/amex-gbt-egencia-logo.png',
      url: 'https://www.amexglobalbusinesstravel.com/egencia/',
      buttonBgColor: 'bg-yellow-500',
    },
    {
      title: 'Select',
      description:
        'Amex GBT Select seamlessly integrates with your tech and adapts to your needs, from completely customized to highly scalable, so you can give your travelers a personal, proactive experience.',
      img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2023/10/amex-gbt-select-logo.png',
      url: 'https://www.amexglobalbusinesstravel.com/gbt-select/',
      buttonBgColor: 'bg-blue-600',
    },
    {
      title: 'Neo1',
      description:
        'Amex GBT Neo1. Unlock the value of an all-in-one employee spend management tool. A complete platform managing employee spend in one place to budget, issue virtual Cards, book travel, and purchase supplies.',
      img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2023/10/amex-gbt-neo1-logo.png',
      url: 'https://www.amexglobalbusinesstravel.com/neo1/',
      buttonBgColor: 'bg-blue-400',
    },
    {
      title: 'Neo',
      description:
        'Global travel and expense at scale using Amex GBT technology to build and customize your program.',
      img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/06/amex-gbt-neo-logo.png',
      url: 'https://www.amexglobalbusinesstravel.com/business-travel/neo/corporate-travel-booking-tool/',
      buttonBgColor: 'bg-blue-600',
    },
    {
      title: 'Ovation',
      description:
        'Ovation is a high-touch solution that helps you improve management, maximize efficiency, and drive policy compliance – with travel intelligence, a personalized service for your travelers, and a customizable mobile app.',
      img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2023/10/amex-gbt-ovation-logo.png',
      url: 'https://www.amexglobalbusinesstravel.com/ovation/',
      buttonBgColor: 'bg-purple-800',
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".tech-section",
        scroller: "body",
        start: "top -10%",
        end: "+=2000",  // how long the pinned scroll lasts
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    // Heading fade in
    tl.fromTo(
      headingRef.current,
      { y: 500, opacity: 0 },
      { y: 0, opacity: 1, duration: 2 }
    );

    // Row horizontal scroll
    tl.to(
      rowRef.current,
      { x: "-50%", ease: "power2.inOut", duration: 2 },
      "<"  // start at same time
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);


  return (
    <section className="tech-section py-20 px-3 md:px-16 bg-white font-['Inter'] overflow-hidden">
      {/* Section Heading */}
      <div
        ref={headingRef}
        className="max-w-xl mx-auto md:ml-20 text-left -mb-"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
          We have technology to fit your unique travel and expense needs.
        </h2>
        <p className="text-lg text-gray-700">
          Your ideas are worth traveling for. That’s why we’ve built a range of
          solutions to bridge the gap between your business goals and the places
          you’ll travel to make them happen.
        </p>
      </div>

      {/* Horizontal Scroll Row */}
      <div className="relative w-full overflow-hidden h-[420px]">
        <div
          ref={rowRef}
          className="tech-scroll-row flex gap-8 px-6"
          style={{ width: `${solutions.length * 350}px` }}
        >
          {solutions.map((solution, index) => (
            <a
              key={index}
              href={solution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[320px] flex flex-col items-start p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 bg-white"
            >
              {/* Logo */}
              <img
                src={solution.img}
                alt={`${solution.title} Logo`}
                className="mb-4 h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                AMEX GBT {solution.title}
              </h3>
              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
                {solution.description}
              </p>

              {/* Learn More Button */}
              <div
                className={`relative flex items-center justify-center p-3 rounded-full overflow-hidden transition-all duration-300 ${solution.buttonBgColor}`}
                style={{ width: "48px", height: "48px" }}
              >
                {/* Plus Icon */}
                <svg
                  className="absolute w-6 h-6 text-white transition-all duration-300 opacity-100 rotate-0 group-hover:opacity-0 group-hover:rotate-90"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 16h22M16 5v22" />
                </svg>
                {/* Arrow Icon */}
                <svg
                  className="absolute w-6 h-6 text-white opacity-0 rotate-90 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 16h22M27 16l-6-6M21 22l6-6" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
