import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'C', 'C++', 'SQL', 'NoSQL', 'HTML5', 'CSS', 'TypeScript']
    },
    {
      category: 'Frameworks & Technologies',
      skills: ['Spring Boot', 'React.js', 'Node.js', 'Express.js', 'Hibernate', 'JUnit']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'TimescaleDB']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Docker', 'Apache Kafka', 'JMeter', 'Postman', 'Git', 'GitHub', 'Linux']
    },
    {
      category: 'Development Tools',
      skills: ['IntelliJ IDEA', 'Eclipse', 'Spring Tool Suite', 'Mongo Compass', 'JConsole']
    },
    {
      category: 'Architecture & Design',
      skills: ['Microservices', 'RESTful APIs', 'Monolithic Programming', 'Java Multi-Module Architecture', 'System Design']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Competencies</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'System Design', 'Performance Optimization'].map((competency, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium"
                >
                  {competency}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
