import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 lg:px-24" id="intro-section">
      {/* Sticky Background Image */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://www.amexglobalbusinesstravel.com/wp-content/themes/amexgbt/webroot/images/intros/bgr-pattern.png)' }}
        ></div>
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col gap-6">
        {/* Title & Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase text-blue-900 text-sm font-semibold"
        >
          <strong>Law Firm Travel Services</strong>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight"
        >
          <strong>Meet firm goals</strong> with Lawyers Travel
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-blue-900"
        >
          <p>
            Work with our travel management team for exceptional service, opportunities for cost
            savings, and complete travel solutions for travel managers, administrators, and attorneys.
          </p>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact sales
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6" viewBox="0 0 28 11" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.4698 0.792893C23.0793 0.402369 22.4461 0.402369 22.0556 0.792893C21.6651 1.18342 21.6651 1.81658 22.0556 2.20711L24.586 4.73755H1C0.447715 4.73755 0 5.18526 0 5.73755C0 6.28983 0.447715 6.73755 1 6.73755H24.5859L22.0556 9.26789C21.6651 9.65842 21.6651 10.2916 22.0556 10.6821C22.4461 11.0726 23.0793 11.0726 23.4698 10.6821L27.7073 6.44461C28.0978 6.05408 28.0978 5.42092 27.7073 5.03039L23.4698 0.792893Z"
                  fill="white"
                />
              </svg>
            </span>
          </motion.button>

          <motion.a
            href="https://www.concursolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center"
          >
            Book travel
            <span className="ml-2">
              <svg className="w-6 h-6" viewBox="0 0 28 11" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.4698 0.792893C23.0793 0.402369 22.4461 0.402369 22.0556 0.792893C21.6651 1.18342 21.6651 1.81658 22.0556 2.20711L24.586 4.73755H1C0.447715 4.73755 0 5.18526 0 5.73755C0 6.28983 0.447715 6.73755 1 6.73755H24.5859L22.0556 9.26789C21.6651 9.65842 21.6651 10.2916 22.0556 10.6821C22.4461 11.0726 23.0793 11.0726 23.4698 10.6821L27.7073 6.44461C28.0978 6.05408 28.0978 5.42092 27.7073 5.03039L23.4698 0.792893Z"
                  fill="white"
                />
              </svg>
            </span>
          </motion.a>
        </div>

        {/* Images */}
        <motion.div
          className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://www.amexglobalbusinesstravel.com/wp-content/uploads/2023/12/tn_GettyImages-1210673449-1.jpg"
              alt="Law Firm Travel"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://www.amexglobalbusinesstravel.com/wp-content/uploads/2024/11/amex-gbt-lawyers-travel.jpg"
              alt="Lawyers Travel"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Alerts */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          {[
            {
              icon: 'https://www.amexglobalbusinesstravel.com/wp-content/themes/amexgbt/webroot/images/data-points/scales-w.svg',
              text: '<strong>200+</strong> leading firms <sup>1</sup>',
              bg: '#64aae1',
            },
            {
              icon: 'https://www.amexglobalbusinesstravel.com/wp-content/themes/amexgbt/webroot/images/data-points/hotel-w.svg',
              text: '<strong>Discounts</strong> on hotels',
              bg: '#ffb900',
            },
            {
              icon: 'https://www.amexglobalbusinesstravel.com/wp-content/themes/amexgbt/webroot/images/data-points/airplane-w.svg',
              text: '<strong>Savings</strong> on top air routes',
              bg: '#64aae1',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="flex items-center p-4 bg-white rounded-xl shadow-md w-full md:w-1/3"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: item.bg }}>
                <img src={item.icon} alt="icon" className="w-6 h-6" />
              </div>
              <div
                className="text-gray-800 text-sm font-medium"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
