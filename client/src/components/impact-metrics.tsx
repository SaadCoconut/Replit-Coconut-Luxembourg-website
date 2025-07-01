import { useLanguage } from "@/contexts/LanguageContext";

export default function ImpactMetrics() {
  const { t } = useLanguage();
  const metrics = [
    {
      value: "4,000+",
      label: t('impact.youthImpacted'),
      description: "Across Europe and Mediterranean"
    },
    {
      value: "100+",
      label: t('impact.projectsDelivered'),
      description: "In entrepreneurship and education"
    },
    {
      value: "70+",
      label: t('impact.partnersCollaborated'),
      description: "Organizations across the network"
    },
    {
      value: "20+",
      label: t('impact.countriesReached'), 
      description: "Throughout Europe and beyond"
    }
  ];

  return (
    <section id="impact" className="bg-gradient-to-r from-primary to-amber-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('impact.title')}</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            {t('impact.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-4 text-accent">{metric.value}</div>
              <div className="text-lg font-medium mb-2">{metric.label}</div>
              <div className="text-blue-200 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
