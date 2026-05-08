import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

export default function Projects({ isDark }: ProjectsProps) {
  const projects: Project[] = [
    {
      id: 1,
      title: 'organizing-and-managing-student-extracurricular-activities',
      description:
        'A web-based system designed to organize and manage student extracurricular activities efficiently. The platform helps students and administrators handle event registration, activity scheduling, participation tracking, announcements, and club management in a centralized system.',
      image: '/organizing-and-managing.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/ABHIRANJAN-KUMAR1/organizingAndManagingStudentExtracurricularActivities/tree/main/organizing-and-managing-student-extracurricular-activities-main',
      liveLink: 'https://frontend-sem-2-fsad-ftyf.vercel.app/',
    },
    {
      id: 2,
      title: 'LibrarySystem',
      description:
      'A digital library management system that allows users to manage books, issue and return records, member details, and library inventory efficiently. The system provides features for book searching, availability tracking, and maintaining student or user borrowing history.',
      image: '/LibraryPic.png',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      githubLink: 'https://github.com/ABHIRANJAN-KUMAR1/LibrarySystem',
      liveLink: 'https://abhiranjansingh.pythonanywhere.com/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gray-700 hover:shadow-blue-500/20'
                  : 'bg-white hover:shadow-blue-600/20'
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-300">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 flex items-center justify-center gap-4 ${
                    isDark
                      ? 'bg-gray-900/70'
                      : 'bg-gray-900/70'
                  }`}
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} className="text-gray-900" />
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="View live"
                    >
                      <ExternalLink size={20} className="text-gray-900" />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        isDark
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
