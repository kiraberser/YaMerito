export type Category = "familia" | "amigos" | "escuela" | "deporte" | "institucional";

export type ReminderType = "personal" | "academico";

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  date: string; // ISO date
  endDate?: string; // ISO date for ranges
  category: Category;
  type?: ReminderType | "institucional";
}


