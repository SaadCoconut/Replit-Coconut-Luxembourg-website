export default function ImpactMetrics() {
  const metrics = [
    {
      value: "250,000+",
      label: "Lives Directly Impacted",
      description: "Across all programs since 2015"
    },
    {
      value: "$4.2M",
      label: "Funding Managed",
      description: "98% efficiency rating from partners"
    },
    {
      value: "45+",
      label: "Active Partnerships",
      description: "With government and NGO agencies"
    },
    {
      value: "89%",
      label: "Project Sustainability", 
      description: "Programs continuing post-funding"
    }
  ];

  return (
    <section id="impact" className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Measurable Impact</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent reporting and data-driven results that demonstrate the effectiveness of our partnerships
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
