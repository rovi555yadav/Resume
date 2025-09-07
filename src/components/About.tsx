import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Experienced in both frontend and backend technologies',
    },
    {
      icon: Server,
      title: 'Microservices Architecture',
      description: 'Building scalable and maintainable distributed systems',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Proficient in SQL and NoSQL database technologies',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Docker containerization and deployment strategies',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate software engineer with a strong foundation in computer science 
                and hands-on experience in building robust, scalable applications. Currently working 
                at Niral Networks, I specialize in microservices architecture and real-time analytics systems.
              </p>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My journey in software development has equipped me with expertise in Java ecosystem, 
                Spring Boot, database management, and modern frontend technologies. I enjoy solving 
                complex problems and building solutions that make a real impact.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical papers and community participation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <item.icon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
