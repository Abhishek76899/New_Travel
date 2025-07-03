import React, { useState, useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Seamless integration',
    text: 'Our platform integrates smoothly with your existing tools, making travel management effortless.',
    img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2025/04/traveller-on-phone-in-city.jpg',
  },
  {
    title: 'All-in-one experience',
    text: 'Book, manage, and analyze your travel in one place with an intuitive interface.',
    img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2025/04/colleagues-working-on-laptops.jpg',
  },
  {
    title: 'Simple spend management',
    text: 'One single platform that helps provide everything you need to manage travel expenses and oversee your cashflow.',
    img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/01/Scale-your-program.png',
  },
  {
    title: 'Personalized service',
    text: 'Get tailored recommendations and support to make your business travel as smooth as possible.',
    img: 'https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/02/group-meeting-office.jpg',
  },
];

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(".feature-section",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".feature-section",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          }
        });

      gsap.fromTo(".feature-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".feature-heading",
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          }
        });

      gsap.to(".feature-content-box", {
        x: "-130%",
        scrollTrigger: {
          trigger: ".feature-section",
          start: "top -1000",
          end: "+=1500",
          scrub: 2,
          // markers:true,
          toggleActions: "play reverse play reverse",
        }
      });


      gsap.fromTo(".feature-image",
        { x: 0, opacity: 1, scale: 1 },
        {
          x: -700,
          opacity: 0,
          scale: 0,
          duration: 0.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".feature-left-image",
            start: "top 40%",
            end: "top -100%",
            // markers: true,
            toggleActions: "play reverse play reverse",
          }
        });



      gsap.fromTo(".feature-title-item",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".feature-content-box",
            start: "top 80%",
            end: "top -100%",
            // scrub: 2,
            toggleActions: "play reverse play reverse",
          }
        });

    }, ".feature-section");

    return () => ctx.revert();
  }, []);

  return (
    <section className="feature-section max-w-full min-h-screen py-20">
      <div className="lg:pl-[140px] px-4 md:px-8 w-210 mb-12">
        <h2 className="feature-heading section-title font-semibold leading-[1.1] text-[32px] lg:text-[68px] text-blue-900 tracking-[-0.045em] break-words">
          Make your ideas travel with the <span className="text-sky-600">right technology and support.</span>
        </h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center ml-70 justify-between px-6 gap-12">

        {/* Left image */}
        <div className="feature-left-image flex-1 flex justify-center py-20">
          <div className="feature-image w-[280px] h-[420px] md:w-[320px] md:h-[480px] -ml-20 overflow-hidden rounded-[50%/35%] shadow-lg transition-all duration-700">
            <img
              src={features[activeIndex].img}
              alt={features[activeIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content box */}
        <div className="feature-content-box bg-white w-500 md:min-h-[500px] rounded-l-[500px] rounded-r-[500px] p-30 shadow-xl flex flex-col justify-center space-y-8 text-left">

          {/* Title list */}
          <div className="space-y-4">
            {features.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`feature-title-item flex items-center space-x-3 cursor-pointer transition-colors ${index === activeIndex ? 'text-blue-700 font-semibold' : 'text-gray-500'
                  }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full border ${index === activeIndex ? 'bg-blue-700 border-blue-700' : 'border-gray-400'
                    }`}
                ></div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          {/* Text content */}
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
              {features[activeIndex].title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {features[activeIndex].text}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeatureSection;
