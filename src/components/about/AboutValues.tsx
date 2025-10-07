"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Heart, Users, Sparkles } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de mejorar la experiencia del estudiante",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Heart,
      title: "Empatía",
      description: "Entendemos los desafíos de la vida universitaria porque los hemos vivido",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Creemos en el poder de ayudarnos mutuamente para alcanzar nuestras metas",
      color: "bg-accent/30 text-accent-foreground"
    },
    {
      icon: Sparkles,
      title: "Calidad",
      description: "Nos comprometemos a entregar un producto excepcional en cada iteración",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros Valores
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Los principios que guían cada decisión que tomamos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border/50 hover:border-primary/30">
                <CardContent className="p-0 space-y-4 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${value.color} flex items-center justify-center`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

