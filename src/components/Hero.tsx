import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                Chinmay Kamlaskar
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
              Full Stack Developer & Creative Problem Solver
            </p>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences using modern technologies. 
            Passionate about creating clean, efficient code and beautiful user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              View My Work
            </button>
                      <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-200"
          >
            Download Resume
          </a>

          </div>

          <div className="flex items-center justify-center space-x-6 pt-8">
            <a
              href="https://github.com/Chinmay2390"
              className="p-3 text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/chinmay-kamlaskar-5598a2242/"
              className="p-3 text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:chinmaykamlaskar@gmail.com"
              className="p-3 text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;