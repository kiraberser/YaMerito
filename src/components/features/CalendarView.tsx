"use client";

import { useMemo } from "react";
import { CalendarEvent } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

function formatDateRange(date: string, endDate?: string): string {
  const start = new Date(date);
  if (!endDate) return start.toLocaleDateString();
  const end = new Date(endDate);
  return `${start.toLocaleDateString()} – ${end.toLocaleDateString()}`;
}

export function CalendarView({ events }: { events: CalendarEvent[] }) {
  const sorted = useMemo(
    () =>
      [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [events]
  );

  return (
    <div className="grid gap-4">
      {sorted.map((ev) => (
        <motion.div key={ev.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{ev.title}</span>
                <span className="text-xs font-normal text-muted-foreground capitalize">{ev.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div>{formatDateRange(ev.date, ev.endDate)}</div>
              {ev.description && <div className="mt-1">{ev.description}</div>}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}


