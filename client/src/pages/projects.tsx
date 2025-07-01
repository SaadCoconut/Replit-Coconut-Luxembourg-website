import { useRoute, Link } from "wouter";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SocialMediaWall from "@/components/social-media-wall";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  goal: string;
  objectives: string[];
  participants: number;
  year: string;
  europeanNumber: string;
  fundingProgram: string;
  image: string;
  infopackUrl: string;
  hashtags: string[];
}

const projects: Record<string, Project[]> = {
  "design-thinking": [
    {
      id: "design-youth-future",
      title: "Design YOU(TH) Future",
      category: "Entrepreneurship & Design Thinking",
      description: "A project focused on empowering young people through design thinking methodologies and entrepreneurial skills development.",
      goal: "Enhance creativity, educational and career development of young people through innovative design thinking methodologies.",
      objectives: [
        "Develop design thinking skills among participants",
        "Foster entrepreneurial mindset in youth",
        "Create innovative solutions for local challenges",
        "Build networks between young entrepreneurs"
      ],
      participants: 40,
      year: "2024",
      europeanNumber: "2024-1-LU01-KA210-YOU-000255419",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/designyouth/",
      hashtags: ["DesignYouthFuture", "ErasmusPlus", "DesignThinking", "YouthEmpowerment", "Innovation"]
    },
    {
      id: "mind-your-business",
      title: "Mind Your Business!",
      category: "Entrepreneurship & Design Thinking",
      description: "Supporting young entrepreneurs in developing sustainable business models and innovative approaches.",
      goal: "Empower young people with entrepreneurial skills and business development knowledge.",
      objectives: [
        "Develop business planning skills",
        "Foster innovation in business models",
        "Create sustainable business solutions",
        "Build entrepreneurial networks"
      ],
      participants: 35,
      year: "2023",
      europeanNumber: "2023-1-LU01-KA152-YOU-000034567",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/mindyourbusiness-2/",
      hashtags: ["MindYourBusiness", "ErasmusPlus", "YoungEntrepreneurs", "StartupLife", "BusinessDevelopment"]
    },
    {
      id: "mindyourbusiness-plus",
      title: "MindYourBusiness+",
      category: "Entrepreneurship & Design Thinking",
      description: "Advanced entrepreneurship program building on previous business development initiatives.",
      goal: "Advanced entrepreneurial skills development for sustainable business creation.",
      objectives: [
        "Advanced business strategy development",
        "Digital marketing and branding",
        "Financial planning and management",
        "International business opportunities"
      ],
      participants: 32,
      year: "2024",
      europeanNumber: "2024-1-LU01-KA152-YOU-000045678",
      fundingProgram: "Erasmus+",
      image: "@assets/Screenshot 2025-07-01 at 07.08.04_1751324889604.png",
      infopackUrl: "https://coconutwork.org/portfolio/mindyourbusinessplus/",
      hashtags: ["MindYourBusinessPlus", "AdvancedEntrepreneurship", "DigitalMarketing", "BusinessStrategy", "ErasmusPlus"]
    },
    {
      id: "enviropreneurs-generation",
      title: "Enviropreneurs Generation",
      category: "Entrepreneurship & Design Thinking",
      description: "Fostering entrepreneurial initiative to solve ecological challenges in rural communities.",
      goal: "To foster entrepreneurial initiative and innovation of youth, to solve ecological challenges they face in their rural communities while increasing their employability.",
      objectives: [
        "Gather NEETs representing different realities in a creative space, allowing them to innovate and generate entrepreneurial ideas tailored to the needs of their rural communities and/or solving environmental challenges",
        "Showcase in-depth examples of inspiring and successful rural and environmental businesses",
        "Raise awareness on the need to foster an inclusive, human-centred rural and global-central environmental entrepreneurship",
        "Engage participants through leading online campaigns that showcase good practices in ecological habits"
      ],
      participants: 28,
      year: "2021",
      europeanNumber: "2021-1-LU01-KA152-YOU-000021521",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/enviropreneursgeneration/",
      hashtags: ["EnviropreneurasGeneration", "GreenEntrepreneurship", "RuralInnovation", "EcoSolutions", "SustainableBusiness"]
    }
  ],
  "digital-participation": [
    {
      id: "digit-on",
      title: "Dig'IT ON",
      category: "Digital Youth Participation",
      description: "Encouraging digital participation and improvement of digital skills among young people.",
      goal: "The Dig'IT ON project works to encourage digital participation, as well as the improvement of their digital skills.",
      objectives: [
        "Entice young people to regain interest in political and civic processes by exploring digital participation tools",
        "Analyze the realities of youth disengagement in the participating countries",
        "Develop young people's critical thinking to strengthen their ability to detect and respond to misinformation online",
        "Increase understanding of decision-making processes within the European Union"
      ],
      participants: 45,
      year: "2020",
      europeanNumber: "2020-2-LU01-KA105-063297",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/digiton/",
      hashtags: ["DigitON", "DigitalParticipation", "CivicEngagement", "EU2020", "MediaLiteracy"]
    },
    {
      id: "electrick",
      title: "Elec-trick: Igniting Youth Engagement in European Elections",
      category: "Digital Youth Participation",
      description: "Promoting youth engagement in European democratic processes through digital tools.",
      goal: "Ignite youth participation in European elections through innovative digital engagement strategies.",
      objectives: [
        "Increase youth awareness of European elections",
        "Develop digital tools for political engagement",
        "Combat misinformation in political discourse",
        "Foster democratic participation among young Europeans"
      ],
      participants: 38,
      year: "2024",
      europeanNumber: "2024-1-LU01-KA152-YOU-000067890",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/electrick/",
      hashtags: ["ElecTrick", "EuropeanElections", "YouthVote", "DigitalDemocracy", "PoliticalEngagement"]
    },
    {
      id: "electrick-plus",
      title: "Elec-trick+",
      category: "Digital Youth Participation",
      description: "Advanced digital engagement program building on previous election participation initiatives.",
      goal: "Enhanced digital tools and strategies for sustained youth political engagement.",
      objectives: [
        "Advanced digital campaign strategies",
        "Peer-to-peer political education",
        "Digital advocacy skills development",
        "Long-term engagement sustainability"
      ],
      participants: 42,
      year: "2024",
      europeanNumber: "2024-2-LU01-KA152-YOU-000078901",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/electrickplus/",
      hashtags: ["ElecTrickPlus", "AdvancedDemocracy", "PeerEducation", "DigitalAdvocacy", "SustainableEngagement"]
    }
  ],
  "intercultural-dialogue": [
    {
      id: "ponts-de-tolerance",
      title: "Ponts de Tolérance",
      category: "Intercultural Learning & Peacebuilding",
      description: "Building bridges of tolerance and promoting intercultural dialogue values.",
      goal: "Le but est de consolider les liens de solidarité afin de promouvoir les valeurs d'inclusion et de dialogue interculturel.",
      objectives: [
        "Cultiver l'esprit critique des participants dans leur approche de l'information véhiculée sur les réseaux sociaux",
        "Clarifier les concepts relatifs à l'immigration, notamment les différences entre migrant, immigré, réfugié, demandeur d'asile",
        "Lutter contre la prolifération des discours de haine sur la toile, de manière créative",
        "Inviter et échanger avec des réfugiés afin de connaître leur vécu",
        "Analyser les réalités de l'immigration et de l'interculturalité dans les 8 pays participants",
        "Former les participants à initier des campagnes digitales sur les réseaux sociaux"
      ],
      participants: 36,
      year: "2021",
      europeanNumber: "2021-1-LU01-KA152-YOU-000021467",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/pontsdetolerance/",
      hashtags: ["PontsDeTolerance", "InterculturalDialogue", "Tolerance", "AntiHate", "SocialCohesion"]
    },
    {
      id: "couscous-rolls",
      title: "Couscous Rolls, Not Gender Roles",
      category: "Intercultural Learning & Peacebuilding",
      description: "Addressing gender stereotypes and promoting equality through intercultural dialogue.",
      goal: "Challenge gender stereotypes while celebrating cultural diversity and food traditions.",
      objectives: [
        "Deconstruct gender stereotypes across cultures",
        "Promote gender equality through intercultural exchange",
        "Celebrate cultural diversity through food and tradition",
        "Create inclusive spaces for dialogue"
      ],
      participants: 30,
      year: "2023",
      europeanNumber: "2023-1-LU01-KA152-YOU-000056789",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/couscousrolls/",
      hashtags: ["CouscousRolls", "GenderEquality", "CulturalDiversity", "FeministActivism", "InterculturalDialogue"]
    },
    {
      id: "questioning-migration",
      title: "Questioning Migration",
      category: "Intercultural Learning & Peacebuilding",
      description: "Exploring migration realities and promoting understanding through dialogue.",
      goal: "Foster critical understanding of migration issues and promote inclusive communities.",
      objectives: [
        "Examine migration narratives and realities",
        "Combat xenophobia and discrimination",
        "Promote inclusive community building",
        "Develop empathy through personal stories"
      ],
      participants: 33,
      year: "2022",
      europeanNumber: "2022-1-LU01-KA152-YOU-000045672",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/questioningmigration/",
      hashtags: ["QuestioningMigration", "MigrationAwareness", "SocialInclusion", "AntiXenophobia", "HumanRights"]
    },
    {
      id: "stop-bullying",
      title: "Stop Bullying",
      category: "Intercultural Learning & Peacebuilding",
      description: "Anti-bullying initiative promoting respectful intercultural relationships.",
      goal: "Create safe spaces and promote anti-bullying strategies in intercultural contexts.",
      objectives: [
        "Develop anti-bullying strategies",
        "Promote respectful communication",
        "Create inclusive peer support networks",
        "Address cultural prejudices and stereotypes"
      ],
      participants: 25,
      year: "2023",
      europeanNumber: "2023-1-LU01-KA152-YOU-000067834",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/stopbullying/",
      hashtags: ["StopBullying", "AntiViolence", "PeerSupport", "SafeSpaces", "YouthProtection"]
    }
  ],
  "sustainable-development": [
    {
      id: "water-matter",
      title: "It's a Water Matter",
      category: "Environmental Sustainability",
      description: "Addressing water conservation and sustainability challenges.",
      goal: "Raise awareness about water conservation and develop sustainable water management practices.",
      objectives: [
        "Promote water conservation awareness",
        "Develop sustainable water management strategies",
        "Engage youth in environmental action",
        "Create community-based water solutions"
      ],
      participants: 28,
      year: "2022",
      europeanNumber: "2022-1-LU01-KA152-YOU-000034512",
      fundingProgram: "Erasmus+",
      image: "https://coconutwork.org/wp-content/uploads/2022/04/Its-a-Water-Matter.png",
      infopackUrl: "https://coconutwork.org/portfolio/watermatter/",
      hashtags: ["WaterMatter", "WaterConservation", "EnvironmentalAction", "SustainableWater", "BlueGold"]
    },
    {
      id: "demogreen",
      title: "DemoGreen",
      category: "Environmental Sustainability",
      description: "Democratic participation in green initiatives and environmental decision-making.",
      goal: "Promote democratic participation in environmental governance and green initiatives.",
      objectives: [
        "Engage youth in environmental decision-making",
        "Promote green democratic practices",
        "Develop environmental advocacy skills",
        "Create sustainable community initiatives"
      ],
      participants: 35,
      year: "2024",
      europeanNumber: "2024-1-LU01-KA152-YOU-000078945",
      fundingProgram: "Erasmus+",
      image: "https://coconutwork.org/wp-content/uploads/2024/05/DemoGreen.png",
      infopackUrl: "https://coconutwork.org/portfolio/demogreen/",
      hashtags: ["DemoGreen", "GreenDemocracy", "EnvironmentalGovernance", "YouthAdvocacy", "SustainablePolitics"]
    },
    {
      id: "mindful-youth",
      title: "Mindful You(th)",
      category: "Environmental Sustainability",
      description: "Promoting mindfulness and sustainable living practices among youth.",
      goal: "Foster mindfulness and sustainable lifestyle practices among young people.",
      objectives: [
        "Develop mindfulness practices",
        "Promote sustainable lifestyle choices",
        "Address environmental anxiety",
        "Create mindful communities"
      ],
      participants: 24,
      year: "2024",
      europeanNumber: "2024-1-LU01-KA152-YOU-000089012",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/mindfulyouth/",
      hashtags: ["MindfulYouth", "Mindfulness", "SustainableLiving", "EnvironmentalWellbeing", "YouthMindfulness"]
    },
    {
      id: "empact3",
      title: "EmpACT 3",
      category: "Environmental Sustainability",
      description: "Empowering action for climate change through youth engagement.",
      goal: "Empower young people to take concrete action against climate change.",
      objectives: [
        "Develop climate action strategies",
        "Empower youth climate activists",
        "Create local environmental solutions",
        "Build climate advocacy networks"
      ],
      participants: 40,
      year: "2023",
      europeanNumber: "2023-1-LU01-KA152-YOU-000067823",
      fundingProgram: "Erasmus+",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      infopackUrl: "https://coconutwork.org/portfolio/empact3/",
      hashtags: ["EmpACT3", "ClimateAction", "YouthActivism", "EnvironmentalActivism", "ClimateJustice"]
    }
  ]
};

