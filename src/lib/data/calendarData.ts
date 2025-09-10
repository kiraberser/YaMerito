import { CalendarEvent } from "@/lib/types";

export const institutionalEvents: CalendarEvent[] = [
  {
    id: "inscripciones-ene",
    title: "Inscripciones Enero",
    description: "Proceso de inscripción al semestre Enero-Junio",
    date: "2025-01-10",
    endDate: "2025-01-14",
    category: "institucional",
    type: "institucional",
  },
  {
    id: "inicio-semestre",
    title: "Inicio de semestre",
    date: "2025-01-20",
    category: "institucional",
    type: "institucional",
  },
  {
    id: "evaluacion-docente",
    title: "Evaluación Docente",
    description: "Periodo para evaluación docente",
    date: "2025-04-28",
    endDate: "2025-05-16",
    category: "institucional",
    type: "institucional",
  },
  {
    id: "creditos-complementarios",
    title: "Créditos complementarios",
    description: "Registro y validación de créditos",
    date: "2025-03-01",
    endDate: "2025-05-31",
    category: "institucional",
    type: "institucional",
  },
  {
    id: "dia-festivo",
    title: "Día del Trabajo (Oficial)",
    date: "2025-05-01",
    category: "institucional",
    type: "institucional",
  },
  {
    id: "fin-semestre",
    title: "Fin de semestre",
    date: "2025-06-13",
    category: "institucional",
    type: "institucional",
  },
];

export type { CalendarEvent };


