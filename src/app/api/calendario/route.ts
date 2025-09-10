import { NextResponse } from "next/server";
import { institutionalEvents } from "@/lib/data/calendarData";

export async function GET() {
  return NextResponse.json({ events: institutionalEvents });
}


