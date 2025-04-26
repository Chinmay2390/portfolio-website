import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database size={32} />,
      title: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 75 },
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Photoshop', level: 70 },
      ],
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            I work with modern technologies to build scalable and efficient solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology logos/icons section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'Git'].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800/30 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;