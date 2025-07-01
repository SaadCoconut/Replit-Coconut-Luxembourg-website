export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sophie Laurent",
      title: "National Coordinator",
      bio: "Youth work specialist with extensive experience in non-formal education and European project management. Expert in intercultural learning methodologies.",
      fullDescription: "With over 10 years of experience in youth work and European cooperation, Sophie coordinates strategic activities for Coconut Luxembourg, ensuring alignment with our organizational mission. She oversees partnerships, implements long-term strategies, and coordinates Erasmus+ projects while maintaining active relationships with local and international partners. Sophie manages logistics and planning, conducting risk assessments for international projects and maintaining comprehensive documentation. She collaborates with the management board to ensure each project aligns with organizational objectives.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Alex Mueller", 
      title: "Project Manager & Board Member",
      bio: "Digital innovation advocate specializing in youth entrepreneurship and design thinking. Coordinates youth exchanges and training programs across the network.",
      fullDescription: "With extensive experience in Erasmus+ and local educational projects, Alex Mueller contributes essentially to the Coconut Luxembourg team. His expertise spans diverse domains, including teambuilding, trainer training, and soft skills development, preparing competent and adaptable young leaders. Alex plays a central role in coordinating and evaluating projects, ensuring careful planning for participants' personal development. He also promotes inter-departmental collaboration, integrating resources and objectives to support the organization's desired impact.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Amira Ben Salem",
      title: "Coordinator, Growth and Development Department", 
      bio: "Expert in Euro-Mediterranean cooperation with a focus on building bridges between European and Mediterranean youth organizations and fostering cultural exchange.",
      fullDescription: "With over 8 years of experience in Erasmus+ projects and an active role in the university environment, Amira Ben Salem is one of the strategic pillars of the organization, coordinating Coconut Luxembourg's educational initiatives to meet young people's needs and long-term objectives. With a vast network of international partnerships, Amira contributes to creating sustainable and relevant educational programs. Through her involvement in strategic development and adaptation to changes in the educational sector, Amira ensures the organization remains a benchmark for innovation. Her approach inspires the team and supports continuous personal and professional growth for all participants.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Elena Cernat",
      title: "Coordinator, Human Resources Department",
      bio: "Elena is the heart of the Human Resources department at Coconut Luxembourg, with 5 years of HR experience already accumulated at just 26 years old.",
      fullDescription: "Elena Cernat is the heart of the Human Resources department at Coconut Luxembourg, with 5 years of HR experience already accumulated at just 26 years old. Responsible for recruiting and selecting volunteers, she contributes essentially to organizational culture, managing each interaction with empathy and professionalism. Elena ensures a diverse and valuable team, identifying and developing each member's potential. With a balance between professionalism and human approach, she creates a collaborative and inspiring work environment, motivating the team to reach new standards of excellence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Bianca Archip",
      title: "Coordinator, Local Activities Department",
      bio: "Bianca is the dedicated coordinator of the Local Activities Department, where she develops personal development initiatives for young people.",
      fullDescription: "Bianca Archip is the dedicated coordinator of the Local Activities Department, where she develops personal development initiatives for young people. With a passion for non-formal education and community development, she brings a practical vision to each project, ensuring all activities have impact in local communities. With skills in organization and communication, Bianca creates captivating programs and establishes relationships with local partners. Through her commitment, she offers a safe and stimulating growth environment where young people can develop their skills and learn through experience.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Bogdan Ecobici",
      title: "Coordinator Luxembourg Activities",
      bio: "At 35, Bogdan is a valuable member of the Coconut Luxembourg team, coordinating activities in Luxembourg communities.",
      fullDescription: "At 35 years old, Bogdan Ecobici is a valuable member of the Coconut Luxembourg team, coordinating activities in Luxembourg communities. Collaborating with local authorities, Bogdan offers young people educational experiences that promote diversity and inclusion, adapted to community needs. Bogdan has expertise in planning and facilitating interactive activities and is appreciated for attention to detail and ability to manage complex projects. Through his passion for non-formal education, he supports the personal development of young people in Luxembourg, helping them become active and engaged citizens.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
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