import { ArrowLeft, Download, FileText, Calendar, Shield, Image, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'annual-reports' | 'guidelines' | 'policies' | 'media-kit';
  fileType: string;
  fileSize: string;
  lastUpdated: string;
  downloadUrl: string;
  isNew?: boolean;
}

const resources: Resource[] = [
  // Annual Reports
  {
    id: "annual-report-2024",
    title: "Annual Report 2024",
    description: "Comprehensive overview of our activities, impact, and financial summary for 2024.",
    category: "annual-reports",
    fileType: "PDF",
    fileSize: "4.2 MB",
    lastUpdated: "December 2024",
    downloadUrl: "/resources/annual-report-2024.pdf",
    isNew: true
  },
  {
    id: "annual-report-2023",
    title: "Annual Report 2023",
    description: "Complete annual report covering our 2023 projects, partnerships, and achievements.",
    category: "annual-reports",
    fileType: "PDF",
    fileSize: "3.8 MB",
    lastUpdated: "December 2023",
    downloadUrl: "/resources/annual-report-2023.pdf"
  },
  
  // Guidelines
  {
    id: "project-implementation-guide",
    title: "Project Implementation Guidelines",
    description: "Step-by-step guide for implementing youth development projects using our methodology.",
    category: "guidelines",
    fileType: "PDF",
    fileSize: "2.1 MB",
    lastUpdated: "October 2024",
    downloadUrl: "/resources/project-implementation-guide.pdf"
  },
  {
    id: "partnership-guidelines",
    title: "Partnership Guidelines",
    description: "Framework for establishing and maintaining partnerships with educational institutions and NGOs.",
    category: "guidelines",
    fileType: "PDF",
    fileSize: "1.5 MB",
    lastUpdated: "September 2024",
    downloadUrl: "/resources/partnership-guidelines.pdf"
  },
  {
    id: "quality-standards",
    title: "Quality Standards for Youth Programs",
    description: "Quality assurance standards and evaluation criteria for all our educational programs.",
    category: "guidelines",
    fileType: "PDF",
    fileSize: "1.8 MB",
    lastUpdated: "August 2024",
    downloadUrl: "/resources/quality-standards.pdf"
  },
  
  // Policies
  {
    id: "child-protection-policy",
    title: "Child Protection Policy",
    description: "Comprehensive child protection policy ensuring the safety and wellbeing of all participants.",
    category: "policies",
    fileType: "PDF",
    fileSize: "1.2 MB",
    lastUpdated: "November 2024",
    downloadUrl: "/resources/child-protection-policy.pdf",
    isNew: true
  },
  {
    id: "data-protection-policy",
    title: "Data Protection Policy",
    description: "GDPR-compliant data protection policy covering participant information and privacy rights.",
    category: "policies",
    fileType: "PDF",
    fileSize: "0.9 MB",
    lastUpdated: "October 2024",
    downloadUrl: "/resources/data-protection-policy.pdf"
  },
  {
    id: "code-of-conduct",
    title: "Code of Conduct",
    description: "Ethical guidelines and behavioral expectations for staff, volunteers, and participants.",
    category: "policies",
    fileType: "PDF",
    fileSize: "0.7 MB",
    lastUpdated: "September 2024",
    downloadUrl: "/resources/code-of-conduct.pdf"
  },
  
  // Media Kit
  {
    id: "brand-guidelines",
    title: "Brand Guidelines",
    description: "Complete brand identity guide including logos, colors, fonts, and usage guidelines.",
    category: "media-kit",
    fileType: "PDF",
    fileSize: "3.5 MB",
    lastUpdated: "October 2024",
    downloadUrl: "/resources/brand-guidelines.pdf"
  },
  {
    id: "logo-package",
    title: "Logo Package",
    description: "High-resolution logos in various formats (PNG, SVG, EPS) for different use cases.",
    category: "media-kit",
    fileType: "ZIP",
    fileSize: "12 MB",
    lastUpdated: "October 2024",
    downloadUrl: "/resources/logo-package.zip"
  },
  {
    id: "press-kit",
    title: "Press Kit",
    description: "Media resources including press releases, fact sheets, and high-quality images.",
    category: "media-kit",
    fileType: "ZIP",
    fileSize: "25 MB",
    lastUpdated: "November 2024",
    downloadUrl: "/resources/press-kit.zip"
  }
];

const categoryInfo = {
  'annual-reports': {
    title: 'Annual Reports',
    description: 'Yearly reports showcasing our impact, activities, and financial transparency',
    icon: Calendar,
    color: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  'guidelines': {
    title: 'Guidelines & Procedures',
    description: 'Implementation guides and best practices for our programs',
    icon: Book,
    color: 'bg-green-50 text-green-700 border-green-200'
  },
  'policies': {
    title: 'Policies & Standards',
    description: 'Essential policies ensuring safety, compliance, and quality',
    icon: Shield,
    color: 'bg-red-50 text-red-700 border-red-200'
  },
  'media-kit': {
    title: 'Media Kit',
    description: 'Brand assets, logos, and media resources for partners and press',
    icon: Image,
    color: 'bg-purple-50 text-purple-700 border-purple-200'
  }
};

export default function ResourcesPage() {
  const [, setLocation] = useLocation();
  const categories = Object.keys(categoryInfo) as Array<keyof typeof categoryInfo>;

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

  const getResourcesByCategory = (category: string) => {
    return resources.filter(resource => resource.category === category);
  };

  const handleDownload = (resource: Resource) => {
    // In a real implementation, this would handle the actual download
    console.log(`Downloading: ${resource.title}`);
    window.open(resource.downloadUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            Resources
          </h1>
          <p className="text-xl text-neutral-600">
            Access our organizational documents, guidelines, and media resources
          </p>
        </div>

        {categories.map((categoryKey) => {
          const category = categoryInfo[categoryKey];
          const categoryResources = getResourcesByCategory(categoryKey);
          const IconComponent = category.icon;

          return (
            <div key={categoryKey} className="mb-12">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-800">
                    {category.title}
                  </h2>
                  <p className="text-neutral-600">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        {resource.isNew && (
                          <Badge variant="default" className="ml-2">New</Badge>
                        )}
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-neutral-500">
                          <span className="flex items-center">
                            <FileText className="w-4 h-4 mr-1" />
                            {resource.fileType}
                          </span>
                          <span>{resource.fileSize}</span>
                        </div>
                        
                        <div className="text-sm text-neutral-500">
                          Updated: {resource.lastUpdated}
                        </div>
                        
                        <Button 
                          onClick={() => handleDownload(resource)}
                          className="w-full"
                          variant="outline"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Need Additional Resources?
              </h3>
              <p className="text-blue-700 mb-6">
                Can't find what you're looking for? Contact us for additional documents, 
                custom resources, or specific information about our programs.
              </p>
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleContactNavigation}
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}