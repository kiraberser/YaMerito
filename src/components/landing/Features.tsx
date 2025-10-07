"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Home, Trophy } from "lucide-react";

export default function Features() {
  const items = [
    { icon: GraduationCap, title: "Escuela", description: "Tareas, exámenes, inscripciones", color: "text-foreground", bg: "bg-primary/10" },
    { icon: Users, title: "Amigos", description: "Fiestas, reuniones", color: "text-secondary", bg: "bg-secondary/10" },
    { icon: Home, title: "Familia", description: "Cumpleaños, aniversarios", color: "text-accent-foreground", bg: "bg-accent/30" },
    { icon: Trophy, title: "Deporte", description: "Entrenamientos, partidos", color: "text-foreground", bg: "bg-primary/10" },
  ];

  return (
    <section id="features" className="px-4 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Organiza cada aspecto de tu vida
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            YaMerito te ayuda a mantener el control de todas tus actividades importantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl ${feature.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <feature.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-foreground text-xl sm:text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-center text-foreground/70 text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


