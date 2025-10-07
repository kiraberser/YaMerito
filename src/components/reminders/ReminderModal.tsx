"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Calendar, Tag, Plus, Save } from "lucide-react";
import type { Reminder } from "@/components/features/ReminderForm";
import type { ReminderType } from "@/lib/types";

interface ReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (reminder: Reminder) => void;
  editingReminder?: Reminder | null;
}

export default function ReminderModal({ isOpen, onClose, onSave, editingReminder }: ReminderModalProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState<ReminderType>("personal");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (editingReminder) {
      setTitle(editingReminder.title);
      setDate(editingReminder.date);
      setType(editingReminder.type);
    } else {
      setTitle("");
      setDate("");
      setType("personal");
      setTime("");
    }
  }, [editingReminder, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !date) return;

    const reminder: Reminder = {
      id: editingReminder?.id || crypto.randomUUID(),
      title,
      date,
      type,
    };

    onSave(reminder);
    handleClose();
  };

  const handleClose = () => {
    setTitle("");
    setDate("");
    setType("personal");
    setTime("");
    onClose();
  };

  const isEditing = !!editingReminder;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <span>{isEditing ? "Editar recordatorio" : "Nuevo recordatorio"}</span>
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Modifica los detalles de tu recordatorio"
              : "Crea un nuevo recordatorio para no olvidar lo importante"
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Título */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Título del recordatorio
            </label>
            <Input
              id="title"
              placeholder="Ej: Entregar proyecto final"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="text-base"
            />
          </div>

          {/* Tipo */}
          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Tipo
            </label>
            <select
              id="type"
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              value={type}
              onChange={(e) => setType(e.target.value as ReminderType)}
            >
              <option value="personal">Personal</option>
              <option value="academico">Académico</option>
            </select>
          </div>

          {/* Fecha y Hora */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Fecha
              </label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Hora (opcional)
              </label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="text-sm"
              />
            </div>
          </div>

          {/* Preview */}
          <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
            <div className="text-sm text-foreground/70">
              <span className="font-medium">Vista previa:</span>
              <div className="mt-1">
                {title || "Tu recordatorio aparecerá aquí"}
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Guardar cambios
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Crear recordatorio
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

