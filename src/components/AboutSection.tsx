import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Shield } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: "ปีประสบการณ์", value: "15+", color: "bg-primary" },
    { icon: Users, label: "ลูกค้าพึงพอใจ", value: "5000+", color: "bg-tech-gradient" },
    { icon: Clock, label: "ชั่วโมงบริการ", value: "24/7", color: "bg-primary" },
    { icon: Shield, label: "รับประกัน", value: "100%", color: "bg-tech-gradient" }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                เกี่ยวกับเรา
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                ผู้นำด้านเทคโนโลยีคอมพิวเตอร์
                <span className="text-primary"> มากกว่า 15 ปี</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              เราเป็นร้านคอมพิวเตอร์ที่มีประสบการณ์ยาวนาน ด้วยทีมช่างผู้เชี่ยวชาญ 
              และสินค้าคุณภาพสูงจากแบรนด์ชั้นนำทั่วโลก พร้อมให้บริการลูกค้าด้วยใจ
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">คุณภาพเป็นหลัก</h4>
                  <p className="text-muted-foreground">สินค้าของแท้ 100% จากตัวแทนจำหน่ายอย่างเป็นทางการ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">บริการครบวงจร</h4>
                  <p className="text-muted-foreground">จำหน่าย ติดตั้ง ซ่อมแซม และดูแลหลังการขาย</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">ราคายุติธรรม</h4>
                  <p className="text-muted-foreground">ราคาสมเหตุสมผล แข่งขันได้ พร้อมโปรโมชั่นสุดคุ้ม</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-border/50 hover:shadow-tech transition-all duration-300 group">
                  <CardContent className="p-6 space-y-4">
                    <div className={`mx-auto w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;