import { Button } from "@/components/ui/button";

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
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4,000+</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">Youth Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wide">Countries</div>
              </div>
            </div>
            
            <Button className="bg-primary text-white hover:bg-blue-700 transition-colors">
              Learn More About Our History
            </Button>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Team collaboration meeting" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Our Mission</h3>
                <p className="text-neutral-600">
                  To empower youth to grow personally, in their careers, and evolve their community through active 
                  participation and quality non-formal education opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Our Beliefs</h3>
                <p className="text-neutral-600">
                  We believe in improving quality standards of youth work by providing outstanding learning opportunities 
                  for young people, especially those not privileged. Non-formal education is our pillar to include, 
                  grow interest, and satisfy needs where formal education might have failed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