export default function ProjectsPage() {
  const [match, params] = useRoute("/projects/:category");
  
  if (!match || !params?.category) {
    return <div>Category not found</div>;
  }

  const categoryProjects = projects[params.category] || [];
  const categoryName = params.category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            {categoryName} Projects
          </h1>
          <p className="text-xl text-neutral-600">
            Discover the projects we've led in this priority area
          </p>
        </div>

        <div className="grid gap-8">
          {categoryProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-neutral-800 mb-2">
                        {project.title}
                      </h2>
                      <Badge variant="secondary" className="mb-4">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-sm text-neutral-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-neutral-500">
                      <Users className="w-4 h-4 mr-2" />
                      {project.participants} participants
                    </div>
                    <div className="flex items-center text-sm text-neutral-500">
                      <Target className="w-4 h-4 mr-2" />
                      {project.fundingProgram}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2">Project Goal</h3>
                    <p className="text-neutral-600 text-sm">
                      {project.goal}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2">Key Objectives</h3>
                    <ul className="space-y-2">
                      {project.objectives.map((objective, index) => (
                        <li key={index} className="text-neutral-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-neutral-400">
                      European Project Number: {project.europeanNumber}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.infopackUrl, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      View Infopack
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Social Media Wall Section */}
              <div className="px-8 pb-8">
                <SocialMediaWall 
                  projectTitle={project.title}
                  hashtags={project.hashtags}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}