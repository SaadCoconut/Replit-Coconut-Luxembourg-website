import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">About Coconut Luxembourg</h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Coconut Luxembourg is part of the Coconutwork network - a European network of youth work organizations 
              empowering Euro-Mediterranean youth through innovative non-formal education programs. We focus on 
              developing skills relevant to community building and personal growth.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Our approach combines workshops, youth exchanges, and training courses to help young people - 
              especially NEETs and youth from migrant backgrounds - achieve their potential as aware global citizens 
              with enhanced skills in entrepreneurship, digital literacy, and human rights education.
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
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Our Mission</h3>
              <p className="text-neutral-600">
                To empower youth to grow personally and professionally while evolving their communities through 
                active participation, bringing non-formal educational opportunities to young people from both urban and rural areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
