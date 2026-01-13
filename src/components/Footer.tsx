import lokarthLogo from "@/assets/lokarth-logo.jpeg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={lokarthLogo}
                alt="Lokarth Logo"
                className="h-12 w-12 object-contain rounded-full"
              />
              <div>
                <span className="font-heading font-bold text-xl">Lokarth</span>
                <p className="text-sm text-background/60">Lokpeeth Foundation</p>
              </div>
            </div>
            <p className="text-background/60 text-sm max-w-sm">
              Innovations for People. Bridging the gap between stagnation and
              regeneration through sustainable technologies in Energy, Healthcare,
              and Agriculture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/60 hover:text-background transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/60 hover:text-background transition-colors text-sm">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#verticals" className="text-background/60 hover:text-background transition-colors text-sm">
                  Our Innovations
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-background/60 hover:text-background transition-colors text-sm">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/60 hover:text-background transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Verticals</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-background/60 text-sm">Positronics - Energy</span>
              </li>
              <li>
                <span className="text-background/60 text-sm">Raypure - Healthcare</span>
              </li>
              <li>
                <span className="text-background/60 text-sm">Lokarth Innovations - Agriculture</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Lokpeeth Foundation. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Section 8 Non-Profit Organization | India
          </p>
        </div>
      </div>
    </footer>
  );
};
