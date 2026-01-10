import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-8"
        >
          <h1 className={`text-7xl sm:text-8xl font-bold mb-4 ${
            isDark
              ? 'text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text'
              : 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'
          }`}>
            404
          </h1>
        </motion.div>

        <p className={`text-2xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Page Not Found
        </p>

        <p className={`text-lg mb-8 max-w-md mx-auto ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Sorry, the page you're looking for doesn't exist. Let's get you back on track!
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
            isDark
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-600/50'
          }`}
        >
          <Home size={20} />
          Return to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
