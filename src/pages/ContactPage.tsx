import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Visit Us</h3>
              <p className="text-muted-foreground">
                123 Industrial Estate<br />
                Bangkok, Thailand 10400
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-muted-foreground">+66 2 123 4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-muted-foreground">contact@chaiudom.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 8:30 AM - 5:30 PM<br />
                24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input placeholder="Your Name" required />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" required />
          </div>
          <div>
            <Input placeholder="Subject" required />
          </div>
          <div>
            <Textarea 
              placeholder="Your Message" 
              className="min-h-[150px]" 
              required 
            />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;