"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative px-4 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="z-10 text-center lg:text-left space-y-6 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Inteligencia artificial integrada</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="block">Tu asistente de</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                recuerdos inteligentes
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Organiza tu vida académica y personal. Nunca vuelvas a olvidar una tarea, examen o evento importante.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-[#EB455F] hover:bg-[#EB455F]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <Link href="/auth/login">
                  Empieza gratis
                  <Sparkles className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <Link href="#features">
                  Ver características
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-6 border-t border-border/50"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-foreground/60">Estudiantes activos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-foreground/60">Recordatorios creados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">99%</div>
                <div className="text-sm text-foreground/60">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Estudiantes colaborando y estudiando juntos"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10" />

              {/* Floating notification badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md text-foreground px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-primary/10"
              >
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm sm:text-base font-semibold">3 recordatorios pendientes</span>
              </motion.div>

              {/* Bottom success badge */}
              <motion.div
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center gap-2 shadow-xl border border-accent/20"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm sm:text-base font-medium text-foreground">5 tareas completadas hoy</span>
              </motion.div>
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}


