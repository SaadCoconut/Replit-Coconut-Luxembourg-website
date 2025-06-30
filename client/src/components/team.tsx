export default function Team() {
  const teamMembers = [
    {
      name: "Sophie Laurent",
      title: "National Coordinator",
      bio: "Youth work specialist with extensive experience in non-formal education and European project management. Expert in intercultural learning methodologies.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Alex Mueller", 
      title: "Project Manager",
      bio: "Digital innovation advocate specializing in youth entrepreneurship and design thinking. Coordinates youth exchanges and training programs across the network.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Amira Ben Salem",
      title: "Partnership Development Officer", 
      bio: "Expert in Euro-Mediterranean cooperation with a focus on building bridges between European and Mediterranean youth organizations and fostering cultural exchange.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Leadership Team</h2>
          <p className="text-xl text-neutral-600">Experienced professionals dedicated to creating lasting change</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src={member.image} alt={`${member.name} profile`} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.title}</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
