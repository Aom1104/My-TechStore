import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-computer-store.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl animate-float" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">🖥️ ร้านคอมพิวเตอร์ชั้นนำ</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              ร้านคอมพิวเตอร์
              <br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse-glow">
                เทคโนโลยี
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-lg mx-auto lg:mx-0">
              จำหน่ายคอมพิวเตอร์ โน้ตบุ๊ค อุปกรณ์ไอที และบริการซ่อมแซม ด้วยทีมผู้เชี่ยวชาญ มากกว่า 15 ปี
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow transition-all duration-300 hover:scale-105"
              >
                ดูสินค้าทั้งหมด
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                ติดต่อเรา
              </Button>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>กรุงเทพมหานคร</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="text-sm">
                เปิดทุกวัน 9:00 - 20:00 น.
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="ร้านคอมพิวเตอร์และอุปกรณ์ไอที" 
                className="w-full h-auto rounded-2xl shadow-tech border border-white/20"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;