import {
  AboutHero,
  AboutStory,
  AboutStats,
  AboutMissionVision,
  AboutValues,
  AboutTeam,
  AboutCta
} from "@/components/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutMissionVision />
      <AboutValues />
      <AboutTeam />
      <AboutCta />
    </div>
  );
}

