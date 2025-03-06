import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const taglines = [
    <>Third Indian Company with <span className="text-primary">FDA Certification</span> in AI Healthcare</>,
    <>Revolutionizing Medical Imaging with <span className="text-primary">AI Healthcare</span></>,
    <>Setting New Standards in <span className="text-primary">Healthcare Technology</span></>
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-14 leading-tight relative h-24 md:h-32">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                {taglines[currentIndex]}
              </motion.div>
            </h1>
            <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-xl">
              Transforming healthcare through advanced AI solutions for medical imaging
              and diagnostics with world-class precision.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-lg"
              >
                Our Products
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary bg-white border border-primary/20 hover:bg-primary/5 transition-colors duration-200 mt-4 sm:mt-0"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              <img 
                src="/images/healthcare-ai.jpg" 
                alt="AI Healthcare Solutions"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}