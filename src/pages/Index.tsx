import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Map, Radio, Waves, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const quickModes = [
  {
    title: "Speed Run",
    description: "Spin up a feedback quest in under 90 seconds with pre-built templates.",
    icon: Zap,
    accent: "from-primary/60 to-emerald-400/50",
    action: "Start sprint",
  },
  {
    title: "Story Mode",
    description: "Guide cohorts through narrative-based reflections with branching paths.",
    icon: Map,
    accent: "from-violet-500/60 to-indigo-400/50",
    action: "Curate storyline",
  },
  {
    title: "Broadcast",
    description: "Drop pulse polls during townhalls and watch sentiment ripple live.",
    icon: Radio,
    accent: "from-amber-400/60 to-pink-400/40",
    action: "Open control room",
  },
];

const signalStreams = [
  { label: "Live polls running", value: "34", detail: "Campus arenas" },
  { label: "Avg. response time", value: "02m 11s", detail: "last 24h" },
  { label: "XP distributed today", value: "184k", detail: "across roles" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="glowing-orb absolute -left-20 top-10" />
      <div className="glowing-orb absolute bottom-0 right-0 delay-[1200ms]" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-6 text-center">
          <Badge className="mx-auto border border-white/30 bg-white/10 text-white/80">Insider access · Multi-role</Badge>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Welcome to the FeedbackFlow <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Control Deck</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/70">
            Choose a mission, unlock XP, and run cinematic feedback experiences that wow admissions panels, investors, and hackathon judges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold shadow-lg shadow-primary/30" onClick={() => navigate("/landing")}>
              Explore arena
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/40 bg-white/5 px-8 text-base text-white/90 backdrop-blur" onClick={() => navigate("/login")}>
              Jump into dashboard
            </Button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {quickModes.map((mode) => (
            <Card key={mode.title} className="group border-white/15 bg-white/5 p-6 text-white shadow-xl shadow-black/40 transition hover:-translate-y-2 hover:border-primary/60">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-primary">
                  <mode.icon className="h-6 w-6" />
                </div>
                <Badge className="border-white/30 bg-white/10 text-white/80">{mode.action}</Badge>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{mode.title}</h3>
              <p className="mt-2 text-sm text-white/70">{mode.description}</p>
              <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${mode.accent}`} />
            </Card>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <Card className="border-white/10 bg-white/5 p-8 text-white shadow-2xl shadow-primary/30">
            <div className="flex items-center gap-3">
              <Waves className="h-6 w-6 text-accent" />
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Signal streams</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {signalStreams.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/60">{signal.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{signal.value}</p>
                  <p className="text-sm text-white/60">{signal.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/70">
              Every signal updates in real-time, letting you orchestrate campus vibes like an esports arena host.
            </p>
          </Card>

          <Card className="border-white/10 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 p-8 text-white shadow-2xl shadow-primary/20">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Next stop</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight">
              Pick your role, stack streaks, and unlock badges faster than any campus CRM.
            </h3>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <p>• Students: daily quests, flash polls, XP boosts</p>
              <p>• Faculty: AI synthesis, sentiment heatmaps</p>
              <p>• Societies: event control rooms, hype meters</p>
      </div>
            <Button size="lg" className="mt-8 rounded-full bg-black/30 px-8 text-base font-semibold text-white hover:bg-black/50" onClick={() => navigate("/login")}>
              Enter mission select
            </Button>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
