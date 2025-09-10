import { CalendarEvent } from "@/lib/types";

export const personalEvents: CalendarEvent[] = [
  { id: "fam-1", title: "Cumpleaños de mamá", date: "2025-02-08", category: "familia", type: "personal" },
  { id: "amg-1", title: "Reunión con amigos", date: "2025-02-21", category: "amigos", type: "personal" },
  { id: "esc-1", title: "Examen de Cálculo", date: "2025-03-10", category: "escuela", type: "academico" },
  { id: "dep-1", title: "Partido interfacultades", date: "2025-03-25", category: "deporte", type: "personal" },
];

export type { CalendarEvent };


