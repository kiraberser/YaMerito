"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock, MapPin } from "lucide-react";

export default function InstitutionalCalendar() {
  const events = [
    { date: "15 Nov", title: "Evaluación Docente", color: "secondary", time: "Todo el día" },
    { date: "20 Nov", title: "Día de la Revolución", color: "accent", time: "Festivo" },
    { date: "25 Nov", title: "Inscripciones", color: "primary", time: "9:00 AM" },
  ];

  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Calendario inteligente</span>
              </div>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Calendario Institucional Automático
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
              El calendario del Tec de Veracruz ya viene precargado con todas las fechas importantes: inscripciones,
              evaluaciones, créditos y días festivos. No necesitas configurar nada.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Sincronización automática</h3>
                  <p className="text-sm text-foreground/60">Siempre actualizado con las fechas oficiales del Tec</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Recordatorios anticipados</h3>
                  <p className="text-sm text-foreground/60">Te avisamos con tiempo para que estés preparado</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="relative order-1 lg:order-2"
          >
            <Card className="p-6 sm:p-8 shadow-2xl border-2 border-border/50 hover:border-primary/30 transition-all duration-300 bg-card">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border/50">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Octubre 2025</h3>
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-${event.color}/10 rounded-xl border border-${event.color}/20 hover:shadow-md transition-all duration-300 cursor-pointer`}
                    >
                      <div className="flex flex-col items-center justify-center bg-card rounded-lg p-2 min-w-[60px] shadow-sm">
                        <span className="text-xs font-medium text-foreground/60 uppercase">{event.date.split(' ')[1]}</span>
                        <span className="text-xl font-bold text-foreground">{event.date.split(' ')[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base truncate">{event.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 text-foreground/50" />
                          <span className="text-xs text-foreground/60">{event.time}</span>
                        </div>
                      </div>
                      <div className={`w-3 h-3 bg-${event.color} rounded-full flex-shrink-0 shadow-lg`}></div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-2 pt-4 border-t border-border/50"
                >
                  <MapPin className="w-4 h-4 text-accent-foreground" />
                  <span className="text-sm text-foreground/60">Tec de Veracruz - Campus Veracruz Norte</span>
                </motion.div>
              </div>
            </Card>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


