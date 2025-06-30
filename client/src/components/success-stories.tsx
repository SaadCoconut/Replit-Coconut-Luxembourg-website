import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  const stories = [
    {
      name: "Sophie L.",
      title: "Youth Exchange Participant",
      quote: "Amazing experience with Coconutwork! The youth exchange in Spain was life-changing. I learned so much about entrepreneurship and made friends from 12 different countries. The facilitators were incredibly supportive and professional. Highly recommend! 🌟",
      partnership: "MindYourBusiness+ Project • 2024"
    },
    {
      name: "Marcus K.",
      title: "Local Workshop Participant", 
      quote: "Attended their digital skills workshop in Luxembourg City and it exceeded all expectations. The trainers knew their stuff and made complex topics easy to understand. Got practical skills I use in my job now. Thank you Coconutwork team!",
      partnership: "Digital Participation Program • 2024"
    },
    {
      name: "Elena R.",
      title: "Youth Worker",
      quote: "As a youth worker, I've participated in several Coconutwork training courses. Their approach to intercultural learning is outstanding. Always well-organized, meaningful content, and great networking opportunities. Professional and impactful work!",
      partnership: "Training for Youth Workers • 2023-2024"
    },
    {
      name: "David M.",
      title: "Environmental Action Participant",
      quote: "The environmental sustainability project in Differdange was incredible! Learned practical ways to make a difference in my community. The team's passion for youth empowerment and environmental action is truly inspiring. Keep up the great work!",
      partnership: "EmpACT 3 Project • 2024"
    }
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">What People Say</h2>
          <p className="text-xl text-neutral-600">Testimonials from participants and partners who experienced our programs</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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
