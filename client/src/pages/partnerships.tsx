import { ArrowLeft, Download, ExternalLink, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

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

// Partnership form schema
const partnershipFormSchema = z.object({
  organizationName: z.string().min(2, "Organization name must be at least 2 characters"),
  organizationType: z.string().min(1, "Please select an organization type"),
  website: z.string().url("Please enter a valid website URL").optional().or(z.literal("")),
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(2, "City must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type PartnershipFormData = z.infer<typeof partnershipFormSchema>;

const organizationTypes = [
  "NGO/Association/Non profit",
  "Higher education establishment",
  "School - Secondary level",
  "School - VET",
  "Public body - Local/Regional",
  "Public body - National",
  "Public body - European/International",
  "Enterprise/Social enterprise",
  "Foundation",
  "Research Institute",
  "Adult education centre",
  "Chambers of commerce/Trade union/Trade association",
  "Other type of organisation"
];

const countries = [
  "Luxembourg", "Belgium", "France", "Germany", "Netherlands", "Austria", "Switzerland",
  "Italy", "Spain", "Portugal", "United Kingdom", "Ireland", "Denmark", "Sweden",
  "Norway", "Finland", "Poland", "Czech Republic", "Slovakia", "Hungary", "Slovenia",
  "Croatia", "Romania", "Bulgaria", "Greece", "Cyprus", "Malta", "Estonia", "Latvia",
  "Lithuania", "Other"
];

export default function PartnershipsPage() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const handleContactNavigation = () => {
    setLocation('/');
    // Wait for navigation to complete, then scroll to contact
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const form = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      organizationName: "",
      organizationType: "",
      website: "",
      country: "",
      city: "",
      email: "",
      message: "",
    },
  });

  const getPartnersByType = (type: string) => {
    return partners.filter(partner => partner.type === type);
  };

  const handlePartnerClick = (partner: Partner) => {
    if (partner.website) {
      window.open(partner.website, '_blank');
    }
  };

  const partnershipMutation = useMutation({
    mutationFn: async (data: PartnershipFormData) => {
      return apiRequest("/api/partnership", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      toast({
        title: "Partnership request submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: PartnershipFormData) => {
    partnershipMutation.mutate(data);
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

        {/* Partnership Form */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                Become a Partner
              </h2>
              <p className="text-lg text-neutral-600">
                Coconutwork is your better choice! Join our pan-European network empowering young people 
                through personal and professional growth across Europe and the Euro-Mediterranean region.
              </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="organizationName">Organization Name *</Label>
                  <Input
                    id="organizationName"
                    {...form.register("organizationName")}
                    placeholder="Enter your organization name"
                  />
                  {form.formState.errors.organizationName && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.organizationName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organizationType">Type of Organization *</Label>
                  <Select onValueChange={(value) => form.setValue("organizationType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      {organizationTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.organizationType && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.organizationType.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    {...form.register("website")}
                    placeholder="https://your-website.com"
                  />
                  {form.formState.errors.website && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.website.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select onValueChange={(value) => form.setValue("country", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.country && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.country.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    {...form.register("city")}
                    placeholder="Enter your city"
                  />
                  {form.formState.errors.city && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.city.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="your-email@organization.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  placeholder="Tell us about your organization and how you'd like to partner with us..."
                  rows={5}
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-600">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={partnershipMutation.isPending}
                  className="bg-primary text-white hover:bg-blue-700 min-w-[200px]"
                >
                  {partnershipMutation.isPending ? "Submitting..." : "Submit Partnership Request"}
                </Button>
              </div>
            </form>
          </div>
        </div>

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