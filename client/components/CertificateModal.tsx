import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  issuer?: string;
  date?: string;
  onClose: () => void;
  isDark: boolean;
}

export default function CertificateModal({
  isOpen,
  image,
  title,
  issuer,
  date,
  onClose,
  isDark,
}: CertificateModalProps) {
  const isPdf = image.toLowerCase().split('?')[0].endsWith('.pdf');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={title}
              className={`relative max-w-2xl w-full rounded-xl shadow-2xl overflow-hidden ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h2
                  className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {title}
                </h2>

                {(issuer || date) && (
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {issuer ? issuer : null}
                    {issuer && date ? ' • ' : null}
                    {date ? date : null}
                  </p>
                )}

                <div className="flex items-center gap-2 mb-4">
                  <a
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
                      isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    Open
                  </a>
                  <a
                    href={image}
                    download
                    className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
                      isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    Download
                  </a>
                </div>

                {isPdf ? (
                  <div className={`w-full h-[70vh] rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className="text-center px-6">
                      <div className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        PDF Document
                      </div>
                      <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        This certificate is a PDF file. Click "Open" to view it in a new tab or "Download" to save it.
                      </p>
                    </div>
                  </div>
                ) : (
                  <motion.img
                    src={image}
                    alt={title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full rounded-lg"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
