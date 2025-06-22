
import { Code, Globe, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Full Stack Solutions",
      description: "End-to-end development services from frontend to backend",
      features: ["MERN Stack", "MEAN Stack", "Django + React", "Laravel + Vue"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience",
      features: ["Code Splitting", "Lazy Loading", "CDN Integration", "Caching Strategies"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing support, security updates, and application maintenance",
      features: ["Security Audits", "Regular Updates", "Backup Solutions", "24/7 Monitoring"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const handleGetInTouch = () => {
    const options = [
      { label: "Call", action: () => window.open("tel:+919324572415") },
      { label: "Email", action: () => window.open("mailto:atharvpatil781@gmail.com") },
      { label: "WhatsApp", action: () => window.open("https://wa.me/919324572415") }
    ];
    
    const choice = window.confirm("Choose contact method:\n1. OK for Call\n2. Cancel to see more options");
    
    if (choice) {
      options[0].action();
    } else {
      const emailChoice = window.confirm("Choose:\n1. OK for Email\n2. Cancel for WhatsApp");
      if (emailChoice) {
        options[1].action();
      } else {
        options[2].action();
      }
    }
  };

  const handleScheduleCall = () => {
    window.open("tel:+919324572415");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how we can bring your ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetInTouch}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </button>
              <button 
                onClick={handleScheduleCall}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
