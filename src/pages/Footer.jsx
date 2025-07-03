import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const columnsRef = useRef([]);
  const footerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(columnsRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const FooterLinkColumn = ({ title, links, index }) => (
    <div
      ref={(el) => (columnsRef.current[index] = el)}
      className="flex-1 min-w-[150px] mb-8 md:mb-0"
    >
      <h3 className="font-bold text-white mb-4 text-base">{title}</h3>
      <nav>
        <ul className="space-y-2">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="text-gray-300 text-sm group relative inline-block"
              >
                <span className="group-hover:text-white transition-colors duration-200">
                  {link}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <footer
      ref={footerRef}
      className="bg-blue-950 py-16 md:py-20 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-screen-xl">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-8 md:gap-12 mb-12 border-b border-gray-700 pb-10">
          <FooterLinkColumn
            title="Explore Solutions"
            links={[
              "Compare Business Travel",
              "Amex GBT Egencia",
              "Amex GBT Select",
              "Amex GBT Neo1",
              "Amex GBT Neo",
              "Amex GBT Ovation",
              "Travel needs by Industry",
              "Products & Services",
            ]}
            index={0}
          />
          <FooterLinkColumn
            title="Meetings & Events"
            links={[
              "Creative Events",
              "Strategic Meetings",
              "Program Management",
              "Find a Venue",
              "Travel for Meetings",
              "Virtual and Hybrid Meetings and Events",
              "M&E Forecast",
            ]}
            index={1}
          />
          <FooterLinkColumn
            title="Resources"
            links={[
              "Resource Library",
              "Travel Management Academy",
              "Privacy Statement",
              "Terms of Service",
              "Health Care Reform",
              "Vulnerability Disclosure",
              "Do not sell my personal information",
            ]}
            index={2}
          />
          <FooterLinkColumn
            title="About Amex GBT"
            links={[
              "Leadership Team",
              "Corporate Sustainability",
              "New Distribution Capability (NDC)",
              "Contact",
              "Locations",
              "Press Room",
              "Investor Relations",
            ]}
            index={3}
          />

          {/* Social + Partner */}
          <div
            ref={(el) => (columnsRef.current[4] = el)}
            className="flex flex-col space-y-4 min-w-[150px]"
          >
            <div className="flex space-x-3 text-white">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-blue-800 hover:bg-blue-700"
              >
                {/* LinkedIn Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-blue-800 hover:bg-blue-700"
              >
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
            <img
              src="https://placehold.co/100x60/FFFFFF/0A2552?text=Ecolabs"
              alt="Ecolabs Platinum"
              className="rounded-md shadow-sm"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-gray-400 text-xs leading-relaxed space-y-4">
          <p>
            1. Amex GBT Internal Reporting, over three years from 2020-2022. 2.
            Amex GBT internal reporting in 2021. 3. Amex GBT Internal Reporting,
            December 31, 2022; includes Egencia and Ovation customers.
          </p>
          <p>
            All users of our online services are subject to our{" "}
            <a href="#" className="text-gray-300 hover:underline">
              Privacy Statement
            </a>{" "}
            and agree to be bound by our{" "}
            <a href="#" className="text-gray-300 hover:underline">
              Terms of Service
            </a>
            .
          </p>
          <p>
            GBT Travel Services UK Limited (GBT UK) and its authorized
            sublicensees (including Ovation Travel Group and Egencia) use
            certain trademarks and service marks of American Express Company or
            its subsidiaries (American Express) in the "American Express Global
            Business Travel" and "American Express GBT" markings & Events"
            brands and in connection with its business for permitted uses only
            under a limited license from American Express (Licensed Marks). The
            Licensed Marks are trademarks or service marks of, and the property
            of, American Express.
          </p>
          <p>
            GBT UK is a subsidiary of Global Business Travel Group, Inc. (NYSE:
            GBTG). American Express holds a minority interest in GBTG, which
            operates as a separate company from American Express.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-700 space-y-2 sm:space-y-0">
            <img
              src="https://placehold.co/80x50/FFFFFF/0A2552?text=Amex+Logo"
              alt="Amex Logo"
              className="h-10"
            />
            <p className="text-xs">
              © 2025 American Express Global Business Travel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
