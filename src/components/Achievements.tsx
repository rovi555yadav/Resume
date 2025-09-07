import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Users, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: Code,
      title: '500+ DSA Questions',
      description: 'Solved 500+ Data Structures and Algorithms questions on various competitive programming platforms',
      category: 'Programming'
    },
    {
      icon: Users,
      title: 'Red Bricks Hackathon',
      description: 'Participated in Red Bricks Hackathon, showcasing problem-solving skills and innovative thinking',
      category: 'Competition'
    },
    {
      icon: BookOpen,
      title: 'IEEE Research Paper - Plant Disease Prediction',
      description: 'Published IEEE paper on "Disease Prediction in Plants: using new Era Technologies"',
      category: 'Research'
    },
    {
      icon: BookOpen,
      title: 'IEEE Research Paper - Yoga Posture Recognition',
      description: 'Published IEEE paper on "Technological Insights into Yoga Posture recognition: A State of Art Review"',
      category: 'Research'
    }
  ];

  const categoryColors: Record<string, string> = {
    Programming: 'bg-green-100 text-green-800',
    Competition: 'bg-purple-100 text-purple-800',
    Research: 'bg-blue-100 text-blue-800'
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <achievement.icon size={24} className="text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[achievement.category]}`}>
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"
          >
            <Trophy size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
            <p className="text-blue-100">
              Committed to staying updated with the latest technologies and contributing to the developer community 
              through research, competitive programming, and open-source contributions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
