import { Cross, Facebook, Twitter, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cross className="h-8 w-8 text-accent" />
              <span className="font-heading text-3xl font-bold tracking-tight text-white uppercase">
                Oluranti
              </span>
            </div>
            <p className="text-white/60 mb-8 leading-relaxed">
              Using media and digital platforms to spread the Gospel of the Lord Jesus Christ across the world.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-accent uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Our Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-accent uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-4 text-white/60">
              <li>Digital Evangelism</li>
              <li>Content Storytelling</li>
              <li>Media Ministry</li>
              <li>Gospel Outreach</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 text-accent uppercase tracking-widest">Newsletter</h4>
            <p className="text-white/60 mb-6">Receive spiritual encouragement in your inbox today!</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Your Email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-full pr-12"
              />
              <Button size="icon" className="absolute right-1 top-1 h-10 w-10 rounded-full bg-accent text-primary hover:bg-accent/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm mb-2 italic">"Raising Light Through Media"</p>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Oluranti Media House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
