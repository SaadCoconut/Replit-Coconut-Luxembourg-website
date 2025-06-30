import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Coconut Luxembourg</h3>
            <p className="text-neutral-300 mb-4">
              Empowering youth across Europe and the Mediterranean through innovative non-formal education and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-neutral-300">
              <li><a href="#" className="hover:text-white transition-colors">Design Thinking & Entrepreneurship</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Participation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intercultural Dialogue</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainable Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-neutral-300">
              <li><a href="#" className="hover:text-white transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impact Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnership Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>Luxembourg City</li>
              <li>Luxembourg, EU</li>
              <li>+352 (555) 123-4567</li>
              <li>info@coconutluxembourg.org</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">© 2024 Hope Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
