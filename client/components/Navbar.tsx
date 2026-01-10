import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export default function Navbar({ onThemeToggle, isDark }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${
              isDark
                ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800'
                : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
            }`
          : `${isDark ? 'bg-gray-900/80' : 'bg-white/80'}`
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
            >
              AK
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className={isDark ? 'text-white' : 'text-gray-900'} />
              ) : (
                <Menu size={24} className={isDark ? 'text-white' : 'text-gray-900'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden pb-4 space-y-2 ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
