"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReminderType } from "@/lib/types";

export interface Reminder {
  id: string;
  title: string;
  date: string; // ISO
  type: ReminderType;
}

export function ReminderForm({ onAddAction }: { onAddAction: (r: Reminder) => void }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState<ReminderType>("personal");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !date) return;
    onAddAction({ id: crypto.randomUUID(), title, date, type });
    setOpen(false);
    setTitle("");
    setDate("");
    setType("personal");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Nuevo recordatorio</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear recordatorio</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <label className="grid gap-1 text-sm">
            <span>Título</span>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ej. Entregar tarea" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Fecha</span>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Tipo</span>
            <select
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              value={type}
              onChange={(e) => setType(e.target.value as ReminderType)}
            >
              <option value="personal">Personal</option>
              <option value="academico">Académico</option>
            </select>
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button type="submit">Guardar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}


