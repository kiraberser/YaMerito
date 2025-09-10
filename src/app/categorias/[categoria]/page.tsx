import { institutionalEvents } from "@/lib/data/calendarData";
import { personalEvents } from "@/lib/data/personalData";
import { CalendarView } from "@/components/features/CalendarView";
import type { Category } from "@/lib/types";

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const cat = categoria as Category;
  const events = [...institutionalEvents, ...personalEvents].filter((e) => e.category === cat);
  return (
    <div className="grid gap-6 min-h-screen">
      <h1 className="text-2xl font-semibold capitalize">{cat}</h1>
      <CalendarView events={events} />
    </div>
  );
}


