import React from 'react';
import { Download, User, Heart, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="text-blue-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Get to know me</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with 1+ years of experience creating 
              digital solutions that make a difference. I love turning complex problems 
              into simple, beautiful, and intuitive experiences.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and always staying up-to-date with the 
              latest industry trends.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400 mb-1">1+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>

            <a href="/resume.pdf" download>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </a>

          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg">
                  <Heart className="text-red-400" size={24} />
                  <div>
                    <h4 className="font-semibold text-white">Passionate</h4>
                    <p className="text-gray-400 text-sm">Love what I do every day</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg">
                  <Coffee className="text-yellow-400" size={24} />
                  <div>
                    <h4 className="font-semibold text-white">Dedicated</h4>
                    <p className="text-gray-400 text-sm">Committed to excellence</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg">
                  <User className="text-blue-400" size={24} />
                  <div>
                    <h4 className="font-semibold text-white">Collaborative</h4>
                    <p className="text-gray-400 text-sm">Great team player</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;