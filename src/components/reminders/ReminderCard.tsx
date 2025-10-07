"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle2, Circle, Edit2, Trash2, Bell } from "lucide-react";
import type { Reminder } from "@/components/features/ReminderForm";
import { cn } from "@/lib/utils";

interface ReminderCardProps {
  reminder: Reminder;
  onToggleComplete: (id: string) => void;
  onEdit: (reminder: Reminder) => void;
  onDelete: (id: string) => void;
  isCompleted?: boolean;
}

export default function ReminderCard({
  reminder,
  onToggleComplete,
  onEdit,
  onDelete,
  isCompleted = false,
}: ReminderCardProps) {
  const getTypeColor = (type: string) => {
    return type === "academico" 
      ? { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" }
      : { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/30" };
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return "Hoy";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Mañana";
    }
    
    return date.toLocaleDateString('es-MX', { 
      day: 'numeric', 
      month: 'short',
      year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
    });
  };

  const getDaysUntil = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  const colors = getTypeColor(reminder.type);
  const daysUntil = getDaysUntil(reminder.date);
  const isUrgent = daysUntil <= 2 && daysUntil >= 0 && !isCompleted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <Card
        className={cn(
          "group hover:shadow-lg transition-all duration-300 border-l-4",
          colors.border,
          isCompleted && "opacity-60 bg-muted/30",
          isUrgent && "ring-2 ring-secondary/20"
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            {/* Checkbox */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onToggleComplete(reminder.id)}
              className={cn(
                "mt-1 flex-shrink-0",
                isCompleted ? colors.text : "text-muted-foreground hover:text-primary"
              )}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </motion.button>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className={cn(
                  "font-semibold text-base sm:text-lg text-foreground",
                  isCompleted && "line-through text-muted-foreground"
                )}>
                  {reminder.title}
                </h3>
                
                {isUrgent && (
                  <span className="flex-shrink-0 px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full flex items-center gap-1">
                    <Bell className="w-3 h-3" />
                    Urgente
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-foreground/60 mb-3">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(reminder.date)}</span>
                </div>
                
                {daysUntil >= 0 && !isCompleted && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>
                      {daysUntil === 0 ? "Hoy" : daysUntil === 1 ? "1 día" : `${daysUntil} días`}
                    </span>
                  </div>
                )}

                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  colors.bg,
                  colors.text
                )}>
                  {reminder.type === "academico" ? "Académico" : "Personal"}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(reminder)}
                  className="h-8 px-3 text-xs"
                >
                  <Edit2 className="w-3 h-3 mr-1" />
                  Editar
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(reminder.id)}
                  className="h-8 px-3 text-xs text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

