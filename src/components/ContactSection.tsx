import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ติดต่อเรา
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            พร้อมให้คำปรึกษาและบริการลูกค้าทุกวัน ติดต่อเราได้หลายช่องทาง
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">ข้อมูลติดต่อ</CardTitle>
                <CardDescription>ช่องทางการติดต่อของเรา</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">ที่อยู่ร้าน</p>
                    <p className="text-muted-foreground text-sm">
                      123 ถนนเทคโนโลยี แขวงไอที<br />
                      เขตคอมพิวเตอร์ กรุงเทพฯ 10110
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">โทรศัพท์</p>
                    <p className="text-muted-foreground text-sm">02-123-4567</p>
                    <p className="text-muted-foreground text-sm">089-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">อีเมล</p>
                    <p className="text-muted-foreground text-sm">info@techstore.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">เวลาทำการ</p>
                    <p className="text-muted-foreground text-sm">จันทร์ - อาทิตย์</p>
                    <p className="text-muted-foreground text-sm">9:00 - 20:00 น.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">ติดตามเรา</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <Facebook className="h-5 w-5 text-primary" />
                  Facebook Page
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Line Official
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">ส่งข้อความถึงเรา</CardTitle>
                <CardDescription>
                  กรอกข้อมูลด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">ชื่อ *</label>
                    <Input placeholder="กรุณากรอกชื่อของคุณ" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">เบอร์โทรศัพท์ *</label>
                    <Input placeholder="กรุณากรอกเบอร์โทรศัพท์" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">อีเมล</label>
                  <Input type="email" placeholder="กรุณากรอกอีเมล" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">หัวข้อ *</label>
                  <Input placeholder="หัวข้อที่ต้องการสอบถาม" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">รายละเอียด *</label>
                  <Textarea 
                    placeholder="กรุณากรอกรายละเอียดที่ต้องการสอบถาม..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full md:w-auto bg-tech-gradient hover:bg-tech-gradient-dark text-white shadow-tech">
                  ส่งข้อความ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;