import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code size={20} className="text-blue-400" />
            <span className="text-lg font-semibold">Ravi Yadav</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="mt-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} Ravi Yadav. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
