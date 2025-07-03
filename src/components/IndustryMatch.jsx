import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustryMatch = () => {
  const rowRef = useRef();
  const headingRef = useRef();

  const industries = [
    {
      title: 'Legal',
      description:
        'Get to conferences, case meetings, and more with our team of experts to help you get where you need to go.',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/lawyers-meeting-office.jpg',
      url: '/industry/legal/',
    },
    {
      title: 'Health sciences',
      description:
        'We can help make connections seamless and meaningful for you so you can improve health outcomes.',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/healthcare-workers-microscrope.jpg',
      url: '/industry/health-sciences/',
    },
    {
      title: 'Consulting',
      description:
        'From single conferences to global travel programs and all-out customized meeting strategies, get the support you need.',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/travel-consultant-and-customer.jpg',
      url: '/industry/consulting/',
    },
    {
      title: 'Media, sports and entertainment',
      description:
        'Production travel has its complexities. That’s why you need specialists with insights on the nuances of your business.',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/basketball-player-jump-shot.jpg',
      url: '/industry/sports/',
    },
    {
      title: 'Energy, mining & marine',
      description:
        'Get one integrated system that ties fly-in-fly-out (FIFO) travel to rostering – and automate the entire crew journey.',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/wind-turbine-field.jpg',
      url: '/industry/energy-mining-marine/',
    },
    {
      title: 'Technology',
      description:
        'With the evolving nature of digital solutions, technology companies like yours need to be at the pulse of innovation.',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/it-specialist-server-room.jpg',
      url: '/industry/technology/',
    },
    {
      title: 'Finance',
      description:
        'With cost-saving management tools and reliable support, your teams can use travel as an investment in business growth.',
      image: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/financial-specialist-and-laptop.jpg',
      url: '/industry/finance/',
    },
  ];

  useEffect(() => {
    // Horizontal scroll for industry row
    let rowAnim = gsap.to(rowRef.current, {
      x: '-100%',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.industry-scroll',
        scroller: 'body',
        start: 'top 55%',
        end: 'top -100%',
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    // Heading fade-up
    let headingAnim = gsap.fromTo(headingRef.current, 
      {x: 500, opacity:0, scale:1},
      {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: headingRef.current,
        // scroller: 'body',
        start: 'top 40%',
        end: 'top -100%',
        // markers: true,
        pin:false,
        toggleActions:"play reverse play reverse"
      },
    });

    return () => {
      if (rowAnim.scrollTrigger) rowAnim.scrollTrigger.kill();
      rowAnim.kill();
      headingAnim.kill();
    };
  }, []);

  return (
    <section className="industry-section bg-white font-['Inter'] overflow-hidden">
      {/* Heading */}
      <div
  ref={headingRef}
  className="sticky top-0 z-10 bg-white py-20 px-6 md:px-16 max-w-7xl mx-auto text-left"
>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
          A match for <span className="text-sky-600">your industry</span>
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl">
          Whatever industry you’re in, our team has the right mix of specialists
          and products that will fit like a glove. We offer expertise in:
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="industry-scroll relative w-full overflow-hidden h-[360px]">
        <div
          ref={rowRef}
          className="flex ml-350 gap-6 px-6"
          style={{ width: `${industries.length * 280}px` }}
        >
          {industries.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="group relative flex-shrink-0 w-[240px] h-[320px] overflow-hidden rounded-t-full rounded-b-full cursor-pointer shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 hover:bg-blue-500 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute inset-x-0 bottom-5 p-8">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-white text-xl font-semibold mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryMatch;
