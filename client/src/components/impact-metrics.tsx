export default function ImpactMetrics() {
  const metrics = [
    {
      value: "4,000+",
      label: "Youth Impacted",
      description: "Across Europe and Mediterranean"
    },
    {
      value: "100+",
      label: "Projects Completed",
      description: "In entrepreneurship and education"
    },
    {
      value: "70+",
      label: "Active Partners",
      description: "Organizations across the network"
    },
    {
      value: "20+",
      label: "Countries Reached", 
      description: "Throughout Europe and beyond"
    }
  ];

  return (
    <section id="impact" className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Measurable Impact</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real numbers that showcase our commitment to empowering youth across Europe and the Mediterranean region
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
