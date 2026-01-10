import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
        isDark
          ? 'bg-gray-900 border-gray-800 text-gray-400'
          : 'bg-white border-gray-200 text-gray-600'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Left Section */}
          <div className="text-center sm:text-left">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              Made with
              <Heart size={16} className="text-red-500 fill-red-500" />
              by Abhiranjan Kumar
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ABHIRANJAN-KUMAR1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhiranjan-kumar-b65478358"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a> */}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-700"
        >
          <p className="text-sm">
            © {currentYear} Abhiranjan Kumar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
