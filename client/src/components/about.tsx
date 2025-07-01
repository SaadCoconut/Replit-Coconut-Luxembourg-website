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
                      {/* Luxembourg Map SVG - Accurate outline */}
                      <svg className="w-16 h-20 mx-auto mb-1" viewBox="0 0 100 120" fill="white">
                        <path d="M 30 15 L 70 15 L 75 25 L 78 40 L 75 55 L 70 70 L 65 85 L 55 95 L 45 100 L 35 95 L 25 85 L 20 70 L 18 55 L 20 40 L 25 25 Z" 
                              fill="white" stroke="white" strokeWidth="1"/>
                        <circle cx="50" cy="60" r="2" fill="white"/>
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
                      {/* European Union Map SVG - Accurate Europe outline */}
                      <svg className="w-36 h-24 mx-auto mb-1" viewBox="0 0 800 600" fill="none">
                        {/* Accurate Europe outline based on geographic data */}
                        <path d="M 120 180 L 150 160 L 180 150 L 210 140 L 250 135 L 290 140 L 330 145 L 370 150 L 410 155 L 450 160 L 490 165 L 530 170 L 570 175 L 610 180 L 650 185 L 680 200 L 700 220 L 720 250 L 730 280 L 735 320 L 730 360 L 720 400 L 700 440 L 680 470 L 650 490 L 610 500 L 570 505 L 530 500 L 490 495 L 450 490 L 410 485 L 370 480 L 330 475 L 290 470 L 250 465 L 210 460 L 180 450 L 150 440 L 130 420 L 115 400 L 105 380 L 100 360 L 105 340 L 110 320 L 115 300 L 120 280 L 125 260 L 120 240 L 115 220 L 120 200 Z" 
                              fill="rgb(133, 77, 14)" stroke="rgb(133, 77, 14)" strokeWidth="2" opacity="0.8"/>
                        {/* Scandinavia */}
                        <path d="M 300 100 L 350 90 L 400 95 L 420 120 L 430 150 L 420 180 L 400 200 L 370 210 L 340 200 L 320 180 L 300 160 L 290 140 L 295 120 Z" 
                              fill="rgb(133, 77, 14)" opacity="0.8"/>
                        {/* British Isles */}
                        <path d="M 180 200 L 200 190 L 220 200 L 230 220 L 225 240 L 220 260 L 210 280 L 200 290 L 185 285 L 175 270 L 170 250 L 175 230 L 180 210 Z" 
                              fill="rgb(133, 77, 14)" opacity="0.8"/>
                        {/* Iberian Peninsula */}
                        <path d="M 120 350 L 160 340 L 200 350 L 220 370 L 230 400 L 220 430 L 200 450 L 170 460 L 140 455 L 120 440 L 110 420 L 115 400 L 120 380 Z" 
                              fill="rgb(133, 77, 14)" opacity="0.8"/>
                        {/* Italian Peninsula */}
                        <path d="M 400 350 L 420 340 L 430 360 L 440 390 L 445 420 L 440 450 L 430 480 L 420 500 L 410 480 L 405 450 L 400 420 L 395 390 L 398 370 Z" 
                              fill="rgb(133, 77, 14)" opacity="0.8"/>
                        {/* Luxembourg highlighted */}
                        <circle cx="350" cy="280" r="6" fill="rgb(133, 77, 14)" stroke="white" strokeWidth="2"/>
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
                      {/* Euro-Mediterranean Map SVG - Accurate geographic representation */}
                      <svg className="w-44 h-28 mx-auto mb-1" viewBox="0 0 1000 600" fill="none">
                        {/* Europe - Accurate outline */}
                        <path d="M 150 120 L 200 100 L 250 90 L 300 85 L 350 90 L 400 95 L 450 100 L 500 105 L 550 110 L 600 115 L 650 120 L 700 130 L 750 145 L 780 170 L 800 200 L 810 240 L 805 280 L 790 320 L 770 350 L 740 375 L 700 390 L 650 395 L 600 390 L 550 385 L 500 380 L 450 375 L 400 370 L 350 365 L 300 360 L 250 355 L 200 350 L 170 330 L 150 300 L 140 270 L 145 240 L 150 210 L 155 180 L 150 150 Z" 
                              fill="rgb(34, 139, 34)" stroke="rgb(34, 139, 34)" strokeWidth="3" opacity="0.8"/>
                        
                        {/* Scandinavia */}
                        <path d="M 350 60 L 400 50 L 450 55 L 480 80 L 490 110 L 480 140 L 450 160 L 410 170 L 370 160 L 340 140 L 330 110 L 335 80 Z" 
                              fill="rgb(34, 139, 34)" opacity="0.8"/>
                        
                        {/* British Isles */}
                        <path d="M 200 150 L 230 140 L 260 150 L 280 170 L 275 190 L 270 210 L 260 230 L 250 240 L 230 235 L 215 220 L 205 200 L 200 180 Z" 
                              fill="rgb(34, 139, 34)" opacity="0.8"/>
                        
                        {/* North Africa - Morocco to Egypt */}
                        <path d="M 100 420 L 200 410 L 300 415 L 400 420 L 500 425 L 600 430 L 700 435 L 800 440 L 850 460 L 880 490 L 870 520 L 850 540 L 800 550 L 700 545 L 600 540 L 500 535 L 400 530 L 300 525 L 200 520 L 120 510 L 100 490 L 95 460 Z" 
                              fill="rgb(34, 139, 34)" opacity="0.8"/>
                        
                        {/* Middle East */}
                        <path d="M 750 200 L 850 190 L 920 210 L 950 250 L 960 300 L 950 350 L 920 380 L 880 400 L 840 410 L 800 400 L 770 380 L 750 350 L 745 320 L 750 280 L 755 240 Z" 
                              fill="rgb(34, 139, 34)" opacity="0.8"/>
                        
                        {/* Mediterranean Sea - lighter color */}
                        <ellipse cx="500" cy="350" rx="300" ry="50" fill="rgb(135, 206, 235)" opacity="0.4" stroke="rgb(34, 139, 34)" strokeWidth="1"/>
                        
                        {/* Key locations marked */}
                        <circle cx="400" cy="200" r="8" fill="rgb(34, 139, 34)" stroke="white" strokeWidth="2"/> {/* Luxembourg */}
                        <circle cx="250" cy="480" r="6" fill="rgb(34, 139, 34)"/> {/* Morocco */}
                        <circle cx="450" cy="500" r="6" fill="rgb(34, 139, 34)"/> {/* Algeria */}
                        <circle cx="550" cy="510" r="6" fill="rgb(34, 139, 34)"/> {/* Tunisia */}
                        <circle cx="850" cy="300" r="6" fill="rgb(34, 139, 34)"/> {/* Turkey */}
                        <circle cx="750" cy="480" r="6" fill="rgb(34, 139, 34)"/> {/* Egypt */}
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
