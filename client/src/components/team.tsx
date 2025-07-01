export default function Team() {
  const teamMembers = [
    {
      name: "Gilles Evrard Essuman",
      title: "President of Coconut Luxembourg",
      bio: "Doctoral researcher in economic geography at the University of Luxembourg. His work focuses on community economics, territorial development, and social innovation. Previously engaged as a rapporteur and facilitator in several CoconutWork projects, he led the creation of CoconutWork Luxembourg to widen the network's impact across Europe.",
      image: "@assets/Screenshot 2025-07-02 at 06.41.25_1751409722550.png"
    },
    {
      name: "Fahd Mohammadi", 
      title: "Coordinator and Project Manager of Coconutwork",
      bio: "Youth worker and project manager with extensive experience in international research, training and innovation projects. Expert in entrepreneurial learning, intercultural dialogue, and youth participation. Holds double Master degrees in Entrepreneurship and International Business from Universities of CUNY and University of Montpellier.",
      image: "@assets/Screenshot 2025-07-02 at 06.41.43_1751409722549.png"
    },
    {
      name: "Derrick S. Vormawor",
      title: "Project Manager at Coconut Luxembourg",
      bio: "Results-driven Project Management and Communications Professional with strong background in leading strategic initiatives across technology, business, and corporate sectors. With an MSc in Web and Data Science and a BSc in Banking and Finance, he combines analytical expertise with structured project execution to drive organizational success.",
      image: "@assets/Screenshot 2025-07-02 at 06.41.34_1751409722550.png"
    },
    {
      name: "Rasa Liepina",
      title: "Social Media Coordinator",
      bio: "From Riga, Latvia, Rasa began her work with CoconutWork in early 2022 as an Erasmus+ project participant. Inspired by her upbringing and family, she embraced the love of travel and felt an international calling that led her to the UK, graduating from the University of Worcester in Media & Cultures. With a vintage camera, she captures adventures and embodies the vibrant spirit of the team.",
      image: "@assets/Screenshot 2025-07-02 at 06.41.34_1751409722550.png"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Leadership Team</h2>
          <p className="text-xl text-neutral-600">Experienced professionals dedicated to creating lasting change</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src={member.image} alt={`${member.name} profile`} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3 text-sm">{member.title}</p>
              <p className="text-neutral-600 text-xs leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
