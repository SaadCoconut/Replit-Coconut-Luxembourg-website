import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://coconutwork.org/wp-content/uploads/2024/11/coconutwork-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </video>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}{" "}
            <span className="text-accent">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
