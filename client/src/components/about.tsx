import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">{t('about.title')}</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-neutral-600 leading-relaxed">
              {t('about.description1')}
            </p>
          </div>
        </div>

        {/* Geographic Scope Visualization - Vertical Flow */}
        <div className="mb-16">
          {/* Our Reach Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-neutral-800 mb-8">Our Geographic Reach</h3>
            
            {/* Vertical Geographic Flow */}
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col items-center space-y-6">
                {/* Luxembourg - Starting Point */}
                <div className="relative">
                  <div className="w-32 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg p-4">
                    <div className="text-center">
                      {/* Luxembourg Map SVG */}
                      <svg className="w-16 h-12 mx-auto mb-1" viewBox="0 0 60 40" fill="white">
                        <path d="M15 8 L45 8 L45 32 L15 32 Z M20 12 L40 12 L40 28 L20 28 Z" fill="white" stroke="white" strokeWidth="1"/>
                        <circle cx="30" cy="20" r="2" fill="white"/>
                      </svg>
                      <div className="text-xs font-bold text-white">Luxembourg</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-neutral-600 bg-white px-2 py-1 rounded shadow">Home Base</div>
                </div>

                {/* Connecting Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary"></div>
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </div>

                {/* EU Level */}
                <div className="relative">
                  <div className="w-48 h-32 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border-2 border-primary/30 p-4">
                    <div className="text-center">
                      {/* European Union Map SVG */}
                      <svg className="w-32 h-20 mx-auto mb-1" viewBox="0 0 120 80" fill="none">
                        {/* Simplified Europe outline */}
                        <path d="M20 25 Q30 15 45 20 Q60 18 75 25 Q90 22 100 30 L105 45 Q100 60 85 65 Q70 70 55 68 Q40 70 25 65 Q15 55 20 40 Z" 
                              fill="rgb(133, 77, 14)" stroke="rgb(133, 77, 14)" strokeWidth="1" opacity="0.8"/>
                        {/* Luxembourg highlighted */}
                        <circle cx="55" cy="40" r="3" fill="rgb(133, 77, 14)"/>
                        {/* EU stars pattern */}
                        <circle cx="35" cy="35" r="1" fill="rgb(133, 77, 14)"/>
                        <circle cx="45" cy="30" r="1" fill="rgb(133, 77, 14)"/>
                        <circle cx="65" cy="32" r="1" fill="rgb(133, 77, 14)"/>
                        <circle cx="75" cy="40" r="1" fill="rgb(133, 77, 14)"/>
                        <circle cx="80" cy="50" r="1" fill="rgb(133, 77, 14)"/>
                      </svg>
                      <div className="text-sm font-bold text-primary">European Union</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary"></div>
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </div>

                {/* Euro-Mediterranean Level */}
                <div className="relative">
                  <div className="w-56 h-36 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center border-2 border-secondary/30 p-4">
                    <div className="text-center">
                      {/* Euro-Mediterranean Map SVG */}
                      <svg className="w-40 h-24 mx-auto mb-1" viewBox="0 0 140 90" fill="none">
                        {/* Europe (simplified) */}
                        <path d="M20 15 Q35 5 55 12 Q75 8 95 18 Q110 15 120 25 L125 35 Q120 45 105 50 Q85 55 65 52 Q45 55 25 50 Q10 40 15 25 Z" 
                              fill="rgb(34, 139, 34)" stroke="rgb(34, 139, 34)" strokeWidth="1" opacity="0.7"/>
                        
                        {/* Mediterranean Sea */}
                        <ellipse cx="70" cy="55" rx="45" ry="8" fill="rgb(34, 139, 34)" opacity="0.3"/>
                        
                        {/* North Africa */}
                        <path d="M15 60 Q40 58 70 62 Q100 60 130 65 L135 75 Q110 80 80 78 Q50 82 20 78 Q5 70 10 65 Z" 
                              fill="rgb(34, 139, 34)" stroke="rgb(34, 139, 34)" strokeWidth="1" opacity="0.7"/>
                        
                        {/* Middle East */}
                        <path d="M120 30 Q130 28 138 35 L140 50 Q135 60 125 58 Q115 55 115 45 Q118 35 120 30 Z" 
                              fill="rgb(34, 139, 34)" stroke="rgb(34, 139, 34)" strokeWidth="1" opacity="0.7"/>
                        
                        {/* Key cities/regions marked */}
                        <circle cx="55" cy="35" r="2" fill="rgb(34, 139, 34)"/> {/* Luxembourg area */}
                        <circle cx="40" cy="65" r="1.5" fill="rgb(34, 139, 34)"/> {/* Morocco */}
                        <circle cx="85" cy="70" r="1.5" fill="rgb(34, 139, 34)"/> {/* Tunisia */}
                        <circle cx="125" cy="45" r="1.5" fill="rgb(34, 139, 34)"/> {/* Turkey */}
                      </svg>
                      <div className="text-sm font-bold text-secondary">Euro-Mediterranean</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-8">Our Core Values & Approach</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Intercultural Learning */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 6H4zm16.5-9.5L19 10l-2.5-1.5L15 10l-1.5-1.5L12 10l-1.5-1.5L9 10l-2.5-1.5L5 10l-1.5-1.5L2 10v8h20v-8l-1.5-1.5z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-3">Intercultural Learning</h4>
                  <p className="text-neutral-700 leading-relaxed">
                    Our core value fostering understanding and collaboration between diverse cultures across our regions
                  </p>
                </div>
              </div>

              {/* Non-formal Education */}
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-3">Non-formal Education</h4>
                  <p className="text-neutral-700 leading-relaxed">
                    Our pillar for including and empowering underserved youth through innovative learning approaches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">1,000+</div>
              <div className="text-lg text-neutral-600 font-medium">{t('about.impactNumbers')}</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-neutral-200"></div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">20+</div>
              <div className="text-lg text-neutral-600 font-medium">{t('about.countries')}</div>
            </div>
          </div>
        </div>

        {/* Mission and Beliefs Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                <svg className="w-7 h-7 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-14 h-14 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                <svg className="w-7 h-7 text-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
  );
}
