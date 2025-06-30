import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'lb';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.impact': 'Impact',
    'nav.localInitiatives': 'Local Initiatives',
    'nav.resources': 'Resources',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Empowering Youth Through',
    'hero.titleHighlight': 'Innovative Education',
    'hero.description': 'Providing young people (18-30) with opportunities to get actively engaged in their personal growth and development. We support youth workers, volunteers, and activists across Europe and Euro-Mediterranean regions.',
    
    // About Section
    'about.title': 'About Coconut Luxembourg',
    'about.description1': 'Coconut Luxembourg provides young people (18-30) with opportunities to get actively engaged in their own personal growth and development to fulfill their potential. We collaborate with youth and community organizations from Europe and neighboring countries to provide quality training and learning opportunities.',
    'about.description2': 'Our scope of work spans Luxembourg, EU and Euro-Mediterranean regions, with intercultural learning as one of our core values. We believe in non-formal education as a pillar of learning to include and grow the interest of young people, especially those who are not privileged.',
    'about.impactNumbers': 'youth impacted from',
    'about.countries': 'countries',
    
    // Programs Section
    'programs.title': 'Our Programs',
    'programs.description': 'Comprehensive youth development initiatives across four key priority areas',
    'programs.designThinking.title': 'Design Thinking & Entrepreneurship',
    'programs.designThinking.description': 'Fostering innovation, creativity, and entrepreneurial mindset among young people through design thinking methodologies and practical business skills development.',
    'programs.digital.title': 'Digital Participation',
    'programs.digital.description': 'Enhancing digital literacy and online engagement skills to ensure meaningful participation in the digital society and democratic processes.',
    'programs.intercultural.title': 'Intercultural Dialogue & Peace-building',
    'programs.intercultural.description': 'Promoting mutual understanding, tolerance, and peaceful coexistence through structured intercultural exchanges and dialogue facilitation.',
    'programs.environmental.title': 'Environmental Sustainability',
    'programs.environmental.description': 'Empowering youth to become environmental leaders and advocates for sustainable development in their communities.',

    // Impact Metrics Section  
    'impact.title': 'Our Impact',
    'impact.description': 'Making a difference across Europe and the Mediterranean',
    'impact.projectsDelivered': 'Projects Delivered',
    'impact.youthImpacted': 'Youth Impacted',
    'impact.partnersCollaborated': 'Partners Collaborated',
    'impact.countriesReached': 'Countries Reached',

    // Success Stories Section
    'successStories.title': 'What People Say',
    'successStories.description': 'Testimonials from participants and partners who experienced our programs',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.description': 'Ready to collaborate on empowering youth across Europe? We\'d love to hear from you.',
    'contact.form.organization': 'Organization Name',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.partnership': 'Partnership Interest',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.description': 'Empowering youth across Europe and the Mediterranean through innovative non-formal education and strategic partnerships.',
    'footer.programs': 'Programs',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Coconut Luxembourg. All rights reserved.',

    // Team Section
    'team.title': 'Our Team',
    'team.description': 'Coconut Luxembourg is supported by a dedicated team with vast experience in non-formal education and youth projects.',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.backToHome': 'Back to Home',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.programs': 'Programmes',
    'nav.impact': 'Impact',
    'nav.localInitiatives': 'Initiatives Locales',
    'nav.resources': 'Ressources',
    'nav.partners': 'Partenaires',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Autonomiser les Jeunes par une',
    'hero.titleHighlight': 'Éducation Innovante',
    'hero.description': 'Offrir aux jeunes (18-30 ans) des opportunités de s\'engager activement dans leur croissance personnelle et leur développement. Nous soutenons les travailleurs de jeunesse, bénévoles et activistes à travers l\'Europe et les régions euro-méditerranéennes.',
    
    // About Section
    'about.title': 'À propos de Coconut Luxembourg',
    'about.description1': 'Coconut Luxembourg offre aux jeunes (18-30 ans) des opportunités de s\'engager activement dans leur propre croissance personnelle et développement pour réaliser leur potentiel. Nous collaborons avec des organisations de jeunesse et communautaires d\'Europe et des pays voisins pour fournir des opportunités de formation et d\'apprentissage de qualité.',
    'about.description2': 'Notre champ d\'action s\'étend au Luxembourg, à l\'UE et aux régions euro-méditerranéennes, avec l\'apprentissage interculturel comme l\'une de nos valeurs fondamentales. Nous croyons en l\'éducation non formelle comme pilier d\'apprentissage pour inclure et développer l\'intérêt des jeunes, en particulier ceux qui ne sont pas privilégiés.',
    'about.impactNumbers': 'jeunes impactés de',
    'about.countries': 'pays',
    
    // Programs Section
    'programs.title': 'Nos Programmes',
    'programs.description': 'Initiatives complètes de développement des jeunes dans quatre domaines prioritaires clés',
    'programs.designThinking.title': 'Design Thinking & Entrepreneuriat',
    'programs.designThinking.description': 'Favoriser l\'innovation, la créativité et l\'esprit d\'entreprise chez les jeunes grâce aux méthodologies de design thinking et au développement pratique des compétences commerciales.',
    'programs.digital.title': 'Participation Numérique',
    'programs.digital.description': 'Améliorer la littératie numérique et les compétences d\'engagement en ligne pour assurer une participation significative dans la société numérique et les processus démocratiques.',
    'programs.intercultural.title': 'Dialogue Interculturel & Construction de la Paix',
    'programs.intercultural.description': 'Promouvoir la compréhension mutuelle, la tolérance et la coexistence pacifique grâce aux échanges interculturels structurés et à la facilitation du dialogue.',
    'programs.environmental.title': 'Durabilité Environnementale',
    'programs.environmental.description': 'Autonomiser les jeunes pour qu\'ils deviennent des leaders environnementaux et des défenseurs du développement durable dans leurs communautés.',

    // Impact Metrics Section  
    'impact.title': 'Notre Impact',
    'impact.description': 'Faire la différence à travers l\'Europe et la Méditerranée',
    'impact.projectsDelivered': 'Projets Réalisés',
    'impact.youthImpacted': 'Jeunes Impactés',
    'impact.partnersCollaborated': 'Partenaires Collaborés',
    'impact.countriesReached': 'Pays Atteints',

    // Success Stories Section
    'successStories.title': 'Ce que Disent les Gens',
    'successStories.description': 'Témoignages de participants et partenaires qui ont vécu nos programmes',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.description': 'Prêt à collaborer pour autonomiser les jeunes à travers l\'Europe ? Nous aimerions avoir de vos nouvelles.',
    'contact.form.organization': 'Nom de l\'Organisation',
    'contact.form.firstName': 'Prénom',
    'contact.form.lastName': 'Nom de Famille',
    'contact.form.email': 'Email',
    'contact.form.partnership': 'Intérêt de Partenariat',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',
    
    // Footer
    'footer.description': 'Autonomiser les jeunes à travers l\'Europe et la Méditerranée par l\'éducation non formelle innovante et les partenariats stratégiques.',
    'footer.programs': 'Programmes',
    'footer.resources': 'Ressources',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Coconut Luxembourg. Tous droits réservés.',

    // Team Section
    'team.title': 'Notre Équipe',
    'team.description': 'Coconut Luxembourg est soutenu par une équipe dédiée avec une vaste expérience en éducation non formelle et projets jeunesse.',
    
    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.viewAll': 'Voir Tout',
    'common.backToHome': 'Retour à l\'Accueil',
  },
  
  lb: {
    // Navigation
    'nav.home': 'Heem',
    'nav.about': 'Iwwer eis',
    'nav.programs': 'Programmer',
    'nav.impact': 'Impact',
    'nav.localInitiatives': 'Lokal Initiativen',
    'nav.resources': 'Ressourcen',
    'nav.partners': 'Partner',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Jugendlecher stäerken duerch',
    'hero.titleHighlight': 'Innovativ Erzéiung',
    'hero.description': 'Jonk Leit (18-30) Méiglechkeeten ginn fir sech aktiv an hirer perséinlecher Entwécklung ze engagéieren. Mir ënnerstëtzen Jugendaarbechter, Volontairen an Aktivisten duerch Europa an Euro-Mediterran Regiounen.',
    
    // About Section
    'about.title': 'Iwwer Coconut Luxembourg',
    'about.description1': 'Coconut Luxembourg bitt jonk Leit (18-30) Méiglechkeeten fir sech aktiv an hirer eegener perséinlecher Entwécklung ze engagéieren fir hiert Potenzial ze realiséieren. Mir kollaboréieren mat Jugend- an Gemeinschaftsorganisatiounen aus Europa an Nopeschlänner fir qualitativ héich Formatioun an Léieropportunitéiten ze bidden.',
    'about.description2': 'Eisen Aarbechtsbereich erstreckt sech iwwer Lëtzebuerg, EU an Euro-Mediterran Regiounen, mat interkulturellem Léieren als eng vun eisen Kärwäerter. Mir gleewen un net-formell Educatioun als Peiler vum Léieren fir d\'Interesse vu jonke Leit ze integréieren an ze wuessen, besonnesch déi déi net privilegéiert sinn.',
    'about.impactNumbers': 'Jugendlecher beaflosst aus',
    'about.countries': 'Länner',
    
    // Programs Section
    'programs.title': 'Eis Programmer',
    'programs.description': 'Ëmfassend Jugendentwécklungsinitativen a véier Schlëssel-Prioritéitsberäicher',
    'programs.designThinking.title': 'Design Thinking & Entrepreneurship',
    'programs.designThinking.description': 'Innovatioun, Kreativitéit an entrepreneuriell Mentaliséierung bei jonke Leit förderen duerch Design Thinking Methodologien a praktesch Geschäftsfäegkeetsentwécklung.',
    'programs.digital.title': 'Digital Participatioun',
    'programs.digital.description': 'Digital Litteralitéit an Online-Engagement Fäegkeeten verbesseren fir sënnvoll Participatioun an der digitaler Gesellschaft an demokratesche Prozesser ze garantéieren.',
    'programs.intercultural.title': 'Interkulturellem Dialog & Friddensbau',
    'programs.intercultural.description': 'Géigesäitegt Verständnis, Toleranz a friddlech Coexistenz förderen duerch strukturéiert interkulturell Austausch an Dialogfacilitatioun.',
    'programs.environmental.title': 'Ëmwelt Nohaltegkeet',
    'programs.environmental.description': 'Jugendlecher stäerken fir Ëmweltleader an Advokaten fir nohalteg Entwécklung an hiren Gemeinschaften ze ginn.',

    // Impact Metrics Section  
    'impact.title': 'Eisen Impact',
    'impact.description': 'Ënnerscheed maachen duerch Europa an d\'Mëttelmier',
    'impact.projectsDelivered': 'Projeten Ëmgesat',
    'impact.youthImpacted': 'Jugendlecher Beaflosst',
    'impact.partnersCollaborated': 'Partner Kollaboréiert',
    'impact.countriesReached': 'Länner Erreecht',

    // Success Stories Section
    'successStories.title': 'Wat d\'Leit soen',
    'successStories.description': 'Testimoniale vun Participanten a Partner déi eis Programmer erlieft hunn',
    
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.description': 'Prett fir ze kollaboréieren fir Jugendlecher duerch Europa ze stäerken? Mir géifen gär vun Iech héieren.',
    'contact.form.organization': 'Organisatiounsnumm',
    'contact.form.firstName': 'Virnumm',
    'contact.form.lastName': 'Familljennumm',
    'contact.form.email': 'Email',
    'contact.form.partnership': 'Partnerschaftsinteresse',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Message schécken',
    
    // Footer
    'footer.description': 'Jugendlecher duerch Europa an d\'Mëttelmier stäerken duerch innovativ net-formell Educatioun a strategesch Partnerschaften.',
    'footer.programs': 'Programmer',
    'footer.resources': 'Ressourcen',
    'footer.contact': 'Kontakt',
    'footer.copyright': '© 2025 Coconut Luxembourg. All Rechter reservéiert.',

    // Team Section
    'team.title': 'Eis Equipe',
    'team.description': 'Coconut Luxembourg gëtt ënnerstëtzt vun enger dedicéierter Equipe mat grousser Erfahrung an net-formeller Educatioun a Jugendprojeten.',
    
    // Common
    'common.learnMore': 'Méi ze wëssen',
    'common.viewAll': 'Alles kucken',
    'common.backToHome': 'Zréck op d\'Heem',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('coconut-language') as Language;
    if (savedLanguage && ['en', 'fr', 'lb'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('coconut-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};