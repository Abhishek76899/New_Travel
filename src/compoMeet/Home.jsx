import React, { useEffect, useRef } from 'react';
import { ChevronRight, Users, DollarSign, Briefcase } from 'lucide-react';
import video1 from '../assets/video1.mp4';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {

    // Animate Right Box (Main Video)
    gsap.fromTo(".circle-video",
      { x: 0, opacity: 1 },
      {
        x: 200, // smaller movement feels better
        opacity: 0,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".circle-video",
          start: "top 30%",
          end: "top 10%",
          scrub: 1.5,  // no need 5 — too slow
          toggleActions: "play reverse play reverse",
        }
      });

    // Animate Capsule Video
    gsap.fromTo(".image-box",
      {x:0, opacity:1},
      {
      x: -800,
      opacity:0,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".image-box",  // ✅ Correct now
        start: "top 20%",
        // end: "top 10%",
        scrub: 2,
        // markers: true,
        toggleActions: "play reverse play reverse",
      }
    });

    // Animate Data Points
gsap.utils.toArray(".data-point").forEach((el, i) => {
  gsap.fromTo(el,
    { y: 0 },
    {
      y: -200,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
        // markers: true,
        toggleActions: "play reverse play reverse",
      }
    });
});

gsap.utils.toArray(".left-point").forEach((el, i) => {
  gsap.fromTo(el,
    { y: 0 }, // START with y: 0 (no opacity: 0)
    {
      y: -140,
      opacity: 1, // fade out while going up
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        end: "top 20%",
        scrub: 1,
        // markers: true,
      }
    });
});



  }, []);



  return (
    <section
      ref={sectionRef}
      className="min-h-screen top-30 font-inter text-gray-800 antialiased overflow-hidden relative"
    >
      <main className="relative z-10 w-full px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-0 min-h-[90vh]">

        {/* Left Side */}
        <div className=" flex-1 max-w-2xl text-left md:pr-12 relative z-10">
  <h1 className="left-point text-6xl md:text-6xl ml-30 font-extrabold leading-tight text-blue-900">
    <span className='text-blue-400'>A marketplace</span> for businesses with ideas worth traveling for
  </h1>
  <p className="left-point text-lg text-gray-700 ml-30 leading-relaxed ">
    Finally — one place for bookings, meetings, and expenses from the
    world's top travel providers. Our streamlined technology is here to
    help your great ideas travel.
  </p>
  <button className="left-point inline-flex items-center ml-30 px-8 py-3 bg-blue-700 text-white text-lg font-medium rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300">
    Explore our technology
    <ChevronRight className="w-5 h-5 ml-2" />
  </button>
</div>


        {/* Right Side - Main Video Circle */}
        <div className="box flex-1 flex items-center justify-center relative">
          <div className="circle-video relative w-[300px] md:w-[370px] h-138 rounded-t-full rounded-b-full overflow-hidden shadow-xl">
            <video
              muted
              loop
              autoPlay
              playsInline
              src={video1}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </main>

      {/* Small capsule image (sm-img-wrap) */}
      <div
        className="image-box hidden lg:block absolute left-185 opacity-100 bottom-[182px] w-[343px] h-[251px] rounded-[140px] overflow-hidden shadow-lg"
      >
        <video
          muted
          loop
          autoPlay
          playsInline
          src={video1}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Data Points */}
      <div className="data-points absolute top-[50%] right-[18px] transform -translate-y-1/2 flex flex-col space-y-4 z-20">
  {[
    { text: '95% customer retention', icon: <Users className="w-5 h-5 text-blue-500 mr-2" /> },
    { text: '$1.5B+ tech investment', icon: <DollarSign className="w-5 h-5 text-yellow-500 mr-2" /> },
    { text: '20K+ clients globally', icon: <Briefcase className="w-5 h-5 text-green-500 mr-2" /> },
  ].map((item, i) => (
    <div
      key={i}
      className="data-point flex items-center p-6 rounded-lg shadow-md bg-white"
    >
      {item.icon}
      <span className="text-sm font-semibold">{item.text}</span>
    </div>
  ))}
</div>

    </section>
  );
};

export default Home;
