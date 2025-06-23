import { ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Economic Group Website",
      description: "Corporate website for Economic Group showcasing their business services and solutions",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      link: "https://www.economicgroup.in/",
      status: "Live",
      image: "https://res.cloudinary.com/dxqsygmg1/image/upload/v1750694766/Screenshot_2025-06-23_212914_sa8yyp.png"
    },
    {
      title: "Sai Baba Logistics",
      description: "Comprehensive logistics and transportation management system with real-time tracking",
      tech: ["React", "Express", "MySQL", "Maps API"],
      link: "https://saibabalogisticsandcompany.com/",
      status: "Live",
      image: "https://res.cloudinary.com/dxqsygmg1/image/upload/v1750694868/Screenshot_2025-06-23_213710_sdht7h.png"
    },
    {
      title: "VK Globals",
      description: "Global business solutions platform with international trade and commerce features",
      tech: ["React", "TypeScript", "PostgreSQL", "AWS"],
      link: "https://www.vk-globals.com/",
      status: "Live",
      image: "https://res.cloudinary.com/dxqsygmg1/image/upload/v1750695020/63236e7a-4fa0-4527-82cd-d9610edb7e3e.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest innovations and successful implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Live' ? 'bg-green-500 text-white' :
                    project.status === 'Beta' ? 'bg-yellow-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
