import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Cross, ChevronLeft } from "lucide-react";

const slides = [
  {
    id: 1,
    tagline: "Welcome to Oluranti Media House",
    title: "Spreading the Gospel Through",
    accent: "Media and Digital Power",
    description: "Reaching souls across the world through content, storytelling, and digital evangelism. We use the tools of today to share the message of eternity.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 2,
    tagline: "Impactful Storytelling",
    title: "Sharing God's Word Through",
    accent: "Powerful Visuals",
    description: "Creating high-quality Christian content that resonates with modern audiences and brings the light of Christ into every home.",
    image: "https://images.unsplash.com/photo-1510519133417-2ad0c3f0e227?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    tagline: "Digital Evangelism",
    title: "Reaching the Unreached in the",
    accent: "Digital Age",
    description: "Leveraging social media and online platforms to fulfill the Great Commission and connect people with the love of Jesus Christ.",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 4,
    tagline: "Global Outreach",
    title: "Empowering Believers Through",
    accent: "Christian Media",
    description: "Providing resources and inspiration to help Christians grow in their faith and share the Gospel in their own communities.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    tagline: "Raising Light",
    title: "Being a Voice of Truth in a",
    accent: "World of Darkness",
    description: "Standing firm on biblical values while using creative media to shine the light of the Gospel across every digital frontier.",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Hero() {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-primary">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/80" />
          </div>

          <div className="container relative z-10 px-4 mx-auto h-full flex items-center justify-center text-center text-white">
            <div className="max-w-5xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 mb-8 text-sm font-bold tracking-[0.2em] uppercase text-accent border-2 border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm"
              >
                {slides[current].tagline}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8 leading-[1]"
              >
                {slides[current].title} <br className="hidden md:block" />
                <span className="text-accent italic">{slides[current].accent}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-3xl mx-auto text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light"
              >
                {slides[current].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Button size="lg" className="h-16 px-10 text-xl bg-accent hover:bg-accent/90 text-primary font-bold rounded-full group" asChild>
                  <a href="#blog">
                    Read the Blog
                    <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                  <a href="#about">Our Mission</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-24 z-20 flex justify-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-accent w-10" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 text-white pointer-events-auto backdrop-blur-sm border border-white/10"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 text-white pointer-events-auto backdrop-blur-sm border border-white/10"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      {/* Decorative Cross Element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-20">
        <Cross className="h-16 w-16 text-accent animate-pulse" />
      </div>
    </section>
  );
}
