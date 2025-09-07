import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Niral Networks Private Limited',
      location: 'Bengaluru, Karnataka',
      period: 'July 2024 – Present',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'MongoDB', 'JUnit', 'Apache Kafka', 'RESTful services', 'NoSQL', 'JMeter', 'Git', 'Docker'],
      achievements: [
        'Designed and improved microservices with high coding standards, including real-time analytics for UE-GNB connections and data usage tracking using TimescaleDB and Spring Boot',
        'Implemented subscriber management using MongoDB and MySQL for seamless user data handling',
        'Built a microservice to parse Wireshark dumps for network analysis and used JConsole and JMeter to monitor system performance',
        'Managed Dockerized environments, integrated REST APIs with WebClient, and utilized Hibernate for efficient database access',
        'Tested APIs with Postman and worked extensively on Linux for deployments, service monitoring, and system optimizations'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Thinkhumble Creative Solutions Pvt. Ltd.',
      location: 'Remote',
      period: 'Apr 2024 – June 2024',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'Docker'],
      achievements: [
        'Contributed to backend development using Java Spring Boot, integrating MySQL and MongoDB for data management',
        'Designed scalable architectures using HLD, LLD, UML diagrams, and flowcharts',
        'Integrated payment gateways and ensured reliable, conflict-free payment flows for clients and users',
        'Used Docker for containerization and streamlined deployment across multiple environments'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-2 text-blue-600 mb-2">
                      <Building size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
