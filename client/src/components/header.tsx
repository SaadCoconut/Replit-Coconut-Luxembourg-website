import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Hope Foundation</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
              <Button className="bg-accent text-white hover:bg-yellow-500 transition-colors">
                Donate Now
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 hover:text-primary"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Contact
              </button>
              <Button className="bg-accent text-white hover:bg-yellow-500 transition-colors mx-3 mt-2">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
