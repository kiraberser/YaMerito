"use client";

import { motion } from "framer-motion";
import type { CalendarEvent } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CalendarGridProps {
  currentDate: Date;
  events: CalendarEvent[];
  selectedDate: Date | null;
  onDateClick: (date: Date) => void;
  activeFilters: string[];
}

export default function CalendarGrid({
  currentDate,
  events,
  selectedDate,
  onDateClick,
  activeFilters,
}: CalendarGridProps) {
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days: (Date | null)[] = [];
    
    // Días vacíos al inicio
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Días del mes
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getEventsForDate = (date: Date | null) => {
    if (!date) return [];
    
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => {
      if (activeFilters.length > 0 && !activeFilters.includes(event.category)) {
        return false;
      }
      
      const eventDate = event.date;
      const eventEndDate = event.endDate;
      
      if (eventEndDate) {
        return dateString >= eventDate && dateString <= eventEndDate;
      }
      
      return eventDate === dateString;
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      escuela: "bg-primary",
      amigos: "bg-secondary",
      familia: "bg-accent",
      deporte: "bg-primary",
      institucional: "bg-purple-500",
    };
    return colors[category] || "bg-gray-500";
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="space-y-4">
      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-xs sm:text-sm font-semibold text-foreground/60 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Grid de días */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {days.map((date, index) => {
          const dayEvents = getEventsForDate(date);
          const hasEvents = dayEvents.length > 0;
          
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.01 }}
              onClick={() => date && onDateClick(date)}
              disabled={!date}
              className={cn(
                "relative aspect-square p-1 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-200",
                "flex flex-col items-center justify-start",
                date && "hover:bg-muted/50 cursor-pointer",
                !date && "cursor-default",
                isToday(date) && "ring-2 ring-primary bg-primary/5",
                isSelected(date) && "bg-primary/10 ring-2 ring-primary",
                !date && "opacity-0"
              )}
            >
              {date && (
                <>
                  <span className={cn(
                    "text-xs sm:text-sm font-medium mb-1",
                    isToday(date) ? "text-primary font-bold" : "text-foreground",
                    isSelected(date) && "text-primary font-bold"
                  )}>
                    {date.getDate()}
                  </span>
                  
                  {hasEvents && (
                    <div className="flex flex-wrap gap-0.5 sm:gap-1 justify-center max-w-full">
                      {dayEvents.slice(0, 3).map((event, idx) => (
                        <div
                          key={idx}
                          className={cn(
                            "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full",
                            getCategoryColor(event.category)
                          )}
                          title={event.title}
                        />
                      ))}
                      {dayEvents.length > 3 && (
                        <span className="text-[8px] sm:text-[10px] text-foreground/50 font-medium">
                          +{dayEvents.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

