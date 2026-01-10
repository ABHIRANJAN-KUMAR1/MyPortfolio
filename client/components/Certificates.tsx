import { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateModal from './CertificateModal';

interface CertificatesProps {
  isDark: boolean;
}

interface Certificate {
  id: number;
  title: string;
  image: string;
  issuer: string;
  date?: string;
}

export default function Certificates({ isDark }: CertificatesProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      image: '/certificates/Oracle.pdf',
      issuer: 'Oracle University',
      
    },
    {
      id: 2,
      title: 'Introduction to Machine Learning',
      image: '/certificates/Machine%20Learning%20certificate.pdf',
      issuer: 'IIT Madras',
    },
    {
      id: 3,
      title: 'MongoDB Associate Developer',
      image: '/certificates/mongoDb.pdf',
      issuer: 'MongoDb',
    },
    {
      id: 4,
      title: 'GitHub Copilot Fundamentals',
      image: '/certificates/Github%20Copilot%20certificate.pdf',
      issuer: 'Microsoft',
    },
    {
      id: 5,
      title: 'MultiCloud Network Associate',
      image: '/certificates/Aviatrix.pdf',
      issuer: 'Aviatrix',
    },
    {
      id: 6,
      title: 'Certified Essentials Automation Professional',
      image: '/certificates/AutomationAnywhere.pdf',
      issuer: 'Automation Anywhere',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="certificates"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-900' : 'bg-white'
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
            Certificates & Achievements
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`}
          />
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              onClick={() => setSelectedCertificate(certificate)}
              className={`cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 group ${
                isDark
                  ? 'bg-gray-800 hover:shadow-blue-500/20'
                  : 'bg-gray-50 hover:shadow-blue-600/20'
              }`}
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden bg-gray-300">
                {certificate.image.toLowerCase().split('?')[0].endsWith('.pdf') ? (
                  <motion.div
                    className={`w-full h-full flex items-center justify-center ${
                      isDark ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center px-4">
                      <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        PDF
                      </div>
                      <div className={`text-xs mt-1 line-clamp-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {certificate.title}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div
                  className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark ? 'bg-gray-900/80' : 'bg-gray-900/60'
                  }`}
                >
                  <span className="text-white font-semibold">Click to View</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className={`font-semibold mb-2 text-sm line-clamp-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {certificate.title}
                </h3>
                <p
                  className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}
                >
                  {certificate.issuer}
                </p>
                {certificate.date && (
                  <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {certificate.date}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          image={selectedCertificate.image}
          title={selectedCertificate.title}
          issuer={selectedCertificate.issuer}
          date={selectedCertificate.date}
          onClose={() => setSelectedCertificate(null)}
          isDark={isDark}
        />
      )}
    </section>
  );
}
