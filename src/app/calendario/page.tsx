"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { institutionalEvents } from "@/lib/data/calendarData";
import { personalEvents } from "@/lib/data/personalData";
import { CalendarHeader, CalendarGrid, EventsList, EventModal, CalendarFilters } from "@/components/calendar";
import type { CalendarEvent } from "@/lib/types";
import { Sparkles } from "lucide-react";

export default function CalendarioPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([...institutionalEvents, ...personalEvents]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleUpdateEvent = (updatedEvent: CalendarEvent) => {
    setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(e => e.id !== eventId));
    setSelectedEvent(null);
  };

  const handleFilterToggle = (category: string) => {
    if (category === "") {
      setActiveFilters([]);
    } else {
      setActiveFilters(prev => {
        if (prev.includes(category)) {
          return prev.filter(c => c !== category);
        }
        return [...prev, category];
      });
    }
  };

  const filteredEvents = activeFilters.length > 0
    ? events.filter(event => activeFilters.includes(event.category))
    : events;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-8 sm:py-12 lg:py-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

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
              <span className="text-sm font-medium">Calendario inteligente</span>
            </motion.div>

            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-2">
                Mi Calendario
              </h1>
              <p className="text-base sm:text-lg text-foreground/70 max-w-3xl">
                Visualiza todos tus eventos académicos y personales en un solo lugar
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Calendar Section */}
      <section className="px-4 py-8 sm:py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Calendar and Header - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header with navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CalendarHeader
                  currentDate={currentDate}
                  onPreviousMonth={handlePreviousMonth}
                  onNextMonth={handleNextMonth}
                  onToday={handleToday}
                />
              </motion.div>

              {/* Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CalendarFilters
                  activeFilters={activeFilters}
                  onFilterToggle={handleFilterToggle}
                />
              </motion.div>

              {/* Calendar Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card rounded-2xl border-2 border-border/50 p-4 sm:p-6 shadow-lg"
              >
                <CalendarGrid
                  currentDate={currentDate}
                  events={filteredEvents}
                  selectedDate={selectedDate}
                  onDateClick={handleDateClick}
                  activeFilters={activeFilters}
                />
              </motion.div>
            </div>

            {/* Events List - Takes 1 column on large screens */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-4 bg-card rounded-2xl border-2 border-border/50 p-4 sm:p-6 shadow-lg">
                <EventsList
                  selectedDate={selectedDate}
                  events={filteredEvents}
                  onEventClick={handleEventClick}
                  activeFilters={activeFilters}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-8 sm:py-12 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { label: "Total de eventos", value: events.length, color: "bg-primary" },
              { label: "Eventos académicos", value: events.filter(e => e.category === "escuela").length, color: "bg-secondary" },
              { label: "Eventos personales", value: events.filter(e => e.type === "personal").length, color: "bg-accent" },
              { label: "Eventos institucionales", value: institutionalEvents.length, color: "bg-purple-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border/50 p-4 text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-2 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        event={selectedEvent}
        onUpdate={handleUpdateEvent}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
}
