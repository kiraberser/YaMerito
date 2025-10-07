"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full" />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondary/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-accent/20 to-transparent" />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Únete a la comunidad</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight px-4">
            Descubre cómo YaMerito puede ayudarte a no olvidar nada
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Únete a los estudiantes del Tec que ya organizan su vida con YaMerito
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 group"
            >
              <Link href="/auth/signup" className="flex items-center gap-2">
                Comenzar gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7"
            >
              <Link href="#features">
                Ver más características
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto pt-8 sm:pt-12 border-t border-white/20"
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-white/80">Estudiantes activos</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Recordatorios creados</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99%</div>
              <div className="text-sm text-white/80">Satisfacción</div>
            </div>
          </motion.div>

          {/* Trust badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-white/70 mt-8"
          >
            🔒 Tus datos están seguros · 100% gratis para empezar · Sin tarjeta de crédito
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}


