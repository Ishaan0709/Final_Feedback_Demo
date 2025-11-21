import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Plus, Calendar, Users, TrendingUp, Award, MessageSquare, Star } from "lucide-react";

const SocietyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/10">
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-secondary" />
            <span className="text-xl font-bold">FeedbackFlow</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>Logout</Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Society Dashboard 🎯</h1>
            <p className="text-muted-foreground mt-2">Track events, manage feedback, and grow your community</p>
          </div>
          <Button className="gap-2 font-semibold">
            <Plus className="h-5 w-5" />
            Create Event Form
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Events</p>
                <p className="text-3xl font-bold text-secondary">15</p>
              </div>
              <Calendar className="h-12 w-12 text-secondary opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Members</p>
                <p className="text-3xl font-bold text-primary">487</p>
              </div>
              <Users className="h-12 w-12 text-primary opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Event Rating</p>
                <p className="text-3xl font-bold text-accent">4.8</p>
              </div>
              <Star className="h-12 w-12 text-accent opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Feedback Count</p>
                <p className="text-3xl font-bold text-success">1,234</p>
              </div>
              <MessageSquare className="h-12 w-12 text-success opacity-50" />
            </div>
          </Card>
        </div>

        {/* Event Performance */}
        <Card className="p-6 border-2">
          <h3 className="text-xl font-bold mb-4">Recent Event Performance</h3>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Top Rated Event</span>
                </div>
                <p className="text-2xl font-bold">TechFest 2024</p>
                <p className="text-sm text-muted-foreground">4.9/5.0 avg rating</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <span className="font-semibold">Highest Attendance</span>
                </div>
                <p className="text-2xl font-bold">AI Workshop</p>
                <p className="text-sm text-muted-foreground">320 participants</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Most Feedback</span>
                </div>
                <p className="text-2xl font-bold">Coding Marathon</p>
                <p className="text-sm text-muted-foreground">156 responses</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Active Feedback Forms */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Active Feedback Forms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 space-y-4 border-2 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2">Event Feedback</Badge>
                  <h3 className="text-xl font-bold">TechFest 2024 Experience</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Post-event survey for annual technical festival
                  </p>
                </div>
                <Badge variant="outline" className="bg-success/10">Live</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Responses</span>
                  <span className="font-semibold">284/350 (81%)</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "81%" }} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <p className="text-success font-bold">89%</p>
                  <p className="text-muted-foreground">Positive</p>
                </div>
                <div>
                  <p className="text-warning font-bold">8%</p>
                  <p className="text-muted-foreground">Neutral</p>
                </div>
                <div>
                  <p className="text-destructive font-bold">3%</p>
                  <p className="text-muted-foreground">Negative</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">View Insights</Button>
                <Button variant="outline">Export</Button>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-2 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="secondary" className="mb-2">Workshop</Badge>
                  <h3 className="text-xl font-bold">AI/ML Workshop Feedback</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Collecting insights on hands-on sessions
                  </p>
                </div>
                <Badge variant="outline" className="bg-success/10">Live</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Responses</span>
                  <span className="font-semibold">156/180 (87%)</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "87%" }} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <p className="text-success font-bold">92%</p>
                  <p className="text-muted-foreground">Positive</p>
                </div>
                <div>
                  <p className="text-warning font-bold">6%</p>
                  <p className="text-muted-foreground">Neutral</p>
                </div>
                <div>
                  <p className="text-destructive font-bold">2%</p>
                  <p className="text-muted-foreground">Negative</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">View Insights</Button>
                <Button variant="outline">Export</Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Trending Topics */}
        <Card className="p-6 border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
          <h3 className="text-xl font-bold mb-4">📊 Trending Topics from Feedback</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { text: "Great Organization", count: 89 },
              { text: "More Workshops", count: 67 },
              { text: "Better Timing", count: 45 },
              { text: "Loved the Speakers", count: 123 },
              { text: "Food Quality", count: 34 },
              { text: "Venue Perfect", count: 78 },
              { text: "Need Breaks", count: 28 },
              { text: "Amazing Experience", count: 156 },
            ].map((topic) => (
              <Badge
                key={topic.text}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary/10 cursor-pointer"
              >
                {topic.text} ({topic.count})
              </Badge>
            ))}
          </div>
        </Card>

        {/* AI Summary */}
        <Card className="p-6 border-2">
          <h3 className="text-xl font-bold mb-4">🤖 AI-Generated Summary</h3>
          <div className="space-y-3">
            <div className="p-4 border rounded-lg bg-success/5">
              <p className="text-sm font-semibold text-success mb-1">What's Working Well</p>
              <p className="text-sm">
                Members love the interactive sessions and hands-on activities. The speaker lineup for TechFest received overwhelmingly positive feedback with 92% satisfaction.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-accent/5">
              <p className="text-sm font-semibold text-accent mb-1">Areas for Improvement</p>
              <p className="text-sm">
                23 members suggested better time management during workshops. Consider adding 10-minute breaks between sessions to improve engagement.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-primary/5">
              <p className="text-sm font-semibold text-primary mb-1">Growth Opportunity</p>
              <p className="text-sm">
                67 students requested more advanced technical workshops. This indicates strong interest in deep-dive sessions on emerging technologies.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SocietyDashboard;
