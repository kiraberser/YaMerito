"use client";

import { motion } from "framer-motion";
import CategoryCard from "@/components/categories/CategoryCard";
import { GraduationCap, Users, Home, Trophy, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoriasPage() {
  const categories = [
    {
      category: "escuela" as const,
      title: "Escuela",
      description: "Tareas, exámenes, inscripciones y proyectos académicos",
      icon: GraduationCap,
      color: "bg-primary",
      gradient: "bg-gradient-to-br from-primary/5 to-transparent",
      tasksCount: 8,
      completedCount: 3,
    },
    {
      category: "amigos" as const,
      title: "Amigos",
      description: "Fiestas, reuniones y eventos sociales",
      icon: Users,
      color: "bg-secondary",
      gradient: "bg-gradient-to-br from-secondary/5 to-transparent",
      tasksCount: 5,
      completedCount: 2,
    },
    {
      category: "familia" as const,
      title: "Familia",
      description: "Cumpleaños, aniversarios y compromisos familiares",
      icon: Home,
      color: "bg-accent",
      gradient: "bg-gradient-to-br from-accent/10 to-transparent",
      tasksCount: 3,
      completedCount: 1,
    },
    {
      category: "deporte" as const,
      title: "Deporte",
      description: "Entrenamientos, partidos y actividades físicas",
      icon: Trophy,
      color: "bg-primary",
      gradient: "bg-gradient-to-br from-primary/5 to-transparent",
      tasksCount: 4,
      completedCount: 2,
    },
  ];

  const totalTasks = categories.reduce((sum, cat) => sum + cat.tasksCount, 0);
  const totalCompleted = categories.reduce((sum, cat) => sum + cat.completedCount, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Organiza tu vida</span>
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Mis Categorías
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl">
                Organiza tus tareas por categorías y mantén el control de todo lo importante en tu vida
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{categories.length}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Categorías</div>
                  <div className="text-xs text-foreground/60">activas</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">{totalTasks}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tareas</div>
                  <div className="text-xs text-foreground/60">totales</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-500">{totalCompleted}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Completadas</div>
                  <div className="text-xs text-foreground/60">este mes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Section header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Todas las Categorías
                </h2>
                <p className="text-sm sm:text-base text-foreground/60">
                  Haz clic en una categoría para agregar nuevas tareas
                </p>
              </div>

              <Button className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4" />
                Nueva categoría
              </Button>
            </div>

            {/* Categories grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <CategoryCard {...category} />
                </motion.div>
              ))}
            </div>

            {/* Mobile button */}
            <Button className="flex sm:hidden w-full items-center gap-2 bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4" />
              Nueva categoría
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-4 py-12 sm:py-16 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/5 rounded-2xl p-6 sm:p-8 border-2 border-border/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Consejo de productividad
                </h3>
                <p className="text-sm text-foreground/70">
                  Organiza tus tareas por categorías para mantener un mejor control. 
                  Intenta completar al menos 3 tareas de cada categoría por semana para mantener el equilibrio.
                </p>
              </div>
      </div>
          </motion.div>
      </div>
      </section>
    </div>
  );
}
