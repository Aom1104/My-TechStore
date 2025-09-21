import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Laptop, Wrench, Cpu, HardDrive, Gamepad2 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "คอมพิวเตอร์ตั้งโต๊ะ",
    description: "PC สำหรับทำงาน เล่นเกม และใช้งานทั่วไป พร้อมประกันคุณภาพ",
    features: ["Intel & AMD Processor", "การ์ดจอชั้นนำ", "RAM DDR4/DDR5"]
  },
  {
    icon: Laptop,
    title: "โน้ตบุ๊ค",
    description: "แล็ปท็อปทุกยี่ห้อ สำหรับนักเรียน นักศึกษา และผู้ประกอบการ",
    features: ["หลายยี่ห้อให้เลือก", "ราคาย่อมเยา", "รับประกันศูนย์"]
  },
  {
    icon: Cpu,
    title: "อุปกรณ์คอมพิวเตอร์",
    description: "CPU, เมนบอร์ด, RAM, การ์ดจอ และอุปกรณ์อื่นๆ",
    features: ["ของแท้ 100%", "ราคาโรงงาน", "สต็อกครบครัน"]
  },
  {
    icon: Gamepad2,
    title: "Gaming Gear",
    description: "อุปกรณ์เกมมิ่ง คีย์บอร์ด เมาส์ หูฟัง และจอยสติ๊ก",
    features: ["Gaming Keyboard", "Gaming Mouse", "Gaming Headset"]
  },
  {
    icon: HardDrive,
    title: "จัดเก็บข้อมูล",
    description: "SSD, HDD, Flash Drive และอุปกรณ์จัดเก็บข้อมูลทุกประเภท",
    features: ["SSD ความเร็วสูง", "HDD ความจุใหญ่", "External Storage"]
  },
  {
    icon: Wrench,
    title: "บริการซ่อม",
    description: "ซ่อมคอมพิวเตอร์ โน้ตบุ๊ค และอุปกรณ์ไอที ด้วยทีมช่างผู้เชี่ยวชาญ",
    features: ["ตรวจสอบฟรี", "ช่างมีประสบการณ์", "รับประกันการซ่อม"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            สินค้าและบริการของเรา
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            เราจำหน่ายอุปกรณ์คอมพิวเตอร์ครบครัน พร้อมบริการหลังการขายที่ดีเยี่ยม
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-tech-gradient rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;