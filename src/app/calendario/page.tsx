import { institutionalEvents } from "@/lib/data/calendarData";
import { personalEvents } from "@/lib/data/personalData";
import { CalendarView } from "@/components/features/CalendarView";

export const dynamic = "force-static";

export default async function CalendarioPage() {
  const events = [...personalEvents, ...institutionalEvents];
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Calendario</h1>
      <CalendarView events={events} />
    </div>
  );
}


