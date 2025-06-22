import { ArrowRight, Code, Zap } from "lucide-react";

const Hero = () => {
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

  const handleExploreWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-full">
              <Code className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            ASM VENTURES
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming Ideas into Digital Excellence
          </p>
          
          <div className="flex justify-center items-center space-x-4 mb-12">
            <Zap className="h-8 w-8 text-yellow-400 animate-pulse" />
            <span className="text-lg text-gray-300">Innovative Web Solutions</span>
            <Zap className="h-8 w-8 text-yellow-400 animate-pulse" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleExploreWork}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={handleGetInTouch}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
