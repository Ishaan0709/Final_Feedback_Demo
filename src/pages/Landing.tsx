import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, Users, Zap } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FeedbackFlow
          </span>
        </div>
        <Button onClick={() => navigate("/login")} variant="outline" className="font-semibold">
          Sign In
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Feedback into{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Actionable Insights
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop wasting time on manual analysis. Get real-time sentiment detection, AI summaries, 
            and beautiful visualizations that actually drive improvements.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => navigate("/login")} size="lg" className="text-lg px-8 font-semibold">
              Get Started Free
            </Button>
            <Button onClick={() => navigate("/login")} size="lg" variant="outline" className="text-lg px-8 font-semibold">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Instant Analysis</h3>
            <p className="text-muted-foreground">
              AI-powered sentiment detection and micro-summaries in real-time
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2">
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Smart Visualizations</h3>
            <p className="text-muted-foreground">
              Beautiful charts and graphs that reveal trends at a glance
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2">
            <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Role-Based Access</h3>
            <p className="text-muted-foreground">
              Students, teachers, and societies - each with tailored dashboards
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2">
            <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold">Gamified Experience</h3>
            <p className="text-muted-foreground">
              Earn points, unlock badges, and level up by giving quality feedback
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 text-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2">
          <h2 className="text-4xl font-bold mb-4">Ready to Make Feedback Matter?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students, teachers, and event organizers who are turning feedback into real improvements
          </p>
          <Button onClick={() => navigate("/login")} size="lg" className="text-lg px-12 font-semibold">
            Start Your Journey
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Landing;
