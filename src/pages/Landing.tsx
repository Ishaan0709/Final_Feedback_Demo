import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  BarChart3,
  CloudDownload,
  Gamepad2,
  GraduationCap,
  LayoutDashboard,
  Lightbulb,
  Shield,
  Sparkles,
  EyeOff,
} from "lucide-react";

const heroHighlights = [
  "Whether it’s a classroom session, a college event, a workshop, or a project — students can share feedback in seconds.",
  "Our AI/ML engine instantly converts responses into sentiment scores, keyword trends, and micro-summaries so educators and organizers can act immediately.",
  "No spreadsheets. No manual reading. No waiting.",
];

const problemPoints = [
  "AI-powered summarization",
  "Real-time dashboards",
  "Anonymous student voices",
  "Smart visualizations that highlight what actually matters",
];

const featureDeck = [
  {
    title: "Student Dashboard",
    description: "Beautiful, simple, and interactive — students see how their input drives change.",
    icon: GraduationCap,
  },
  {
    title: "Admin Dashboard",
    description: "Spin up classes, events, and forms with AI summaries, trends, and sentiment analysis.",
    icon: LayoutDashboard,
  },
  {
    title: "Google Form Support",
    description: "Import existing responses in seconds and let our AI summarize them for you.",
    icon: CloudDownload,
  },
  {
    title: "Real-Time Insights",
    description: "Watch live charts update as feedback lands — no refresh required.",
    icon: Activity,
  },
  {
    title: "Smart Analytics",
    description: "Sentiment breakdowns, keyword clouds, and actionable micro-summaries.",
    icon: BarChart3,
  },
  {
    title: "Anonymous Feedback",
    description: "Encourage honest responses with privacy-first submission flows.",
    icon: EyeOff,
  },
  {
    title: "One-Click Suggestions",
    description: "Dashboards don’t just show data — they recommend the next move.",
    icon: Lightbulb,
  },
  {
    title: "Secure & Trusted",
    description: "Shield student voices with enterprise-grade privacy controls.",
    icon: Shield,
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="glowing-orb absolute -top-32 -right-20" />
      <div className="glowing-orb absolute bottom-0 left-0 delay-[1800ms]" />

      <header className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md text-primary">
            <Gamepad2 className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Insight Spark</p>
            <p className="text-2xl font-semibold">FeedbackFlow Arena</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-white/80 hover:text-white" onClick={() => navigate("/login")}>
            Portal
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-primary via-accent to-secondary text-base font-semibold shadow-xl shadow-primary/30 hover:scale-[1.02] transition" onClick={() => navigate("/login")}>
            Join Beta League
          </Button>
        </div>
      </header>

      <main className="relative z-10 space-y-24 pb-24 pt-10">
        <section className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.3fr,0.7fr]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Smart Feedback & Survey Platform built for modern campuses.
              </h1>
              <p className="text-lg text-white/75 md:text-xl">
                An AI-powered solution that makes feedback simple, meaningful, and actionable for classrooms, clubs, hackathons, and everything in between.
              </p>
              <ul className="space-y-3 text-white/80">
                {heroHighlights.map((line) => (
                  <li key={line} className="group flex gap-3 text-base font-medium tracking-tight text-white/85">
                    <Sparkles className="h-5 w-5 text-primary transition group-hover:scale-110" />
                    <span className="transition group-hover:text-white">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group rounded-full bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold shadow-lg shadow-primary/40 transition hover:-translate-y-1"
                onClick={() => navigate("/login")}
              >
                Start listening smarter
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/5 px-8 text-base text-white/90 backdrop-blur transition hover:-translate-y-1 hover:border-white/70"
                onClick={() => navigate("/login")}
              >
                See it in action
              </Button>
            </div>
          </div>

          <Card className="border-white/10 bg-white/5 p-6 text-white shadow-2xl shadow-primary/20 transition hover:-translate-y-2 hover:border-primary/40">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Instant intelligence</p>
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <div className="mt-6 space-y-4">
              <p className="text-lg text-white/80">
                Collect feedback anywhere and get AI-ready sentiment, keyword trends, and micro-summaries the second responses arrive.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p>✔️ Works with campus forms, QR codes, and Google Forms imports</p>
                <p>✔️ Live dashboards for educators, organizers, and sponsors</p>
                <p>✔️ One-click exports for reports and accreditation</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/20 to-accent/20 p-4 text-sm text-white/80">
              Ship summaries to teams in <span className="font-semibold text-white">under 60 seconds</span>.
            </div>
          </Card>
        </section>

        <section className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">💡 Why this matters</p>
              <h2 className="mt-2 text-3xl font-semibold">Collecting feedback is easy — understanding it is not.</h2>
            </div>
            <Button variant="outline" className="rounded-full border-white/40 bg-white/5 px-6 text-white/90 hover:bg-white/10" onClick={() => navigate("/login")}>
              Talk to product experts
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-black/40 transition hover:-translate-y-2 hover:border-white/60">
              <h3 className="text-2xl font-semibold">Existing tools generate responses but not insights.</h3>
              <p className="mt-3 text-white/70">
                Educators and organizers spend hours parsing comments and still miss the patterns hiding inside. Manual triage delays action and drains motivation.
              </p>
              <div className="mt-6 space-y-3">
                {problemPoints.map((point) => (
                  <p key={point} className="flex items-center gap-3 text-sm text-white/80">
                    <Shield className="h-4 w-4 text-primary" />
                    {point}
                  </p>
                ))}
              </div>
            </Card>
            <Card className="border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-black/40 transition hover:-translate-y-2 hover:border-primary/50">
              <h3 className="text-2xl font-semibold">We fix the insight gap with AI.</h3>
              <p className="mt-3 text-white/70">
                Our platform listens, labels, and lobbies for every student voice so teams can respond in minutes, not months.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-white/60">What you get</p>
                  <Progress value={92} className="mt-2 h-2 overflow-hidden rounded-full bg-white/10" />
                  <p className="text-xs text-white/60">92% faster insight cycles across pilots</p>
                </div>
                <p className="text-sm text-white/70">
                  Host real-time dashboards, share anonymous stories, and receive AI-crafted improvement suggestions in one place.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/5 p-8 text-white shadow-xl shadow-black/40 transition hover:-translate-y-2 hover:border-primary/50">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-accent" />
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Key features</p>
            </div>
            <div className="mt-8 grid gap-4">
              {featureDeck.slice(0, 4).map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <span className="rounded-2xl border border-white/10 bg-white/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-sm text-white/70">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="border-white/10 bg-white/5 p-8 text-white shadow-xl shadow-black/40 transition hover:-translate-y-2 hover:border-secondary/50">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-secondary" />
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">More superpowers</p>
            </div>
            <div className="mt-8 grid gap-4">
              {featureDeck.slice(4).map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="floating-card flex gap-4 rounded-3xl border border-white/20 bg-white/[0.08] p-5">
                    <span className="rounded-2xl border border-white/10 bg-white/10 p-3 text-secondary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-sm text-white/70">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </section>

        <section className="container mx-auto px-4">
          <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 p-10 text-white shadow-2xl shadow-primary/30">
            <div className="absolute inset-auto right-6 top-6 hidden rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-widest text-white/70 lg:block">
              Campus League 2025
            </div>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/70">Final call</p>
                <h2 className="mt-3 text-4xl font-semibold leading-tight">
                  Unite students, societies, and mentors inside one cinematic feedback arena.
                </h2>
                <p className="mt-4 text-white/80">
                  Build streaks, earn campus pride, and present live dashboards that judges remember.
                </p>
              </div>
              <div className="space-y-4">
                <Button size="lg" className="rounded-full bg-black/40 px-8 text-base font-semibold text-white hover:bg-black/60" onClick={() => navigate("/login")}>
                  Build my arena
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full border-0 bg-white px-8 text-base font-semibold text-slate-900 hover:bg-white/90" onClick={() => navigate("/login")}>
                  Book a campus showcase
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Landing;
