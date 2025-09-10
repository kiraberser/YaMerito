"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="px-4 py-20 bg-primary">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Descubre cómo YaMerito puede ayudarte a no olvidar nada
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Únete a los estudiantes del Tec que ya organizan su vida con YaMerito
          </p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:opacity-90 px-8 py-4 text-lg">
            Comenzar gratis
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


