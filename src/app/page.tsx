import { Hero, Features, InstitutionalCalendar, SmartReminders, Pricing, Cta } from "@/components/landing";
export default function LandingPage() {
    return (
        <div className="min-h-screen ">
            <Hero />
            <Features />
            <InstitutionalCalendar />
            <SmartReminders />
            <Pricing />
            <Cta />
        </div>
    );
}


