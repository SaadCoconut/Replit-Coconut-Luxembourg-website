import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Youth Through{" "}
            <span className="text-accent">Innovative Education</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
            Creating opportunities for young people across Europe and the Euro-Mediterranean region through non-formal education, youth exchanges, and skills development programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('impact')}
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg h-auto"
            >
              View Our Impact
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors h-auto"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
