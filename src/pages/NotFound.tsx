import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] text-white">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="glowing-orb absolute -top-24 right-0" />
      <div className="glowing-orb absolute bottom-0 left-0 delay-[1300ms]" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
        <Sparkles className="h-10 w-10 text-primary" />
        <Badge className="border-white/30 bg-white/10 text-white/80">Glitch in the quest</Badge>
        <h1 className="text-5xl font-bold">404 — Portal not unlocked</h1>
        <p className="max-w-xl text-white/70">
          The route <span className="text-white">"{location.pathname}"</span> hasn’t earned enough XP yet. Jump back into the arena and keep the mission alive.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button className="rounded-full bg-gradient-to-r from-primary to-accent px-6 font-semibold shadow-lg shadow-primary/30" asChild>
            <a href="/">Return to HQ</a>
          </Button>
          <Button variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10" asChild>
            <a href="/landing">View arena map</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
