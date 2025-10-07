"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, Sparkles, Bell, TrendingUp, Target } from "lucide-react";
import type { Reminder } from "@/components/features/ReminderForm";
import { ReminderCard, ReminderModal, ReminderFilters, EmptyState } from "@/components/reminders";
import type { FilterType } from "@/components/reminders";

export default function RecordatoriosPage() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      title: "Entregar proyecto de matemáticas",
      date: "2025-10-08",
      type: "academico"
    },
    {
      id: "2",
      title: "Cumpleaños de mamá",
      date: "2025-10-15",
      type: "personal"
    },
    {
      id: "3",
      title: "Examen de programación",
      date: "2025-10-12",
      type: "academico"
    }
  ]);
  const [completedReminders, setCompletedReminders] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const handleSaveReminder = (reminder: Reminder) => {
    if (editingReminder) {
      setReminders(reminders.map(r => r.id === reminder.id ? reminder : r));
    } else {
      setReminders([reminder, ...reminders]);
    }
    setEditingReminder(null);
  };

  const handleDeleteReminder = (id: string) => {
    setReminders(reminders.filter(r => r.id !== id));
    completedReminders.delete(id);
    setCompletedReminders(new Set(completedReminders));
  };

  const handleToggleComplete = (id: string) => {
    const newCompleted = new Set(completedReminders);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedReminders(newCompleted);
  };

  const handleEditReminder = (reminder: Reminder) => {
    setEditingReminder(reminder);
    setIsModalOpen(true);
  };

  const handleCreateNew = () => {
    setEditingReminder(null);
    setIsModalOpen(true);
  };

  const filteredReminders = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    let filtered = reminders;

    if (activeFilter === "completed") {
      filtered = reminders.filter(r => completedReminders.has(r.id));
    } else if (activeFilter === "upcoming") {
      filtered = reminders.filter(r => {
        if (completedReminders.has(r.id)) return false;
        const reminderDate = new Date(r.date);
        reminderDate.setHours(0, 0, 0, 0);
        return reminderDate >= today && reminderDate <= nextWeek;
      });
    }

    return filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
  }, [reminders, completedReminders, activeFilter]);

  const counts = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    return {
      all: reminders.length,
      upcoming: reminders.filter(r => {
        if (completedReminders.has(r.id)) return false;
        const reminderDate = new Date(r.date);
        reminderDate.setHours(0, 0, 0, 0);
        return reminderDate >= today && reminderDate <= nextWeek;
      }).length,
      completed: completedReminders.size,
    };
  }, [reminders, completedReminders]);

  const stats = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return {
      total: reminders.length,
      pending: reminders.length - completedReminders.size,
      completed: completedReminders.size,
      urgent: reminders.filter(r => {
        if (completedReminders.has(r.id)) return false;
        const reminderDate = new Date(r.date);
        reminderDate.setHours(0, 0, 0, 0);
        const diffDays = Math.ceil((reminderDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return diffDays <= 2 && diffDays >= 0;
      }).length,
    };
  }, [reminders, completedReminders]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-8 sm:py-12 lg:py-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

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
              <span className="text-sm font-medium">Recordatorios inteligentes</span>
            </motion.div>

            {/* Title and CTA */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-2">
                  Mis Recordatorios
                </h1>
                <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
                  Mantén todo bajo control y nunca olvides lo importante
                </p>
              </div>

              <Button
                onClick={handleCreateNew}
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg w-full sm:w-auto"
              >
                <Plus className="w-5 h-5 mr-2" />
                Nuevo recordatorio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
              {[
                { label: "Total", value: stats.total, icon: Bell, color: "bg-primary" },
                { label: "Pendientes", value: stats.pending, icon: Target, color: "bg-secondary" },
                { label: "Completados", value: stats.completed, icon: TrendingUp, color: "bg-green-500" },
                { label: "Urgentes", value: stats.urgent, icon: Bell, color: "bg-orange-500" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-card rounded-xl border border-border/50 p-4 text-center hover:shadow-md transition-shadow"
                  >
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-foreground/60 mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-8 sm:py-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Filters */}
            <ReminderFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              counts={counts}
            />

            {/* Reminders List */}
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {filteredReminders.length > 0 ? (
                  filteredReminders.map((reminder) => (
                    <ReminderCard
                      key={reminder.id}
                      reminder={reminder}
                      onToggleComplete={handleToggleComplete}
                      onEdit={handleEditReminder}
                      onDelete={handleDeleteReminder}
                      isCompleted={completedReminders.has(reminder.id)}
                    />
                  ))
                ) : (
                  <EmptyState filter={activeFilter} onCreateNew={handleCreateNew} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <ReminderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingReminder(null);
        }}
        onSave={handleSaveReminder}
        editingReminder={editingReminder}
      />
    </div>
  );
}
