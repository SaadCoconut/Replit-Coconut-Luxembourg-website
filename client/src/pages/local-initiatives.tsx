import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "wouter";

interface LocalInitiative {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  content: string;
  participants: number;
  image: string;
  tags: string[];
}

const localInitiatives: LocalInitiative[] = [
  {
    id: "youth-leadership-workshop-2024",
    title: "Youth Leadership Workshop Luxembourg City",
    date: "March 15, 2024",
    location: "Luxembourg City Community Center",
    description: "A hands-on workshop empowering local youth with leadership skills and community engagement strategies.",
    content: "Our Youth Leadership Workshop brought together 25 young people from across Luxembourg City to develop essential leadership skills. The program focused on design thinking methodologies, peer-to-peer learning, and practical community engagement strategies. Participants worked on real local challenges and developed actionable solutions for their neighborhoods. The workshop included interactive sessions on public speaking, project management, and intercultural communication. By the end of the day, participants had formed three working groups to continue their initiatives beyond the workshop.",
    participants: 25,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Leadership", "Youth Development", "Community Engagement"]
  },
  {
    id: "digital-skills-training-esch",
    title: "Digital Skills for Youth Workers - Esch-sur-Alzette",
    date: "February 8, 2024",
    location: "Esch-sur-Alzette Youth Center",
    description: "Training session for local youth workers on integrating digital tools in their daily practice with young people.",
    content: "This specialized training session equipped 18 youth workers from Esch-sur-Alzette with essential digital skills for modern youth work. The program covered digital storytelling, online engagement platforms, and safety protocols for digital youth activities. Participants learned to use various digital tools including video editing software, social media management platforms, and virtual collaboration tools. The training emphasized practical application, with each participant creating a digital project during the session. Follow-up sessions were scheduled to support implementation in their respective organizations.",
    participants: 18,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Digital Skills", "Youth Workers", "Training"]
  },
  {
    id: "environmental-action-differdange",
    title: "Environmental Action Day - Differdange",
    date: "January 20, 2024",
    location: "Differdange Municipal Park",
    description: "Community-led environmental cleanup and awareness campaign engaging local youth in sustainable practices.",
    content: "Our Environmental Action Day in Differdange brought together 40 participants for a comprehensive environmental initiative. The event combined hands-on environmental cleanup with educational workshops on sustainability. Participants collected over 200kg of waste from the municipal park while learning about local biodiversity and environmental protection. The day included workshops on upcycling, composting, and sustainable lifestyle choices. Local environmental experts shared insights on climate action, and participants committed to ongoing environmental projects in their communities. The initiative resulted in the formation of a youth environmental group that continues to meet monthly.",
    participants: 40,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Environment", "Sustainability", "Community Action"]
  },
  {
    id: "intercultural-dialogue-dudelange",
    title: "Intercultural Dialogue Café - Dudelange",
    date: "December 10, 2023",
    location: "Dudelange Cultural Center",
    description: "Monthly dialogue café bringing together youth from diverse backgrounds to discuss cultural understanding and integration.",
    content: "The Intercultural Dialogue Café in Dudelange has become a monthly tradition, fostering understanding between youth from different cultural backgrounds. This particular session focused on food traditions and their role in cultural identity. 22 young people from 12 different countries shared stories, recipes, and cultural practices while engaging in structured dialogue activities. The café format encouraged informal interaction alongside facilitated discussions on prejudice, stereotypes, and inclusive community building. Participants collaborated on a community cookbook project that celebrates the cultural diversity of Dudelange. The initiative has successfully reduced intercultural tensions and created lasting friendships across community lines.",
    participants: 22,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Intercultural Dialogue", "Community Building", "Cultural Exchange"]
  }
];

export default function LocalInitiativesPage() {
  const [, setLocation] = useLocation();

  const handleContactNavigation = () => {
    setLocation('/');
    // Wait for navigation to complete, then scroll to contact
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const headerHeight = 80; // h-20 = 80px
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            Local Initiatives
          </h1>
          <p className="text-xl text-neutral-600">
            Discover our local impact and community engagement activities across Luxembourg
          </p>
        </div>

        <div className="grid gap-8">
          {localInitiatives.map((initiative) => (
            <article key={initiative.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full aspect-video md:aspect-square object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-neutral-800 mb-2">
                        {initiative.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {initiative.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">
                    {initiative.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-sm text-neutral-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {initiative.date}
                    </div>
                    <div className="flex items-center text-sm text-neutral-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {initiative.location}
                    </div>
                    <div className="flex items-center text-sm text-neutral-500">
                      <Users className="w-4 h-4 mr-2" />
                      {initiative.participants} participants
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-neutral-800 mb-3">About This Initiative</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {initiative.content}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Want to Get Involved?
            </h3>
            <p className="text-neutral-600 mb-6">
              Join our local initiatives and make a difference in your community. 
              We're always looking for motivated young people and organizations to collaborate with.
            </p>
            <Button 
              className="bg-primary text-white hover:bg-blue-700 transition-colors"
              onClick={handleContactNavigation}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}