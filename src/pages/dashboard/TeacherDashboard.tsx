import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Plus, BarChart3, Users, MessageSquare, TrendingUp, Smile, Meh, Frown } from "lucide-react";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/10">
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold">FeedbackFlow</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>Logout</Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Teacher Dashboard 📊</h1>
            <p className="text-muted-foreground mt-2">Manage courses, track feedback, and analyze insights</p>
          </div>
          <Button className="gap-2 font-semibold">
            <Plus className="h-5 w-5" />
            Create New Form
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Forms</p>
                <p className="text-3xl font-bold text-accent">8</p>
              </div>
              <MessageSquare className="h-12 w-12 text-accent opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Responses</p>
                <p className="text-3xl font-bold text-primary">342</p>
              </div>
              <Users className="h-12 w-12 text-primary opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
                <p className="text-3xl font-bold text-success">4.6</p>
              </div>
              <TrendingUp className="h-12 w-12 text-success opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-3xl font-bold text-secondary">87%</p>
              </div>
              <BarChart3 className="h-12 w-12 text-secondary opacity-50" />
            </div>
          </Card>
        </div>

        {/* Recent Feedback Summary */}
        <Card className="p-6 border-2">
          <h3 className="text-xl font-bold mb-4">Real-Time Sentiment Overview</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-success/5">
              <div className="flex items-center gap-2 mb-2">
                <Smile className="h-5 w-5 text-success" />
                <span className="font-semibold">Positive</span>
              </div>
              <p className="text-3xl font-bold text-success">68%</p>
              <p className="text-sm text-muted-foreground">234 responses</p>
            </div>
            <div className="p-4 border rounded-lg bg-warning/5">
              <div className="flex items-center gap-2 mb-2">
                <Meh className="h-5 w-5 text-warning" />
                <span className="font-semibold">Neutral</span>
              </div>
              <p className="text-3xl font-bold text-warning">23%</p>
              <p className="text-sm text-muted-foreground">79 responses</p>
            </div>
            <div className="p-4 border rounded-lg bg-destructive/5">
              <div className="flex items-center gap-2 mb-2">
                <Frown className="h-5 w-5 text-destructive" />
                <span className="font-semibold">Negative</span>
              </div>
              <p className="text-3xl font-bold text-destructive">9%</p>
              <p className="text-sm text-muted-foreground">29 responses</p>
            </div>
          </div>
        </Card>

        {/* Active Forms */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your Active Forms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 space-y-4 border-2 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2">Course Feedback</Badge>
                  <h3 className="text-xl font-bold">Data Structures Mid-Sem</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Collecting feedback on teaching methodology and course content
                  </p>
                </div>
                <Badge variant="outline" className="bg-success/10">Live</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Response Rate</span>
                  <span className="font-semibold">76% (95/125)</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "76%" }} />
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">View Analytics</Button>
                <Button variant="outline">Share</Button>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-2 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="secondary" className="mb-2">Lab Session</Badge>
                  <h3 className="text-xl font-bold">Python Programming Lab</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Weekly lab session effectiveness survey
                  </p>
                </div>
                <Badge variant="outline" className="bg-success/10">Live</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Response Rate</span>
                  <span className="font-semibold">92% (55/60)</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">View Analytics</Button>
                <Button variant="outline">Share</Button>
              </div>
            </Card>
          </div>
        </div>

        {/* AI Insights */}
        <Card className="p-6 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-xl font-bold mb-4">🤖 AI-Generated Insights</h3>
          <div className="space-y-3">
            <div className="p-4 border rounded-lg bg-card">
              <p className="text-sm font-semibold text-primary mb-1">Top Positive Feedback</p>
              <p className="text-sm">
                "Clear explanations during lectures" mentioned in 42 responses. Students appreciate the structured approach to complex topics.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <p className="text-sm font-semibold text-accent mb-1">Improvement Suggestion</p>
              <p className="text-sm">
                15 students requested more practical examples. Consider adding 2-3 real-world case studies in upcoming lectures.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <p className="text-sm font-semibold text-success mb-1">Engagement Trend</p>
              <p className="text-sm">
                Lab session feedback shows 23% increase in satisfaction compared to last month. Interactive coding exercises are working well!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
