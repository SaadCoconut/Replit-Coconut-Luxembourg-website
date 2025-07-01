import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">Contact Us</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Get in touch with Coconut Luxembourg for partnerships, collaborations, or to learn more about our youth empowerment programs.
          </p>
        </div>
        
        <Contact />
      </div>
    </div>
  );
}