"use client";

import { useMemo, useState } from "react";
import { ReminderForm, type Reminder } from "@/components/features/ReminderForm";
import { Button } from "@/components/ui/button";
import { NotificationBanner } from "@/components/features/NotificationBanner";

export default function RecordatoriosPage() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [banner, setBanner] = useState<string>("");

  function addReminder(r: Reminder) {
    setReminders((prev) => [...prev, r]);
    setBanner("Recordatorio creado ✅");
    setTimeout(() => setBanner(""), 2500);
  }

  function removeReminder(id: string) {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  }

  const todayMessage = useMemo(() => {
    // Simulated smart notification
    return "Hoy hay evaluación docente ☑ y además lloverá ☔, lleva paraguas";
  }, []);

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Recordatorios</h1>
      <NotificationBanner message={banner || todayMessage} />
      <div className="flex justify-end">
        <ReminderForm onAddAction={addReminder} />
      </div>
      <ul className="grid gap-2">
        {reminders.map((r) => (
          <li key={r.id} className="flex items-center justify-between rounded-md border p-3 text-sm">
            <span>
              <span className="font-medium">{r.title}</span> · {new Date(r.date).toLocaleDateString()} · {r.type}
            </span>
            <Button variant="ghost" onClick={() => removeReminder(r.id)}>Eliminar</Button>
          </li>
        ))}
        {reminders.length === 0 && (
          <li className="text-sm text-muted-foreground">No hay recordatorios aún.</li>
        )}
      </ul>
    </div>
  );
}


