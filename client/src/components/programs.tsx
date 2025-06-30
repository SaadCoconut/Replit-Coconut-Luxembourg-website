import { GraduationCap, Heart, TrendingUp } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "Building quality educational infrastructure and providing teacher training programs that have improved literacy rates by 40% in partner communities.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["25 Schools Built", "500+ Teachers Trained"],
      color: "primary"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Establishing mobile clinics and training community health workers to provide essential healthcare services in remote areas.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["15 Clinics", "50,000+ Patients"],
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description: "Microfinance programs and vocational training that have helped create over 2,000 sustainable jobs in rural communities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stats: ["2,000+ Jobs", "85% Success Rate"],
      color: "accent"
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
        
        <div className="grid md:grid-cols-3 gap-8">
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
