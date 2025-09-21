import { Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tech-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="font-bold text-lg">TechStore</h1>
                <p className="text-xs text-white/70">Computer Shop</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              ร้านคอมพิวเตอร์ชั้นนำ จำหน่ายอุปกรณ์ไอทีครบครัน 
              พร้อมบริการซ่อมแซมโดยช่างผู้เชี่ยวชาญ
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">เมนูหลัก</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">หน้าแรก</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">สินค้าและบริการ</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">เกี่ยวกับเรา</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">บริการ</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">จำหน่ายคอมพิวเตอร์</li>
              <li className="text-white/80">จำหน่ายโน้ตบุ๊ค</li>
              <li className="text-white/80">อุปกรณ์คอมพิวเตอร์</li>
              <li className="text-white/80">บริการซ่อมแซม</li>
              <li className="text-white/80">ติดตั้งระบบ</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">ติดต่อเรา</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-glow" />
                <span className="text-white/80">
                  123 ถนนเทคโนโลยี แขวงไอที<br />
                  เขตคอมพิวเตอร์ กรุงเทพฯ 10110
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-white/80">02-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-white/80">info@techstore.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 TechStore Computer Shop. สงวนลิขสิทธิ์ทุกประการ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;