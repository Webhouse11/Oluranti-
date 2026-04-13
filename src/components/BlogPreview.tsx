import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Strengthening Your Faith Through Consistent Daily Prayer Life",
    date: "April 10, 2024",
    category: "Spiritual Growth",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Trusting God Fully During Life's Difficult and Uncertain Times",
    date: "April 08, 2024",
    category: "Faith",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Staying Spiritually Strong Through Faith and Daily Prayer",
    date: "April 05, 2024",
    category: "Ministry",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Insights & Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6"
          >
            Latest News & <span className="text-accent italic">Articles</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <BookOpen className="h-4 w-4 text-accent" />
                {post.date}
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14" asChild>
            <a href="https://olurantimedia.blogspot.com/?m=1" target="_blank" rel="noopener noreferrer">
              Visit Full Blog
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
