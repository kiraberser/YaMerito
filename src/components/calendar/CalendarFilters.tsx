"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Home, Trophy, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalendarFiltersProps {
  activeFilters: string[];
  onFilterToggle: (category: string) => void;
}

export default function CalendarFilters({ activeFilters, onFilterToggle }: CalendarFiltersProps) {
  const filters = [
    { category: "escuela", label: "Escuela", icon: GraduationCap, color: "bg-primary", textColor: "text-primary" },
    { category: "amigos", label: "Amigos", icon: Users, color: "bg-secondary", textColor: "text-secondary" },
    { category: "familia", label: "Familia", icon: Home, color: "bg-accent", textColor: "text-accent-foreground" },
    { category: "deporte", label: "Deporte", icon: Trophy, color: "bg-primary", textColor: "text-primary" },
    { category: "institucional", label: "Institucional", icon: Building2, color: "bg-purple-500", textColor: "text-purple-600" },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground/70">Filtrar por categoría</h3>
      
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, index) => {
          const isActive = activeFilters.length === 0 || activeFilters.includes(filter.category);
          const Icon = filter.icon;
          
          return (
            <motion.button
              key={filter.category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterToggle(filter.category)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all duration-200",
                isActive
                  ? `${filter.color} text-white border-transparent shadow-md`
                  : "bg-background text-foreground/60 border-border hover:border-primary/30"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">{filter.label}</span>
            </motion.button>
          );
        })}
      </div>
      
      {activeFilters.length > 0 && (
        <button
          onClick={() => onFilterToggle("")}
          className="text-xs sm:text-sm text-primary hover:underline"
        >
          Limpiar filtros
        </button>
      )}
    </div>
  );
}

