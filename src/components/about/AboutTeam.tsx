"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Mail, Linkedin, Github } from "lucide-react";

export default function AboutTeam() {
  const founders = [
    {
      name: "Edwin Vega",
      role: "Co-Fundador & Desarrollador Principal",
      image: "/team/ed.png",
      bio: "Estudiante de Administración apasionado por desarrollo software para crear soluciones tecnológicas que impacten positivamente en la vida académica de los estudiantes.",
      linkedin: "#",
      github: "#",
      email: "edwin@yamerito.com"
    },
    {
      name: "Kimberly Mendiola",
      role: "Co-Fundadora & Diseñadora ",
      image: "/team/kim.png",
      bio: "Administradora apasionada por crear soluciones tecnológicas que impacten positivamente en la vida académica de los estudiantes.",
      linkedin: "#",
      github: "#",
      email: "kimberly@yamerito.com"
    }
  ];

  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conoce al Equipo
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Dos estudiantes apasionados por hacer la diferencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden shadow-2xl border-2 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="relative h-110 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    style={{ objectPosition: '50% 15%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

                  {/* Social icons overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={founder.linkedin}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={founder.github}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${founder.email}`}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{founder.name}</h3>
                  <p className="text-sm font-medium text-primary">{founder.role}</p>
                  <p className="text-base text-foreground/70 leading-relaxed">{founder.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

