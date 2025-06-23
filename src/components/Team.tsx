import { Mail, Phone } from "lucide-react";

const Team = () => {
  const developers = [
    {
      name: "Atharv Patil",
      role: "Full Stack Developer",
      email: "atharvpatil781@gmail.com.com",
      phone: "+91 9324572415",
      skills: ["ReactJS", "Node.js", "MongoDB", "AWS" , "Tailwind CSS"],
      image: "https://res.cloudinary.com/dxqsygmg1/image/upload/v1750574078/WhatsApp_Image_2025-06-22_at_12.04.12_PM_n5zm97.jpg"
    },
    {
      name: "Sahil Bagate",
      role: "Backend Specialist & Full Stack Devloper",
      email: "sahilbagate8108@gmail.com",
      phone: "+91 9136212156",
      skills: ["Java", "Springboot", "ReactJS", "TailwindCSS" , "MongoDb" , "SQL"],
      image: "https://res.cloudinary.com/dxqsygmg1/image/upload/v1750573927/sahil_zsuiu5.jpg"
    },
    {
      name: "Mrunali Shinde",
      role: "Full Stack Devloper & Ui Specialist",
      skills: ["Python", "ReactJS", "TailwindCSS", "SQL" , "Canva" , "Figma"],
      image: "https://res.cloudinary.com/dxqsygmg1/image/upload/v1750573934/WhatsApp_Image_2025-06-22_at_11.59.23_AM_dwlslf.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developers dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
            >
              <div className="relative mb-6">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-400"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Available
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{dev.name}</h3>
              <p className="text-purple-300 font-medium mb-4">{dev.role}</p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {dev.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="space-y-3">
                {dev.email && (
                  <a
                    href={`mailto:${dev.email}`}
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4" />
                    {dev.email}
                  </a>
                )}
                {dev.phone && (
                  <a
                    href={`tel:${dev.phone}`}
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Phone className="h-4 w-4" />
                    {dev.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
