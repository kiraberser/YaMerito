"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-foreground/70 leading-relaxed">
              <p>
                Todo comenzó en una tarde de finales de 2024, cuando dos estudiantes del Tec de Veracruz
                se dieron cuenta de que constantemente olvidaban fechas importantes: inscripciones,
                evaluaciones docentes, y hasta reuniones con amigos.
              </p>
              <p>
                Probamos múltiples aplicaciones de recordatorios, pero ninguna entendía realmente las
                necesidades específicas de un estudiante universitario mexicano. No solo queríamos recordar
                fechas, queríamos un asistente que entendiera nuestro contexto.
              </p>
              <p>
                Así nació <strong className="text-foreground">YaMerito</strong> - una solución pensada
                específicamente para la comunidad estudiantil del Tec, que combina recordatorios inteligentes
                con el calendario institucional y hasta información del clima local.
              </p>
              <p className="text-primary font-medium">
                "Ya merito" - esa frase tan mexicana que usamos cuando algo está por suceder,
                se convirtió en la inspiración perfecta para nuestra app.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              <Image
                src="/team/team.png"
                alt="Equipo colaborando en el Tec de Veracruz"
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/20" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

