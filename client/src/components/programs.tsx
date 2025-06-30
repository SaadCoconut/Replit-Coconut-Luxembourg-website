import { Users, Lightbulb, Globe, Leaf } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: Lightbulb,
      title: "Entrepreneurship & Design Thinking",
      description: "Empowering young entrepreneurs through innovative design thinking methodologies and business development skills for creating sustainable social ventures.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["100+ Projects", "Youth Entrepreneurs"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Intercultural Learning & Peacebuilding",
      description: "Fostering understanding and cooperation between diverse communities through intercultural dialogue, conflict resolution, and peacebuilding initiatives.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["70+ Partners", "Cross-cultural Exchange"],
      color: "secondary"
    },
    {
      icon: Globe,
      title: "Digital Youth Participation",
      description: "Enhancing digital literacy and promoting active youth participation in democratic processes through innovative digital tools and platforms.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["4,000+ Youth", "Digital Skills"],
      color: "accent"
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Promoting environmental awareness and sustainable practices among youth through hands-on projects and green leadership development programs.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["Green Leaders", "Eco Projects"],
      color: "secondary"
    }
  ];

  return (
    <section id="programs" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Programs</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive initiatives designed to create lasting impact across multiple sectors
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
