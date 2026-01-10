import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS (Replace with your actual service ID, template ID, and public key)
  // Get these from https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
                user_email: formData.email,
                message: formData.message,
                to_email: 'your-email@example.com', // Replace with your email
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'abhiranjansinghsci@gmail.com',
      href: 'mailto:abhiranjansinghsci@gmail.com',
    },
    // {
    //   icon: <Phone size={24} />,
    //   label: 'Phone',
    //   value: '9304159633',
    //   href: 'tel:9304159633',
    // },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/ABHIRANJAN-KUMAR1',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhiranjan-kumar-b65478358',
    },
    // {
    //   label: 'Twitter',
    //   href: 'https://twitter.com',
    // },
  ];

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`}
          />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Let's Talk!
            </h3>
            <p
              className={`mb-8 text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I'm always open to new opportunities and interesting projects. Feel
              free to reach out to discuss collaborations, internship opportunities,
              or just to say hello.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                    isDark
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-white hover:bg-gray-100 text-gray-900'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                    }`}
                  >
                    <div
                      className={
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }
                    >
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm opacity-70">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-gray-400/20">
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-white'}`}
            >
              {/* Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${
                    isDark
                      ? 'bg-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500'
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600'
                  }`}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${
                    isDark
                      ? 'bg-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500'
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600'
                  }`}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all resize-none ${
                    isDark
                      ? 'bg-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500'
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600'
                  }`}
                  required
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 p-4 rounded-lg bg-green-500/20 text-green-400"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 p-4 rounded-lg bg-red-500/20 text-red-400"
                >
                  {errorMessage || 'Failed to send message. Please try again.'}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status !== 'loading' ? 1.02 : 1 }}
                whileTap={{ scale: status !== 'loading' ? 0.98 : 1 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  status === 'loading'
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg'
                } ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-blue-500/50'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-600/50'
                }`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
