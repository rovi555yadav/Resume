import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Kitchen Store Web',
      description: 'Developed a comprehensive kitchen management platform enabling users to check ingredient availability, view recipe descriptions, and access cooking videos. Streamlined meal planning with real-time ingredient tracking and multimedia recipe guidance.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Postman'],
      features: [
        'Real-time ingredient availability tracking',
        'Recipe management with multimedia support',
        'Video tutorials integration',
        'User-friendly meal planning interface'
      ],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Weather Forecasting App',
      description: 'Built a weather forecasting app allowing users to select a city and view current weather conditions including temperature, precipitation, humidity, and wind. Features intuitive interface and real-time data integration.',
      techStack: ['JavaScript', 'HTML', 'CSS', 'RESTful API'],
      features: [
        'City-based weather search',
        'Real-time weather data',
        'Comprehensive weather metrics',
        'Responsive design',
        'Clean and intuitive UI'
      ],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Play size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
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

export default Projects;
