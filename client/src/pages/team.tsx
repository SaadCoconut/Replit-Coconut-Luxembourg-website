import gillesPhoto from "@assets/E8901D19-F85E-4B20-AD5E-BB24B6C1926D_1751419769653.jpeg";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Gilles Evrard Essuman",
      title: "President, Coconut Luxembourg",
      bio: "Committed youth advocate and social innovation expert with over a decade of experience designing and coordinating international projects that empower young people and local communities.",
      fullDescription: "Gilles is a committed youth advocate and social innovation expert with over a decade of experience designing and coordinating international projects that empower young people and local communities. As President of Coconut Luxembourg, he leads the organisation's mission to create meaningful learning opportunities, foster active citizenship, and strengthen social inclusion across Europe. With a background in economic geography and a PhD focused on community-led development and socio-territorial transformation, Gilles brings both academic insight and hands-on experience to the NGO's activities. He has successfully managed and consulted on numerous EU-funded projects, particularly under Erasmus+ and Horizon Europe, supporting youth participation, social entrepreneurship, and community-driven initiatives in more than 20 countries. A strong believer in collaboration and creativity, Gilles integrates design thinking and participatory methods into Coconut's programmes to ensure young people are not only beneficiaries but active shapers of change.",
      image: gillesPhoto
    },
    {
      name: "Fahd Mohammadi", 
      title: "Coordinator and Project Manager of Coconutwork",
      bio: "Youth worker and project manager with extensive experience in international research, training and innovation projects.",
      fullDescription: "Fahd is a youth worker and project manager of numerous international research, training and innovation projects, particularly referent of the areas of entrepreneurial learning, intercultural dialogue, and youth participation. Fahd has managed dozens of European projects covering the programs of Erasmus+, Europe for citizens, ISFP, CERV, and other local initiatives and actions at the Euro-Mediterranean level. He has a solid knowledge in the management for youth events, cultural and recreational activities and experience in organizing in-service training courses and participation in youth organizations for developing innovative programs for youngsters' to stir their creativity. He holds a double Master degree in Entrepreneurship and International Business from the Universities of CUNY (City University of New York) and the University of Montpellier.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
    },
    {
      name: "Derrick S. Vormawor",
      title: "Project Manager at Coconut Luxembourg",
      bio: "Results-driven Project Management and Communications Professional with strong background in leading strategic initiatives across technology, business, and corporate sectors.",
      fullDescription: "Derrick S. Vormawor is a results-driven Project Management and Communications Professional with a strong background in leading strategic initiatives across technology, business, and corporate sectors. With an MSc in Web and Data Science and a BSc in Banking and Finance, he combines analytical expertise with structured project execution to drive organizational success. As a Project Manager at Coconut Luxembourg, Derrick has extensive experience managing EU-funded projects, ensuring compliance with funding requirements, coordinating multinational teams, and delivering impactful results. His experience includes roles at Mercedes Benz Mobility, FEV Europe GmbH, and the University of Koblenz, where he specialized in internal communications, digital transformation, and stakeholder engagement.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
    },
    {
      name: "Rasa Liepina",
      title: "Social Media Coordinator",
      bio: "From Riga, Latvia, Rasa began her work with CoconutWork in early 2022 as an Erasmus+ project participant.",
      fullDescription: "From Riga, Latvia, Rasa began her work with CoconutWork in early 2022 in her first-ever Erasmus+ project as a participant. Inspired by her upbringing and family, she embraced the early love of travel; she felt an international calling that led her to the UK—graduating from the University of Worcester in Media & Cultures. Alongside her main studies, she explored additional disciplines such as sociology, film, and sustainability, demonstrating a broad spectrum of interests. With a vintage camera, she captured her adventures in her first project and just four experiences later became part of the Coconut team. Rasa sees each day with Coconut as a fresh opportunity – a chance to embrace challenges, form connections, and create memories. With a camera, phone, and drone in hand, Rasa embodies the vibrant spirit of the team, capturing the spontaneous moments and the beauty of our projects.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">Our Team</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Coconut Luxembourg is supported by a dedicated team with vast experience in non-formal education and youth projects.
          </p>
        </div>
          
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={member.image} 
                    alt={`${member.name} profile`} 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover aspect-square"
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h2 className="text-3xl font-bold text-neutral-800 mb-3">{member.name}</h2>
                  <h3 className="text-xl font-semibold text-primary mb-6">{member.title}</h3>
                  
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    {member.fullDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Youth Work</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Project Management</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Non-formal Education</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}