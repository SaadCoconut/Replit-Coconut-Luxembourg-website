import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
              <h1 className="text-2xl font-bold text-primary">Coconut Luxembourg</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
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
              <Link href="/local-initiatives">
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  {t('nav.localInitiatives')}
                </button>
              </Link>
              <Link href="/resources">
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  {t('nav.resources')}
                </button>
              </Link>
              <Link href="/partnerships">
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  {t('nav.partners')}
                </button>
              </Link>
              <Link href="/team">
                <button className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Team
                </button>
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.contact')}
              </button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-primary">
                    <Globe className="w-4 h-4 mr-2" />
                    {language.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('fr')}>
                    Français
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('lb')}>
                    Lëtzebuergesch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
              <Link href="/local-initiatives">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
                >
                  {t('nav.localInitiatives')}
                </button>
              </Link>
              <Link href="/resources">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
                >
                  {t('nav.resources')}
                </button>
              </Link>
              <Link href="/partnerships">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
                >
                  {t('nav.partners')}
                </button>
              </Link>
              <Link href="/team">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
                >
                  Team
                </button>
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                {t('nav.contact')}
              </button>
              
              <div className="px-3 py-2">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 text-xs rounded ${language === 'en' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`px-2 py-1 text-xs rounded ${language === 'fr' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLanguage('lb')}
                    className={`px-2 py-1 text-xs rounded ${language === 'lb' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    LB
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
