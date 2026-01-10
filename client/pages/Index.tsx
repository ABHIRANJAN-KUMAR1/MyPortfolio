import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface IndexProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Index({ isDark, onThemeToggle }: IndexProps) {
  return (
    <div className={isDark ? 'dark' : ''}>
      <Navbar isDark={isDark} onThemeToggle={onThemeToggle} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Certificates isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
