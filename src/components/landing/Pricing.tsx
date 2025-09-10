"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Planes para cada estudiante</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu estilo de vida académica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Básico */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-gray-200 hover:border-accent transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-foreground mb-2">Básico</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">Gratis</div>
                <CardDescription>Perfecto para empezar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Calendario institucional",
                  "5 recordatorios personales",
                  "Notificaciones básicas",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
                <Button className="w-full mt-28 bg-accent text-accent-foreground hover:opacity-90">Comenzar gratis</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Estudiante */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium">Más popular</div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-foreground mb-2">Estudiante</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $49<span className="text-lg font-normal">/mes</span>
                </div>
                <CardDescription>Para estudiantes activos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Todo del plan Básico",
                  "Recordatorios ilimitados",
                  "Recordatorios inteligentes",
                  "Integración con clima",
                  "Sincronización en la nube",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
                <Button className="w-full mt-8 bg-secondary text-secondary-foreground hover:opacity-90">Elegir plan</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-primary bg-gradient-to-b from-primary/5 to-transparent">
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-primary" />
                  <CardTitle className="text-2xl text-foreground">Premium</CardTitle>
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $99<span className="text-lg font-normal">/mes</span>
                </div>
                <CardDescription>Para líderes estudiantiles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Todo del plan Estudiante",
                  "Recordatorios grupales",
                  "Análisis de productividad",
                  "Soporte prioritario",
                  "Integraciones avanzadas",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
                <Button className="w-full mt-8">Elegir Premium</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


