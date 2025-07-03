import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Headphones, Search, X, Menu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  'Business Travel Management',
  'Meetings & Events',
  'Resource Library',
  'About Us',
];

const arrowPath =
  'M23.4698 0.792893C23.0793 0.402369 22.4461 0.402369 22.0556 0.792893C21.6651 1.18342 21.6651 1.81658 22.0556 2.20711L24.586 4.73755H1C0.447715 4.73755 0 5.18526 0 5.73755C0 6.28983 0.447715 6.73755 1 6.73755H24.5859L22.0556 9.26789C21.6651 9.65842 21.6651 10.2916 22.0556 10.6821C22.4461 11.0726 23.0793 11.0726 23.4698 10.6821L27.7073 6.44461C28.0978 6.05408 28.0978 5.42092 27.7073 5.03039L23.4698 0.792893Z';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Header = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const langDropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const languages = [
    { url: 'https://www.amexglobalbusinesstravel.com/uk/', country: 'UK', lang: 'En' },
    { url: 'https://www.amexglobalbusinesstravel.com/ca/', country: 'Canada', lang: 'En' },
    { url: 'https://www.amexglobalbusinesstravel.com/ca-fr/', country: 'Canada FR', lang: 'Fr' },
    { url: 'https://www.amexglobalbusinesstravel.com/fr/', country: 'Français', lang: 'Fr' },
    { url: 'https://www.amexglobalbusinesstravel.com/de/', country: 'Germany', lang: 'De' },
    { url: 'https://www.amexglobalbusinesstravel.com/mx/', country: 'Latin America', lang: 'Es' },
    { url: 'https://www.amexglobalbusinesstravel.com/es/', country: 'Spain', lang: 'Es' },
    { url: 'https://www.amexglobalbusinesstravel.com/au/', country: 'APAC', lang: 'En' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setIsLangDropdownOpen(false);
      }
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-50 to-blue-100"
    >
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 py-4 lg:px-12 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="inline-block w-48 lg:w-56 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Homepage"
            >
              <span className="text-xl font-bold text-blue-800">Amex Logo</span>
            </motion.a>

            {/* Right Controls */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Language Dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <motion.button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                    <Globe className="w-4 h-4 text-gray-500" />
                  </motion.div>
                  <span>US</span>
                  <span className="text-gray-400">|</span>
                  <span>En</span>
                </motion.button>


                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, transform: 90 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {languages.map((lang, i) => (
                        <motion.a
                          key={i}
                          href={lang.url}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex cursor-pointer items-center space-x-2">
                            <span className="font-medium">{lang.country}</span>
                            <span className="text-gray-400">|</span>
                            <span>{lang.lang}</span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-blue-500" />
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Support + Request Demo */}
              <div className="hidden lg:flex items-center space-x-2 bg-blue-600 rounded-lg px-3 py-2 text-white">
                <motion.a
                  href="/traveler-support"
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Headphones className="w-4 h-4" />
                  <span>Traveler Support</span>
                </motion.a>
                <motion.button
                  className="px-3 py-1 rounded-md font-medium cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a demo
                </motion.button>
              </div>

              {/* Search & Menu Icons */}
              <div className="flex items-center space-x-2 bg-black rounded-lg px-2 py-1">
                {/* Search */}
                <motion.button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-white"
                >
                  <AnimatePresence mode="wait">
  {isSearchOpen ? (
    <motion.div
      key="close"
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 90, opacity: 0 }}
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.3 }}
    >
      <X className="w-5 h-5" />
    </motion.div>
  ) : (
    <motion.div
      key="search"
      initial={{ rotate: 90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: -90, opacity: 0 }}
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.3 }}
    >
      <Search className="w-5 h-5" />
    </motion.div>
  )}
</AnimatePresence>
                </motion.button>

                {/* Menu Toggle */}
                <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
                  <div className="relative w-5 h-5">
                    <motion.span className="absolute w-full h-0.5 bg-white top-1 left-0" animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} />
                    <motion.span className="absolute w-full h-0.5 bg-white top-2.5 left-0" animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} />
                    <motion.span className="absolute w-full h-0.5 bg-white top-4 left-0" animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 80 }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white border-t border-gray-200 overflow-hidden"
              ref={searchInputRef}
            >
              <div className="max-w-7xl mx-auto px-5 lg:px-12 py-4">
                <motion.input
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Full Screen Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed inset-0 z-50 bg-blue-900 text-white flex h-screen w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-5 z-50 p-2 rounded-full hover:bg-blue-800 transition"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Left Side: Menu Items */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12">
                <div className="flex flex-col gap-8">
                   {[
      { label: 'Business Travel Management', path: '/Travel-Web' },
      { label: 'Meetings & Events', path: '/meetings-events' },
      { label: 'Resource Library', path: '/resources' },
      { label: 'About Us', path: '/about' },
    ].map((item, index) => (
      <Link to={item.path} key={index} onClick={() => setIsMenuOpen(false)}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={index}
          className="flex items-center gap-2 group text-2xl font-medium"
        >
          <span className="group-hover:border-yellow-400 px-1 py-1 border border-transparent">
            {item.label}
          </span>
          <span className="w-6 h-6 overflow-hidden">
            <svg
              className="w-full h-full group-hover:rotate-90 transition-transform duration-300 ease-out"
              viewBox="0 0 28 11"
              fill="none"
            >
              <path d={arrowPath} fill="#FFB900" />
            </svg>
          </span>
        </motion.div>
      </Link>
    ))}
  </div>
</div>

              <motion.div
                className="hidden md:block w-1/2 h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <img
                  src="https://www.amexglobalbusinesstravel.com/wp-content/themes/amexgbt/webroot/images/backgrounds/header-bgr-desktop-new.png?v=.1"
                  alt="Menu Visual"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.nav>
  );
};

export default Header;
