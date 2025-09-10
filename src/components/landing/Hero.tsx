"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" px-4 py-4 bg-background">
      <div className="container mx-auto max-w-6xl h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Tu asistente de recuerdos y recordatorios inteligentes
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-pretty">
              Organiza tu vida académica y personal sin que se te pase nada
            </p>

            <Button asChild className="bg-[#EB455F] hover:bg-[#EB455F]/90 text-white">
              <Link href="/auth/login">Empieza Ahora</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/yameritolanding.png"
                alt="Estudiantes del Tec organizando su vida académica"
                width={600}
                height={300}
                className="w-full h-160"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="text-sm font-medium">3 recordatorios</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


