"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket } from "lucide-react";

export default function AboutMissionVision() {
  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Nuestra Misión</h3>
                <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                  Simplificar la vida académica de los estudiantes del Tec de Veracruz mediante
                  tecnología inteligente y accesible, ayudándoles a nunca olvidar lo importante
                  mientras se enfocan en lo que realmente importa: aprender y crecer.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 shadow-xl border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 bg-gradient-to-br from-secondary/5 to-transparent">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Nuestra Visión</h3>
                <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                  Convertirnos en la herramienta esencial para todos los estudiantes del sistema Tec,
                  expandiendo nuestro alcance a otros campus mientras mantenemos nuestro enfoque en
                  las necesidades únicas de cada comunidad estudiantil.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

