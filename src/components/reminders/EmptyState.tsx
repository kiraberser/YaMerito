"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bell, Plus, CheckCircle2, Calendar } from "lucide-react";
import type { FilterType } from "./ReminderFilters";

interface EmptyStateProps {
  filter: FilterType;
  onCreateNew: () => void;
}

export default function EmptyState({ filter, onCreateNew }: EmptyStateProps) {
  const getContent = () => {
    switch (filter) {
      case "completed":
        return {
          icon: CheckCircle2,
          title: "No hay recordatorios completados",
          description: "Los recordatorios que marques como completados aparecerán aquí",
          showButton: false,
        };
      case "upcoming":
        return {
          icon: Calendar,
          title: "No hay recordatorios próximos",
          description: "Crea recordatorios para los próximos 7 días",
          showButton: true,
        };
      default:
        return {
          icon: Bell,
          title: "No hay recordatorios",
          description: "Crea tu primer recordatorio para no olvidar nada importante",
          showButton: true,
        };
    }
  };

  const content = getContent();
  const Icon = content.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20"
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl" />
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-center">
        {content.title}
      </h3>
      <p className="text-sm sm:text-base text-foreground/60 mb-6 text-center max-w-md px-4">
        {content.description}
      </p>

      {content.showButton && (
        <Button
          onClick={onCreateNew}
          size="lg"
          className="bg-primary hover:bg-primary/90 shadow-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Crear recordatorio
        </Button>
      )}
    </motion.div>
  );
}

