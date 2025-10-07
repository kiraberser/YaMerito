"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Award, Rocket } from "lucide-react";

export default function AboutStats() {
  const stats = [
    { icon: Users, value: "100+", label: "Estudiantes activos" },
    { icon: TrendingUp, value: "500+", label: "Recordatorios creados" },
    { icon: Award, value: "99%", label: "Satisfacción" },
    { icon: Rocket, value: "24/7", label: "Disponibilidad" }
  ];

  return (
    <section className="px-4 py-16 sm:py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestro Impacto
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            En poco tiempo, hemos ayudado a cientos de estudiantes a organizarse mejor
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/30">
                <CardContent className="p-0 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

