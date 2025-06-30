import { Users, Lightbulb, Globe, Leaf } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: Lightbulb,
      title: "Design Thinking & Entrepreneurship",
      description: "Enhancing creativity, educational and career development of young people through innovative design thinking methodologies and entrepreneurial skills.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["Career Development", "Creative Skills"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Digital Participation",
      description: "Supporting young people to get actively and digitally engaged through innovative digital tools and platforms for meaningful participation in society.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["Digital Engagement", "Youth Participation"],
      color: "accent"
    },
    {
      icon: Users,
      title: "Intercultural Dialogue & Peace-building",
      description: "Promoting intercultural understanding between cultures to limit prejudices and hate speech while evolving Euro-Mediterranean partnerships in the youth sector.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["Euro-Med Partnerships", "Cultural Understanding"],
      color: "secondary"
    },
    {
      icon: Leaf,
      title: "Sustainable Development",
      description: "Promoting sustainable development practices and environmental awareness among youth through hands-on projects and community engagement initiatives.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["Sustainable Projects", "Community Impact"],
      color: "secondary"
    }
  ];

  return (
    <section id="programs" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Programs</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our main priority areas focused on empowering young people and enhancing their potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow">
                <img src={program.image} alt={`${program.title} in action`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className={`w-12 h-12 bg-${program.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`text-${program.color} w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">{program.title}</h3>
                  <p className="text-neutral-600 mb-4">
                    {program.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-neutral-500">
                    <span>{program.stats[0]}</span>
                    <span>{program.stats[1]}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
