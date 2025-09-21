import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin } from "lucide-react";

const Header = () => {
  const navItems = [
    { label: "หน้าแรก", href: "#home" },
    { label: "สินค้าและบริการ", href: "#services" },
    { label: "เกี่ยวกับเรา", href: "#about" },
    { label: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">TechStore</h1>
              <p className="text-xs text-muted-foreground">Computer Shop</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>02-123-4567</span>
            </div>
            <Button size="sm" className="bg-tech-gradient hover:bg-tech-gradient-dark text-white">
              ติดต่อเรา
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-tech-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <div>
                    <h1 className="font-bold text-lg text-foreground">TechStore</h1>
                    <p className="text-xs text-muted-foreground">Computer Shop</p>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>02-123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>กรุงเทพมหานคร</span>
                  </div>
                  <Button className="w-full bg-tech-gradient hover:bg-tech-gradient-dark text-white">
                    ติดต่อเรา
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;