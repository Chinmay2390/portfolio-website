import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Chinmay Kamlaskar</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              and solving complex problems with elegant solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Chinmay2390"
                className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/chinmay-kamlaskar-5598a2242/"
                className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="chinmaykamlaskar@gmail.com"
                className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.slice(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="font-medium">Email:</span><br />
                chinmaykamlaskar@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Location:</span><br />
                Akurdi,Pune
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Available for:</span><br />
                Freelance projects & Full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by Chinmay Kamlaskar</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;