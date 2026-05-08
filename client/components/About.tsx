import { motion } from 'framer-motion';
import { BookOpen, Target } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
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

  return (
    <section
      id="about"
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
            About Me
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
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Introduction */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-2xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Hi, I'm Abhiranjan Kumar
            </h3>
            <p
              className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I'm a fresher developer passionate about creating beautiful,
              functional web applications. With a strong foundation in Python and
              React, I'm excited to contribute to innovative projects and grow as
              a developer. I believe in writing clean code and continuously
              learning new technologies.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I'm currently seeking internship opportunities where I can apply my
              skills, collaborate with experienced developers, and make a
              meaningful impact on real-world projects.
            </p>
          </motion.div>

          {/* Education & Career */}
          <motion.div variants={itemVariants}>
            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDark
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  <BookOpen size={24} />
                </div>
                <h4
                  className={`text-xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Education
                </h4>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                <h5
                  className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Bachelor of Technology 
                </h5>
                <p
                  className={`mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Computer Science & Engineering <span className="font-semibold">(Honours with Experiential Learning)</span>
                </p>
                <p
                  className={`text-sm ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}
                >
                  Graduation: 2024-28
                </p>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDark
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-purple-100 text-purple-600'
                  }`}
                >
                  <Target size={24} />
                </div>
                <h4
                  className={`text-xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Career Objective
                </h4>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                <p
                  className={`leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  I am a passionate Computer Science Engineering fresher with hands-on experience in Python and React, eager to start my career in software development. I am looking for opportunities where I can learn from experienced professionals, work on meaningful projects, and grow as a full-stack developer.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
