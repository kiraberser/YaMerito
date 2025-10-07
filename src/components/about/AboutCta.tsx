"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            ¿Listo para organizarte mejor?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Únete a nuestra comunidad y descubre cómo YaMerito puede transformar tu vida académica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl text-base sm:text-lg px-8 py-6"
            >
              <Link href="/auth/signup">Comenzar gratis</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg px-8 py-6"
            >
              <Link href="mailto:contacto@yamerito.com">Contáctanos</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

