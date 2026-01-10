import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import { Download, ArrowDown } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const roles = ['Python Developer', 'React Developer', 'Frontend Developer'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } as any,
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  } as any;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  } as any;

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-white via-blue-50 to-white'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-blue-500' : 'bg-blue-300'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '-50px', left: '-50px' }}
        />
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-purple-500' : 'bg-purple-300'
          }`}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ bottom: '-50px', right: '-50px' }}
        />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Welcome to my portfolio
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className={`text-5xl sm:text-6xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Abhiranjan Kumar
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              variants={itemVariants}
              className={`text-2xl sm:text-3xl font-semibold mb-6 h-16 flex items-center ${
                isDark
                  ? 'text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text'
                  : 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'
              }`}
            >
              <TypingAnimation texts={roles} speed={40} deletionSpeed={25} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className={`text-lg mb-8 max-w-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Passionate fresher building beautiful, responsive web applications
              with modern technologies. Eager to learn and grow in a collaborative
              environment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-600/50'
                }`}
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                  isDark
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600/10'
                }`}
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/ABHIRANJAN-KUMAR1"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all ${
                  isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abhiranjan-kumar-b65478358"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all ${
                  isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.418-.645 1.162-1.563 2.828-1.563 2.064 0 3.613 1.347 3.613 4.245v5.616zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.959-1.715 1.188 0 1.915.759 1.915 1.715 0 .953-.727 1.715-1.959 1.715zm1.959 11.597H3.349V9.861h3.947v10.591zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                </svg>
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all ${
                  isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M3 21s9.5-1.5 15-9" />
                </svg>
              </a> */}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex justify-center items-center"
          >
            <div
              className={`relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ${
                isDark
                  ? 'ring-2 ring-gray-700 shadow-blue-500/20'
                  : 'ring-2 ring-gray-200 shadow-blue-600/20'
              }`}
            >
              <motion.img
                src="/ABHI_PIC.jpg"
                alt="Abhiranjan Kumar"
                className="w-full h-full object-cover"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-tr from-blue-500/20 to-purple-500/20'
                    : 'bg-gradient-to-tr from-blue-600/10 to-purple-600/10'
                }`}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className={`p-2 rounded-full ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            aria-label="Scroll to next section"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
