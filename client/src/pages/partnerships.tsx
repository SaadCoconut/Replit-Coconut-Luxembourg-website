import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  type: 'funding' | 'institutional' | 'network' | 'local';
}

const partners: Partner[] = [
  // EU Funding Bodies
  {
    id: "erasmus-plus",
    name: "Erasmus+ Programme",
    logo: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://erasmus-plus.ec.europa.eu/",
    type: "funding"
  },
  {
    id: "european-youth-foundation",
    name: "European Youth Foundation",
    logo: "https://images.unsplash.com/photo-1559526324-593bc2d909ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://www.coe.int/en/web/european-youth-foundation",
    type: "funding"
  },
  
  // Network Organizations
  {
    id: "coconutwork",
    name: "Coconutwork Network",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://coconutwork.org/",
    type: "network"
  },
  {
    id: "eurodesk",
    name: "Eurodesk Luxembourg",
    logo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://eurodesk.lu/",
    type: "network"
  },
  {
    id: "salto-youth",
    name: "SALTO Youth",
    logo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://www.salto-youth.net/",
    type: "network"
  },
  
  // Institutional Partners
  {
    id: "ministry-education",
    name: "Ministry of Education Luxembourg",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    type: "institutional"
  },
  {
    id: "snj-luxembourg",
    name: "Service National de la Jeunesse",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://snj.public.lu/",
    type: "institutional"
  },
  {
    id: "conseil-national-jeunesse",
    name: "Conseil National de la Jeunesse",
    logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://cnj.lu/",
    type: "institutional"
  },
  
  // Local Partners
  {
    id: "city-luxembourg",
    name: "City of Luxembourg",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    type: "local"
  },
  {
    id: "esch-alzette",
    name: "City of Esch-sur-Alzette",
    logo: "https://images.unsplash.com/photo-1586880244386-8b3c96c7d996?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    type: "local"
  },
  {
    id: "differdange",
    name: "City of Differdange",
    logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    type: "local"
  },
  {
    id: "lycee-technique",
    name: "Lycée Technique du Centre",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    type: "local"
  },
  
  // Additional Network Partners
  {
    id: "youth-for-peace",
    name: "Youth for Peace Network",
    logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    type: "network"
  },
  {
    id: "anna-lindh-foundation",
    name: "Anna Lindh Foundation",
    logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://www.annalindhfoundation.org/",
    type: "network"
  },
  {
    id: "euro-med-youth",
    name: "Euro-Mediterranean Youth Programme",
    logo: "https://images.unsplash.com/photo-1559526324-593bc2d909ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    type: "funding"
  },
  {
    id: "youth-partnership",
    name: "EU-Council of Europe Youth Partnership",
    logo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    website: "https://pjp-eu.coe.int/en/web/youth-partnership",
    type: "institutional"
  }
];

const partnerTypes = {
  funding: {
    title: "Funding Partners",
    description: "European and international funding bodies supporting our youth programs",
    color: "bg-blue-50 border-blue-200"
  },
  institutional: {
    title: "Institutional Partners", 
    description: "Government institutions and official bodies collaborating on youth development",
    color: "bg-green-50 border-green-200"
  },
  network: {
    title: "Network Partners",
    description: "Youth organizations and networks across Europe and Mediterranean region",
    color: "bg-purple-50 border-purple-200"
  },
  local: {
    title: "Local Partners",
    description: "Luxembourg-based institutions and communities supporting local initiatives",
    color: "bg-orange-50 border-orange-200"
  }
};

export default function PartnershipsPage() {
  const getPartnersByType = (type: string) => {
    return partners.filter(partner => partner.type === type);
  };

  const handlePartnerClick = (partner: Partner) => {
    if (partner.website) {
      window.open(partner.website, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Building bridges across Europe and the Mediterranean through strategic partnerships
          </p>
        </div>

        {/* Partner Categories */}
        {Object.entries(partnerTypes).map(([typeKey, typeInfo]) => {
          const categoryPartners = getPartnersByType(typeKey);
          
          return (
            <div key={typeKey} className="mb-12">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-neutral-800 mb-2">
                  {typeInfo.title}
                </h2>
                <p className="text-neutral-600">
                  {typeInfo.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryPartners.map((partner) => (
                  <Card 
                    key={partner.id} 
                    className={`${typeInfo.color} hover:shadow-lg transition-shadow cursor-pointer group`}
                    onClick={() => handlePartnerClick(partner)}
                  >
                    <CardContent className="p-6">
                      <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-white">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="font-semibold text-neutral-800 text-center text-sm leading-tight">
                        {partner.name}
                      </h3>
                      {partner.website && (
                        <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4 text-neutral-500" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {/* Partnership Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us as a partner and benefit from enhanced visibility, co-creation opportunities, 
            networking, and privileged access to our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100"
              onClick={() => {
                // In a real implementation, this would link to actual partnership materials
                console.log('Download partnership package');
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Partnership Package 2025
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                window.history.back();
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}