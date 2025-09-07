import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const contactInfo = [
    { icon: MapPin, text: 'Bengaluru, Karnataka', href: null },
    { icon: Mail, text: 'raviabesyadav@gmail.com', href: 'mailto:raviabesyadav@gmail.com' },
    { icon: Phone, text: '+91 8219322472', href: 'tel:+918219322472' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://linkedin.com/in/ravi-yadav-745a48200/' },
    { icon: Github, text: 'GitHub Profile', href: 'https://github.com/rovi555yadav' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-xl"
            >
              RY
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Ravi Yadav
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Software Engineer
            </p>
            
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Passionate software engineer specializing in microservices architecture, 
              Spring Boot, and full-stack development. Currently building scalable solutions 
              at Niral Networks with expertise in Java, React, and cloud technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-center space-x-3 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <item.icon size={20} className="text-blue-600" />
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-gray-700">{item.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
            
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
