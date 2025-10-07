"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Bell, Cloud, Sparkles, Zap, Brain } from "lucide-react";

export default function SmartReminders() {
  const reminders = [
    {
      icon: Bell,
      title: "Recordatorio Contextual",
      message: "Hoy hay evaluación docente ☑ y además lloverá ☔, lleva paraguas",
      time: "Hace 5 minutos",
      color: "from-primary to-primary/90",
    },
    {
      icon: Zap,
      title: "Recordatorio Urgente",
      message: "⚠️ La inscripción a Cálculo Diferencial cierra en 2 horas",
      time: "Hace 15 minutos",
      color: "from-secondary to-secondary/90",
    },
  ];

  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6"
          >
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">IA integrada</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Recordatorios Inteligentes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto px-4 leading-relaxed">
            Recibe notificaciones contextuales que te ayudan a estar siempre preparado. 
            Nuestra IA analiza el clima, tu ubicación y tus actividades para brindarte recordatorios personalizados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reminders.map((reminder, index) => (
            <motion.div
              key={reminder.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full"
            >
              <Card className={`p-6 sm:p-8 shadow-2xl border-0 bg-gradient-to-br ${reminder.color} text-primary-foreground relative overflow-hidden group`}>
                {/* Sparkle effect */}
                <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="w-32 h-32" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                      <reminder.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{reminder.title}</h3>
                      <div className="flex items-center gap-2 text-xs opacity-80">
                        <Cloud className="w-3 h-3" />
                        <span>{reminder.time}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed opacity-95 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    {reminder.message}
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg font-medium transition-all duration-300 text-sm">
                      Ver detalles
                    </button>
                    <button className="px-4 py-2 bg-white/90 hover:bg-white text-primary rounded-lg font-medium transition-all duration-300 text-sm">
                      Marcar como hecho
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Brain, title: "IA Contextual", desc: "Análisis inteligente de tu día" },
            { icon: Cloud, title: "Clima integrado", desc: "Alertas según el tiempo" },
            { icon: Sparkles, title: "Personalización", desc: "Se adapta a tu rutina" },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-foreground/60">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


