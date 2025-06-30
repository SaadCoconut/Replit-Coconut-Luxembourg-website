import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  const stories = [
    {
      name: "Maria Gonzalez",
      title: "Project Officer, European Youth Foundation",
      quote: "Coconut Luxembourg's innovative approach to youth work has consistently impressed us. Their projects demonstrate real impact in developing entrepreneurial skills and fostering intercultural understanding among young people.",
      partnership: "Erasmus+ Partnership • 15+ projects funded"
    },
    {
      name: "Ahmed Hassan",
      title: "Programme Coordinator, Anna Lindh Foundation", 
      quote: "The quality of their youth exchanges and the measurable outcomes in participant development make Coconut Luxembourg a standout partner in our Euro-Mediterranean network. Their methodology is exemplary.",
      partnership: "Strategic Partnership • Cross-cultural programs"
    }
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Success Stories</h2>
          <p className="text-xl text-neutral-600">Real impact from our partnerships with European funding organizations</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary text-2xl">"</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">{story.name}</h3>
                  <p className="text-neutral-600">{story.title}</p>
                </div>
              </div>
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                {story.quote}
              </p>
              <div className="flex items-center text-sm text-neutral-500">
                <Star className="w-4 h-4 text-accent mr-1" />
                <span>{story.partnership}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary text-white hover:bg-blue-700 transition-colors">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
