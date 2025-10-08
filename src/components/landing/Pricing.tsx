"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-accent/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Planes para cada estudiante
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            Elige el plan que mejor se adapte a tu estilo de vida académica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Básico */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="h-full border-2 border-border/50 hover:border-accent/50 transition-all duration-300 bg-card shadow-lg hover:shadow-2xl">
              <CardHeader className="text-center pb-6 sm:pb-8">
                <CardTitle className="text-xl sm:text-2xl text-foreground mb-2">Básico</CardTitle>
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Gratis</div>
                <CardDescription className="text-sm sm:text-base">Perfecto para empezar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {[
                  "Calendario institucional",
                  "5 recordatorios personales",
                  "Notificaciones básicas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
                <Button className="w-full mt-8 sm:mt-12 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg">
                  Comenzar gratis
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Estudiante */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="h-full md:col-span-2 lg:col-span-1"
          >
            <Card className="h-full border-2 border-secondary relative overflow-hidden bg-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-2 text-xs sm:text-sm font-semibold rounded-bl-2xl shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Más popular
              </div>
              <CardHeader className="text-center pb-6 sm:pb-8 pt-6 sm:pt-8">
                <CardTitle className="text-xl sm:text-2xl text-foreground mb-2">Estudiante</CardTitle>
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  $69<span className="text-base sm:text-lg font-normal text-foreground/60">/mes</span>
                </div>
                <CardDescription className="text-sm sm:text-base">Para estudiantes activos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {[
                  "Todo del plan Básico",
                  "Recordatorios ilimitados",
                  "Recordatorios inteligentes con IA",
                  "Integración con clima",
                  "Sincronización en la nube",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
                <Button className="w-full mt-6 sm:mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Elegir plan
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="h-full border-2 border-primary/50 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary">
              <CardHeader className="text-center pb-6 sm:pb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
                  <CardTitle className="text-xl sm:text-2xl text-foreground">Premium</CardTitle>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  $99<span className="text-base sm:text-lg font-normal text-foreground/60">/mes</span>
                </div>
                <CardDescription className="text-sm sm:text-base">Para líderes estudiantiles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {[
                  "Todo del plan Estudiante",
                  "Recordatorios grupales",
                  "Análisis de productividad",
                  "Soporte prioritario 24/7",
                  "Integraciones avanzadas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
                <Button className="w-full mt-6 sm:mt-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Elegir Premium
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Guarantee section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
}


