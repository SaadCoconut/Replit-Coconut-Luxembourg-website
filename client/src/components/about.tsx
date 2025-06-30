export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">About Coconut Luxembourg</h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Coconut Luxembourg provides young people (18-30) with opportunities to get actively engaged in their own 
              personal growth and development to fulfill their potential. We collaborate with youth and community 
              organizations from Europe and neighboring countries to provide quality training and learning opportunities.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Our scope of work spans Luxembourg, EU and Euro-Mediterranean regions, with intercultural learning as one 
              of our core values. We believe in non-formal education as a pillar of learning to include and grow the 
              interest of young people, especially those who are not privileged.
            </p>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">1,000+</span>
                <span className="text-xl text-neutral-600">youth impacted from</span>
                <span className="text-3xl font-bold text-secondary">20+</span>
                <span className="text-xl text-neutral-600">countries</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Team collaboration meeting" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-primary transition-colors duration-300">Our Mission</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      To empower youth to grow personally, in their careers, and evolve their community through active 
                      participation and quality non-formal education opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6 text-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-secondary transition-colors duration-300">Our Beliefs</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      We believe in improving quality standards of youth work by providing outstanding learning opportunities 
                      for young people, especially those not privileged. Non-formal education is our pillar to include, 
                      grow interest, and satisfy needs where formal education might have failed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
