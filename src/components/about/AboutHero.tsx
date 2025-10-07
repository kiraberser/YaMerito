"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Nuestra historia</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Sobre <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">YaMerito</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed px-4">
            Creado por estudiantes, para estudiantes del Tec de Veracruz
          </p>
        </motion.div>
      </div>
    </section>
  );
}

