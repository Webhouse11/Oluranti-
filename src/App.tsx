/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { BlogPreview } from "./components/BlogPreview";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
