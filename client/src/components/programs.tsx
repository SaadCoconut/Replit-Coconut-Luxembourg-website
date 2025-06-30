import { Lightbulb, Heart, Wifi, Leaf, Plus } from "lucide-react";
import { useLocation } from "wouter";

export default function Programs() {
  const [, setLocation] = useLocation();
  
  const programs = [
    {
      icon: Lightbulb,
      title: "Entrepreneurship & Design Thinking",
      bgColor: "bg-amber-800",
      textColor: "text-white",
      route: "design-thinking"
    },
    {
      icon: Heart,
      title: "Intercultural Learning & Peacebuilding", 
      bgColor: "bg-amber-600",
      textColor: "text-white",
      route: "intercultural-dialogue"
    },
    {
      icon: Wifi,
      title: "Digital Youth Participation",
      bgColor: "bg-orange-600", 
      textColor: "text-white",
      route: "digital-participation"
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      bgColor: "bg-yellow-200",
      textColor: "text-orange-600",
      route: "sustainable-development"
    }
  ];

  return (
    <section id="programs" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">OUR PRIORITIES</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className={`${program.bgColor} rounded-3xl p-8 relative overflow-hidden h-64 flex flex-col justify-between`}>
                <div className="absolute top-4 right-4">
                  <button 
                    className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer"
                    onClick={() => {
                      setLocation(`/projects/${program.route}`);
                    }}
                    title={`View ${program.title} projects`}
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
                
                <div>
                  <h3 className={`text-lg font-semibold ${program.textColor} text-center leading-tight`}>
                    {program.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
