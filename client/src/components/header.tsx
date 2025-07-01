import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import logoPath from "@assets/Coco Luxembourg_1751327600427.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location !== '/') {
      setLocation('/');
      // Wait a bit for the page to load, then scroll
      setTimeout(() => {
        scrollToSectionWithOffset(sectionId);
      }, 100);
    } else {
      // We're already on home page, just scroll
      // Add slight delay for mobile to ensure DOM is ready
      const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        setTimeout(() => {
          scrollToSectionWithOffset(sectionId);
        }, 50);
      } else {
        scrollToSectionWithOffset(sectionId);
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToSectionWithOffset = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Mobile-optimized scroll behavior
      const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // For mobile, use a much larger offset to show the title properly
        const headerOffset = 200; // Large offset for mobile to show title clearly
        const elementTop = element.offsetTop;
        const targetPosition = elementTop - headerOffset;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
      } else {
        // Desktop behavior
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const headerOffset = 90;
        const targetPosition = elementTop - headerOffset;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  const handlePageNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center min-w-0 flex-1">
            <Link href="/" onClick={handlePageNavigation}>
              <div className="flex-shrink-0 flex items-center space-x-3 cursor-pointer">
                <img 
                  src={logoPath} 
                  alt="Coconut Luxembourg Logo" 
                  className="h-12 w-12 object-contain flex-shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <h1 className="text-xl font-bold text-primary leading-tight whitespace-nowrap">Coconut Luxembourg</h1>
                  <p className="text-xs text-neutral-600 font-medium whitespace-nowrap">ASBL - Association Sans But Lucratif</p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:block flex-shrink-0">
            <div className="flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.programs')}
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.impact')}
              </button>
              <Link href="/local-initiatives" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  {t('nav.localInitiatives')}
                </button>
              </Link>
              <Link href="/resources" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  {t('nav.resources')}
                </button>
              </Link>
              <Link href="/partnerships" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  {t('nav.partners')}
                </button>
              </Link>
              <Link href="/team" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Team
                </button>
              </Link>
              <Link href="/contact" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  {t('nav.contact')}
                </button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-primary">
                    <Globe className="w-4 h-4 mr-2" />
                    {language === 'en' && '🇺🇸'}
                    {language === 'fr' && '🇫🇷'}
                    {language === 'lb' && '🇱🇺'}
                    <span className="ml-1">{language.toUpperCase()}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    <span className="mr-2">🇺🇸</span>English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('fr')}>
                    <span className="mr-2">🇫🇷</span>Français
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('lb')}>
                    <span className="mr-2">🇱🇺</span>Lëtzebuergesch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="lg:hidden flex-shrink-0">
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
          <div className="lg:hidden border-t border-neutral-200 py-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                {t('nav.programs')}
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                {t('nav.impact')}
              </button>
              <Link href="/local-initiatives" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left">
                  {t('nav.localInitiatives')}
                </button>
              </Link>
              <Link href="/resources" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left">
                  {t('nav.resources')}
                </button>
              </Link>
              <Link href="/partnerships" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left">
                  {t('nav.partners')}
                </button>
              </Link>
              <Link href="/team" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left">
                  Team
                </button>
              </Link>
              <Link href="/contact" onClick={handlePageNavigation}>
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left">
                  {t('nav.contact')}
                </button>
              </Link>
              
              <div className="px-3 py-2">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-2 text-sm rounded-lg flex items-center gap-2 ${language === 'en' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    <span>🇺🇸</span>EN
                  </button>
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`px-3 py-2 text-sm rounded-lg flex items-center gap-2 ${language === 'fr' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    <span>🇫🇷</span>FR
                  </button>
                  <button
                    onClick={() => setLanguage('lb')}
                    className={`px-3 py-2 text-sm rounded-lg flex items-center gap-2 ${language === 'lb' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    <span>🇱🇺</span>LB
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
