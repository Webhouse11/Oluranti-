import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6"
            >
              Join Our <span className="text-accent italic">Community Today</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl text-center border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Email Us</h3>
              <a href="mailto:olurantiprofile@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                olurantiprofile@gmail.com
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Social Media</h3>
              <div className="flex justify-center gap-4">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Newsletter</h3>
              <p className="text-muted-foreground">Subscribe for updates</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border"
          >
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary font-bold uppercase tracking-wider text-xs">Full Name</Label>
                <Input id="name" placeholder="Your Name" className="border-border focus:ring-accent text-primary h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-bold uppercase tracking-wider text-xs">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="border-border focus:ring-accent text-primary h-12 rounded-xl" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message" className="text-primary font-bold uppercase tracking-wider text-xs">Your Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="border-border focus:ring-accent text-primary min-h-[150px] rounded-xl" />
              </div>
              <div className="md:col-span-2">
                <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white font-bold rounded-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
