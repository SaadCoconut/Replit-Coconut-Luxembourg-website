export default function TrustIndicators() {
  const partners = [
    "UN Partners",
    "Gates Foundation", 
    "World Bank",
    "USAID"
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Trusted by Leading Organizations</h2>
          <p className="text-lg text-neutral-600">Building partnerships with transparency and accountability</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-neutral-100 h-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-neutral-700">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
