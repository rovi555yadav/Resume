import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Education
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full mr-6">
                <GraduationCap size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Bachelor of Technology</h3>
                <p className="text-xl text-blue-600 font-semibold">Computer Science and Engineering</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-gray-600" />
                <span className="text-gray-700">Dr. A. P. J. Abdul Kalam Technical University, Ghaziabad, UP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={20} className="text-gray-600" />
                <span className="text-gray-700">Aug. 2020 – March 2024</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <Award size={20} className="text-green-600" />
              <span className="text-lg font-semibold text-gray-800">GPA: 8.0/10.0</span>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Key Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Software Engineering', 'Computer Networks', 'Operating Systems', 'Web Development'].map((course, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
