"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle } from "lucide-react";

export default function InstitutionalCalendar() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Calendario Institucional Automático</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              El calendario del Tec de Veracruz ya viene precargado con todas las fechas importantes: inscripciones,
              evaluaciones, créditos y días festivos. No necesitas configurar nada.
            </p>
            <div className="flex items-center gap-3 text-foreground/70">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Sincronización automática</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
            <Card className="p-6 shadow-xl border-0">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Noviembre 2024</h3>
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-sm text-foreground">15 Nov - Evaluación Docente</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-sm text-foreground">20 Nov - Día de la Revolución</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">25 Nov - Inscripciones</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


