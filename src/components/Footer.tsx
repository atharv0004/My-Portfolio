import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ASM VENTURES
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming ideas into digital excellence through innovative web solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>New Panvel , Thane</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#team" className="hover:text-purple-400 transition-colors">Team</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:atharvpatil781@gmail.com" className="hover:text-purple-400 transition-colors">
                  atharvpatil781@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:sahilbagate8108@gmail.com" className="hover:text-purple-400 transition-colors">
                  sahilbagate8108@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919324572415" className="hover:text-purple-400 transition-colors">
                  +91 9324572415
                </a>
              </div><div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919324572415" className="hover:text-purple-400 transition-colors">
                  +91 9136212156
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by ASM Ventures © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
