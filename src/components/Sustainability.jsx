import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sustainability = () => {
  const sectionRef = useRef();
  const windRef = useRef();
  const phoneRef = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();
  const svgRef = useRef();
  const sectionDiv = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      //Animation in Section
      gsap.to(sectionDiv.current,
        {
        x: "-130%",
        scrollTrigger: {
          trigger: sectionDiv.current,
          start: "top 20%",
          end: "bottom top",
          scrub: 2,
            toggleActions: "play reverse play reverse",
            // markers:true
          }
        });
      // Animate wind turbine image
      gsap.from(windRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 10%',
          toggleActions: 'play reverse play reverse',
          // markers:true
        },
      });

      // Animate phone image
      gsap.from(phoneRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'top 10%',
          toggleActions: 'play reverse play reverse',
        },
      });

      // Animate heading
      gsap.from(headingRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 40%',
          end: 'top 0%',
          toggleActions: 'play reverse play reverse',
        },
      });

      // Animate paragraph
      gsap.from(paragraphRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 50%',
          end: 'top 10%',
          toggleActions: 'play reverse play reverse',
          // markers:true
        },
      });

      // Animate SVG arrow
      gsap.from(svgRef.current, {
        x: -20,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
          // markers:true
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 md:px-12 flex justify-center items-center bg-blue-50 font-['Inter']"
    >
      <div
      ref={sectionDiv}
      className="relative w-full max-w-6xl lg:max-w-5xl xl:max-w-[1200px] flex flex-col md:flex-row items-center rounded-3xl lg:rounded-full overflow-hidden bg-green-500 shadow-xl">
        {/* Left image section */}
        <div className="relative w-full md:w-3/4 aspect-w-10 aspect-h-13 md:aspect-w-auto md:aspect-h-auto h-auto min-h-[300px] md:min-h-[500px] flex items-center justify-center">
          {/* Background image */}
          <img
            src="https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/aerial-view-field-800x692.jpg"
            alt="Aerial view of a field"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

          {/* Wind turbine image */}
          <img
            ref={windRef}
            src="https://www.amexglobalbusinesstravel.com/wp-content/uploads/2023/11/Wind-turbine-285x380.png"
            alt="Wind turbine in a field"
            className="absolute -top-10 left-68 w-8 h-auto object-cover rounded-xl opacity-100 shadow-lg z-100 md:w-16 md:h-auto lg:w-34"
          />

          {/* Phone image */}
          <img
            ref={phoneRef}
            src="https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/smartphone-travel-app.jpg"
            alt="Travel app on phone"
            className="absolute bottom-10 left-145 transform -translate-x-1/2 w-36 h-auto object-cover rounded-xl shadow-lg z-20 md:w-44 md:h-auto lg:w-56"
          />
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 lg:w-3/5 p-8 md:p-12 lg:p-16 text-left space-y-6">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Sustainability
          </h2>
          <p
            ref={paragraphRef}
            className="text-gray-700 text-lg md:text-xl leading-relaxed"
          >
            Getting your genius out there doesn’t have to cost the world. Our
            corporate sustainability programs help shape everything, from our
            partnerships to our solutions.
          </p>
          <a
            href="/about/corporate-sustainability/"
            className="inline-flex items-center px-8 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
          >
            Learn more
            <svg
              ref={svgRef}
              className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 28 11"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.4698 0.792893C23.0793 0.402369 22.4461 0.402369 22.0556 0.792893C21.6651 1.18342 21.6651 1.81658 22.0556 2.20711L24.586 4.73755H1C0.447715 4.73755 0 5.18526 0 5.73755C0 6.28983 0.447715 6.73755 1 6.73755H24.5859L22.0556 9.26789C21.6651 9.65842 21.6651 10.2916 22.0556 10.6821C22.4461 11.0726 23.0793 11.0726 23.4698 10.6821L27.7073 6.44461C28.0978 6.05408 28.0978 5.42092 27.7073 5.03039L23.4698 0.792893Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
