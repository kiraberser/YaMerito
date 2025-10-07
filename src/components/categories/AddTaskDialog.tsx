"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Plus, Tag } from "lucide-react";
import type { Category } from "@/lib/types";

interface AddTaskDialogProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category;
  categoryColor: string;
}

export default function AddTaskDialog({ isOpen, onClose, category, categoryColor }: AddTaskDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para guardar la tarea
    const taskData = {
      title,
      description,
      date,
      time,
      category,
    };
    
    console.log("Nueva tarea:", taskData);
    
    // Limpiar formulario
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <div className={`w-10 h-10 rounded-xl ${categoryColor} flex items-center justify-center`}>
              <Tag className="w-5 h-5 text-white" />
            </div>
            <span className="capitalize">Nueva tarea - {category}</span>
          </DialogTitle>
          <DialogDescription>
            Agrega una nueva tarea a tu categoría {category}. Completa los campos para crear tu recordatorio.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Título */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Título de la tarea
            </label>
            <Input
              id="title"
              placeholder="Ej: Llamar a mamá"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="text-base"
            />
          </div>

          {/* Descripción */}
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-foreground">
              Descripción (opcional)
            </label>
            <textarea
              id="description"
              placeholder="Agrega detalles sobre esta tarea..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full min-h-[80px] px-3 py-2 text-sm rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
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
                <Clock className="w-4 h-4" />
                Hora
              </label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="text-sm"
              />
            </div>
          </div>

          {/* Categoría (solo visual) */}
          <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className={`w-3 h-3 rounded-full ${categoryColor}`} />
              <span className="font-medium">Categoría:</span>
              <span className="capitalize">{category}</span>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className={`w-full sm:w-auto ${categoryColor} text-white hover:opacity-90`}
            >
              <Plus className="w-4 h-4 mr-2" />
              Crear tarea
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

