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
    <section className="px-4 py-20 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Organiza cada aspecto de tu vida</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            YaMerito te ayuda a mantener el control de todas tus actividades importantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-foreground/70">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


