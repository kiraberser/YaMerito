"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Tag } from "lucide-react";
import type { CalendarEvent } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EventsListProps {
  selectedDate: Date | null;
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
  activeFilters: string[];
}

export default function EventsList({ selectedDate, events, onEventClick, activeFilters }: EventsListProps) {
  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    
    const dateString = selectedDate.toISOString().split('T')[0];
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
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      escuela: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
      amigos: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/30" },
      familia: { bg: "bg-accent/20", text: "text-accent-foreground", border: "border-accent/40" },
      deporte: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
      institucional: { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-purple-500/30" },
    };
    return colors[category] || { bg: "bg-gray-100", text: "text-gray-600", border: "border-gray-300" };
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-MX', { 
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  const dayEvents = getEventsForSelectedDate();

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          {selectedDate ? formatDate(selectedDate) : "Selecciona una fecha"}
        </h3>
      </div>

      {/* Events list */}
      {selectedDate ? (
        dayEvents.length > 0 ? (
          <div className="space-y-3">
            {dayEvents.map((event, index) => {
              const colors = getCategoryColor(event.category);
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card
                    className={cn(
                      "cursor-pointer transition-all duration-200 hover:shadow-md border-l-4",
                      colors.border,
                      "hover:scale-[1.02]"
                    )}
                    onClick={() => onEventClick(event)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", colors.bg)}>
                          <Tag className={cn("w-5 h-5", colors.text)} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">
                            {event.title}
                          </h4>
                          
                          {event.description && (
                            <p className="text-xs sm:text-sm text-foreground/60 mt-1 line-clamp-2">
                              {event.description}
                            </p>
                          )}
                          
                          <div className="flex items-center gap-4 mt-2 text-xs text-foreground/50">
                            <span className="capitalize">{event.category}</span>
                            {event.endDate && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Hasta {new Date(event.endDate).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 mx-auto text-muted-foreground/50 mb-2" />
              <p className="text-sm text-muted-foreground">
                No hay eventos para este día
              </p>
            </CardContent>
          </Card>
        )
      ) : (
        <Card className="border-dashed">
          <CardContent className="p-8 text-center">
            <Calendar className="w-12 h-12 mx-auto text-muted-foreground/50 mb-2" />
            <p className="text-sm text-muted-foreground">
              Selecciona un día en el calendario para ver sus eventos
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

