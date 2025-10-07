"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calendar, CheckCircle2, Clock } from "lucide-react";

export type FilterType = "all" | "upcoming" | "completed";

interface ReminderFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    upcoming: number;
    completed: number;
  };
}

export default function ReminderFilters({ activeFilter, onFilterChange, counts }: ReminderFiltersProps) {
  const filters = [
    { id: "all" as FilterType, label: "Todos", icon: Calendar, count: counts.all },
    { id: "upcoming" as FilterType, label: "Próximos", icon: Clock, count: counts.upcoming },
    { id: "completed" as FilterType, label: "Completados", icon: CheckCircle2, count: counts.completed },
  ];

  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          const Icon = filter.icon;
          
          return (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onFilterChange(filter.id)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 whitespace-nowrap",
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-card text-foreground/70 hover:bg-muted border border-border/50"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{filter.label}</span>
              <span className={cn(
                "px-2 py-0.5 rounded-full text-xs font-semibold",
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-primary/10 text-primary"
              )}>
                {filter.count}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

