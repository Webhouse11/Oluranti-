import { motion } from "motion/react";
import { Target, Compass, Heart } from "lucide-react";

const features = [
  {
    title: "Our Vision",
    description: "To impact lives globally through gospel-centered media that resonates with the modern heart.",
    icon: Target,
  },
  {
    title: "Our Mission",
    description: "To use digital tools and creative storytelling to preach Christ to the world and reach the unreached.",
    icon: Compass,
  },
  {
    title: "Our Values",
    description: "Integrity, excellence, and a deep passion for the Great Commission in everything we produce.",
    icon: Heart,
  },
];

const stats = [
  { label: "Souls Reached", value: "120k+" },
  { label: "Digital Content", value: "500+" },
  { label: "Countries Impacted", value: "15+" },
  { label: "Years of Ministry", value: "10+" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                alt="Ministry Work" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-accent/20 rounded-2xl rotate-3 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Story</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Faith, Mission and <br />
              <span className="text-accent italic">Vision Together</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Oluranti Media House is a Christian media ministry dedicated to using the power of digital platforms to spread the Gospel of the Lord Jesus Christ. In a world of noise, we aim to be a voice of truth and light.
            </p>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
