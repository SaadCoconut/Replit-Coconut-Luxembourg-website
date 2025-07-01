import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">{t('about.title')}</h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">1,000+</span>
                <span className="text-xl text-neutral-600">{t('about.impactNumbers')}</span>
                <span className="text-3xl font-bold text-secondary">20+</span>
                <span className="text-xl text-neutral-600">{t('about.countries')}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-primary transition-colors duration-300">Our Mission</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      To empower youth to grow personally, in their careers, and evolve their community through active 
                      participation and quality non-formal education opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6 text-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-secondary transition-colors duration-300">Our Beliefs</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      We believe in improving quality standards of youth work by providing outstanding learning opportunities 
                      for young people, especially those not privileged. Non-formal education is our pillar to include, 
                      grow interest, and satisfy needs where formal education might have failed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
