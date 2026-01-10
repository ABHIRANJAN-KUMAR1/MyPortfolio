import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
  bgColor: string;
}

export default function Skills({ isDark }: SkillsProps) {
  const skillCategories: Skill[] = [
    {
      category: 'Frontend',
      icon: <Code size={28} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion'],
      color: isDark ? 'text-blue-400' : 'text-blue-600',
      bgColor: isDark ? 'bg-blue-500/20' : 'bg-blue-100',
    },
    {
      category: 'Backend',
      icon: <Server size={28} />,
      skills: ['Python', 'Flask', 'Django', 'MySQL', 'REST APIs', 'Express.js'],
      color: isDark ? 'text-purple-400' : 'text-purple-600',
      bgColor: isDark ? 'bg-purple-500/20' : 'bg-purple-100',
    },
    {
      category: 'Tools & Platforms',
      icon: <Wrench size={28} />,
      skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Eclipse', 'Jupyter Notebook'],
      color: isDark ? 'text-green-400' : 'text-green-600',
      bgColor: isDark ? 'bg-green-500/20' : 'bg-green-100',
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
      id="skills"
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
            Skills & Expertise
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full`}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-xl transition-all duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-lg mb-6 ${category.bgColor} ${category.color}`}
              >
                {category.icon}
              </div>

              {/* Category Title */}
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 ${
                      isDark ? 'text-gray-400' : 'text-gray-700'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        category.category === 'Frontend'
                          ? 'bg-blue-500'
                          : category.category === 'Backend'
                            ? 'bg-purple-500'
                            : 'bg-green-500'
                      }`}
                    />
                    <span className="text-lg">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
