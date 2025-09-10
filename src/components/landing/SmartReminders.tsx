"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Bell, Cloud } from "lucide-react";

export default function SmartReminders() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Recordatorios Inteligentes</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Recibe notificaciones contextuales que te ayudan a estar siempre preparado
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-6 shadow-xl border-0 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
            <div className="flex items-start gap-4">
              <Bell className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Recordatorio Inteligente</h3>
                <p className="opacity-90 leading-relaxed">
                  &quot;Hoy hay evaluación docente ☑ y además lloverá ☔, lleva paraguas&quot;
                </p>
                <div className="flex items-center gap-2 mt-3 text-sm text-accent">
                  <Cloud className="w-4 h-4" />
                  <span>Hace 5 minutos</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}


