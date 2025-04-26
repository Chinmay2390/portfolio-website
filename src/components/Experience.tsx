import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
    title: 'Full Stack Developer Intern',
    company: 'Scalefull Technologies LLP',
    location: 'Akurdi, Pune',
    period: 'Dec 2024 – Jan 2025',
    description: [
      'Developed and maintained scalable web applications using React, Node.js, and MongoDB, serving 100K+ users',
      'Designed and implemented RESTful APIs for seamless front-end/back-end communication',
      'Enhanced security by integrating JWT-based user authentication and optimizing database queries for performance',
      'Architected microservices infrastructure reducing response time by 40%',
      'Mentored junior developers and established coding best practices',
      'Collaborated with cross-functional product teams to deliver features ahead of schedule and ensure end-to-end solutions'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    companyUrl: '#'
  }

  ];

  const education = [
    {
      degree: 'BE - Computer Engineering',
      school: '',
      location: 'Akurdi, Pune',
      period: '2023 - 2026',
      details: 'CGPA: 8.88/10.0',
      courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></div>
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900"></div>
                    
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                          <div className="flex items-center space-x-4 text-blue-400 mb-2">
                            <a 
                              href={exp.companyUrl}
                              className="hover:text-blue-300 transition-colors duration-200 flex items-center"
                            >
                              {exp.company}
                              <ExternalLink size={14} className="ml-1" />
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end text-gray-400 text-sm">
                          <div className="flex items-center mb-1">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 flex items-start">
                            <span className="text-blue-400 mr-2 mt-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></div>
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 mb-2">{edu.school}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{edu.period}</span>
                    <MapPin size={14} className="mr-1" />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-gray-300 mb-3">{edu.details}</p>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400 font-medium">Relevant Coursework:</p>
                    {edu.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="inline-block px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs mr-2 mb-1"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            {/* <div>
              <h3 className="text-xl font-semibold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-white font-medium">AWS Certified Developer</h4>
                  <p className="text-gray-400 text-sm">Amazon Web Services • 2023</p>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-white font-medium">React Developer Certification</h4>
                  <p className="text-gray-400 text-sm">Meta • 2022</p>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-white font-medium">Google Cloud Professional</h4>
                  <p className="text-gray-400 text-sm">Google Cloud • 2022</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;