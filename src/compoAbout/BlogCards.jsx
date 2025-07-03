import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogCards = () => {
  
  const scrollContainerRef = useRef(null);
  const headingRef = useRef();
  const navRef = useRef();
  const cardsRef = useRef();
  const buttonRef = useRef();
  const dotsRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end:"top 20%",
          toggleActions: 'play reverse play reverse',
          // markers: true
        },
      });

      gsap.from(navRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: navRef.current,
          start: 'top 85%',
          end:"top 25%",
          toggleActions: 'play reverse play reverse',
        },
      });

      gsap.to(cardsRef.current, {
        x: "-130%",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 20%",
          end: "bottom top",
          scrub: 2,
          // markers:true,
          toggleActions: "play reverse play reverse",
        }
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 95%',
          end:"top 35%",
          toggleActions: 'play reverse play reverse',
        },
      });

      gsap.from(dotsRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: dotsRef.current,
          start: 'top 95%',
          end:"top 35%",
          toggleActions: 'play reverse play reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const blogPosts = [
    {
      date: 'Jun 19, 2025',
      title: 'New EU Travel Rules for Business Travelers',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2025/06/New-eu-traveller-rules-700x450.jpg',
      url: 'https://www.amexglobalbusinesstravel.com/blog/eu-rules-business-travelers/',
    },
    {
      date: 'Jun 19, 2025',
      title: 'Harnessing business travel motivation for employee growth and well-being',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2025/06/Harnessing-business-travel-motivation-1-700x450.jpg',
      url: 'https://www.amexglobalbusinesstravel.com/blog/business-travel-motivation/',
    },
    {
      date: 'Jun 19, 2025',
      title: 'Upcoming: 7 reasons to stop by the Business Travel Show Europe',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2025/06/successful-business-travel-700x450.jpg',
      url: 'https://www.amexglobalbusinesstravel.com/blog/bts-london-2025/',
    },
    {
      date: 'Jun 17, 2025',
      title: 'What’s dynamic hotel pricing and why’s it important?',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2025/06/Hotel-dynamic-pricing-700x450.jpg',
      url: 'https://www.amexglobalbusinesstravel.com/blog/hotel-dynamic-pricing/',
    },
    {
      date: 'Jun 16, 2025',
      title: 'Inspiring Success: How Ariana Reed Shapes Impactful Events',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2025/06/customer-experience-700x450.jpg',
      url: 'https://www.amexglobalbusinesstravel.com/blog/inspiring-success-ariana-reed-impactful-events/',
    },
    {
      date: 'Jun 16, 2025',
      title: 'What makes Amex GBT Egencia’s support unrivaled',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2025/06/Unrivaled-support-700x450.jpg',
      url: 'https://www.amexglobalbusinesstravel.com/blog/unrivaled-customer-support-for-better-business-travel/',
    },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-12 font-['Inter']">
      <div className="max-w-75xl mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl w-190 font-semibold text-gray-900 mb-10 leading-tight"
        >
          <span className="text-sky-600">Tools</span> for travel and finance managers and event planners
        </h2>

        {/* Navigation */}
        <div
          ref={navRef}
          className="flex justify-end space-x-4 mb-8"
        >
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous slide"
          >
            {/* Left arrow SVG */}
            <svg className="w-6 h-6" viewBox="0 0 23 23" fill="none">
              <path d="M6.67907 12.0089L13.8666 19.1964C13.9334 19.2632 14.0126 19.3162 14.0999 19.3523C14.1871 19.3884 14.2806 19.4071 14.3751 19.4071C14.4695 19.4071 14.563 19.3884 14.6503 19.3523C14.7375 19.3162 14.8168 19.2632 14.8836 19.1964C14.9504 19.1296 15.0034 19.0504 15.0395 18.9631C15.0756 18.8759 15.0942 18.7823 15.0942 18.6879C15.0942 18.5935 15.0756 18.4999 15.0395 18.4127C15.0034 18.3254 14.9504 18.2462 14.8836 18.1794L8.20372 11.5004L14.8836 4.82142C15.0185 4.68655 15.0942 4.50363 15.0942 4.3129C15.0942 4.12217 15.0185 3.93925 14.8836 3.80438C14.7487 3.66952 14.5658 3.59375 14.3751 3.59375C14.1844 3.59375 14.0014 3.66952 13.8666 3.80438L6.67907 10.9919C6.61225 11.0586 6.55923 11.1379 6.52306 11.2252C6.48689 11.3124 6.46827 11.4059 6.46827 11.5004C6.46827 11.5949 6.48689 11.6884 6.52306 11.7756C6.55923 11.8629 6.61225 11.9422 6.67907 12.0089Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"></path>
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next slide"
          >
            {/* Right arrow SVG */}
            <svg className="w-6 h-6" viewBox="0 0 23 23" fill="none">
              <path d="M16.3209 12.0089L9.13343 19.1964C9.06665 19.2632 8.98737 19.3162 8.90012 19.3523C8.81287 19.3884 8.71935 19.4071 8.62491 19.4071C8.53047 19.4071 8.43696 19.3884 8.3497 19.3523C8.26245 19.3162 8.18317 19.2632 8.1164 19.1964C8.04962 19.1296 7.99664 19.0504 7.9605 18.9631C7.92436 18.8759 7.90576 18.7823 7.90576 18.6879C7.90576 18.5935 7.92436 18.4999 7.9605 18.4127C7.99664 18.3254 8.04962 18.2462 8.1164 18.1794L14.7963 11.5004L8.1164 4.82142C7.98153 4.68655 7.90576 4.50363 7.90576 4.3129C7.90576 4.12217 7.98153 3.93925 8.1164 3.80438C8.25126 3.66952 8.43418 3.59375 8.62491 3.59375C8.81564 3.59375 8.99856 3.66952 9.13343 3.80438L16.3209 10.9919C16.3878 11.0586 16.4408 11.1379 16.4769 11.2252C16.5131 11.3124 16.5317 11.4059 16.5317 11.5004C16.5317 11.5949 16.5131 11.6884 16.4769 11.7756C16.4408 11.8629 16.3878 11.9422 16.3209 12.0089Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"></path>
            </svg>
          </button>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="flex overflow-x-auto whitespace-nowrap gap-8 pb-4 ml-55 w-240 scrollbar-hide"
        >
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[300px] bg-white rounded-[40px] overflow-hidden shadow hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div className="p-6 space-y-4 flex-1">
                <div className="flex justify-between items-center text-sm text-gray-500 font-medium mb-2">
                  <span className="uppercase text-gray-900 font-bold">Blog</span>
                  <span className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold overflow-hidden transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                    <svg className="absolute w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-white" fill="none" viewBox="0 0 60 60" stroke="currentColor" strokeWidth="2">
                      <path d="M19 30h22M30 19v22" />
                    </svg>
                  </span>
                </div>
                <div className="text-sm text-gray-700 font-semibold">{post.date}</div>
                <h3 className="text-sky-700 text-xl font-bold leading-snug">{post.title}</h3>
                <span className="text-sky-600 font-semibold border-b-2 border-sky-600 inline-block pt-2 hover:border-sky-800 hover:text-sky-800 transition-colors duration-200">
                  Read more
                </span>
              </div>
              <div className="mt-4 flex-grow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-b-[40px]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/446x276/E0E0E0/333333?text=Image+Error';
                  }}
                />
              </div>
            </a>
          ))}
        </div>

        {/* Browse Button */}
        <div className="flex justify-center mt-12" ref={buttonRef}>
          <a
            href="https://www.amexglobalbusinesstravel.com/resources/"
            className="inline-flex items-center px-10 py-4 border-2 border-sky-600 text-sky-600 font-semibold rounded-full hover:bg-sky-600 hover:text-white transition-all duration-300 group"
          >
            Browse all resources
            <svg
              className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 28 11"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M23.4698 0.792893C23.0793 0.402369 22.4461 0.402369 22.0556 0.792893C21.6651 1.18342 21.6651 1.81658 22.0556 2.20711L24.586 4.73755H1C0.447715 4.73755 0 5.18526 0 5.73755C0 6.28983 0.447715 6.73755 1 6.73755H24.5859L22.0556 9.26789C21.6651 9.65842 21.6651 10.2916 22.0556 10.6821C22.4461 11.0726 23.0793 11.0726 23.4698 10.6821L27.7073 6.44461C28.0978 6.05408 28.0978 5.42092 27.7073 5.03039L23.4698 0.792893Z"></path>
            </svg>
          </a>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8" ref={dotsRef}>
          {blogPosts.map((_, i) => (
            <span
              key={i}
              className={`block w-3 h-3 rounded-full ${i === 0 ? 'bg-sky-600' : 'bg-gray-300'} hover:bg-sky-400 transition-colors duration-200 cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
