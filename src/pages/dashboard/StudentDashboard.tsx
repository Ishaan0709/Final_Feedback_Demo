import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Trophy, Star, MessageSquare, TrendingUp, Award, Zap } from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FeedbackFlow</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>Logout</Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section with Stats */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Welcome back, Alex! 👋</h1>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Your Level</p>
                  <p className="text-3xl font-bold text-primary">7</p>
                </div>
                <Trophy className="h-12 w-12 text-primary opacity-50" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                  <p className="text-3xl font-bold text-accent">2,847</p>
                </div>
                <Zap className="h-12 w-12 text-accent opacity-50" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Badges Earned</p>
                  <p className="text-3xl font-bold text-secondary">12</p>
                </div>
                <Award className="h-12 w-12 text-secondary opacity-50" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Responses Given</p>
                  <p className="text-3xl font-bold text-success">48</p>
                </div>
                <MessageSquare className="h-12 w-12 text-success opacity-50" />
              </div>
            </Card>
          </div>
        </div>

        {/* Progress to Next Level */}
        <Card className="p-6 border-2">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Level 7 → Level 8</h3>
              <span className="text-sm text-muted-foreground">153 XP to go</span>
            </div>
            <Progress value={72} className="h-3" />
            <p className="text-sm text-muted-foreground">
              Complete 3 more feedback forms to unlock "Super Contributor" badge! 🎯
            </p>
          </div>
        </Card>

        {/* Available Forms */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Pending Feedback Requests</h2>
            <Badge variant="secondary" className="text-base px-3 py-1">3 New</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-all border-2 hover:border-primary cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2">Event Feedback</Badge>
                  <h3 className="text-xl font-bold">How was TechFest 2024? 🎉</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Share your experience about the annual tech festival
                  </p>
                </div>
                <Badge variant="outline" className="bg-primary/10">+50 XP</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>5 questions • ~3 min</span>
              </div>
              <Button className="w-full">Start Feedback</Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all border-2 hover:border-accent cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="secondary" className="mb-2">Course Feedback</Badge>
                  <h3 className="text-xl font-bold">Rate your Data Structures class 📚</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Help improve teaching quality for future students
                  </p>
                </div>
                <Badge variant="outline" className="bg-accent/10">+30 XP</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>8 questions • ~5 min</span>
              </div>
              <Button variant="outline" className="w-full">Start Feedback</Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all border-2 hover:border-secondary cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2 bg-secondary text-secondary-foreground">Quick Poll</Badge>
                  <h3 className="text-xl font-bold">Cafeteria Menu Preferences 🍕</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Vote for next week's special dishes
                  </p>
                </div>
                <Badge variant="outline" className="bg-secondary/10">+10 XP</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>3 questions • ~1 min</span>
              </div>
              <Button variant="outline" className="w-full">Start Feedback</Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all border-2 hover:border-primary cursor-pointer opacity-75">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2">Society Feedback</Badge>
                  <h3 className="text-xl font-bold">Robotics Club Workshop Feedback ⚙️</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your thoughts on yesterday's Arduino session
                  </p>
                </div>
                <Badge variant="outline" className="bg-primary/10">+40 XP</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>6 questions • ~4 min</span>
              </div>
              <Button className="w-full">Start Feedback</Button>
            </Card>
          </div>
        </div>

        {/* Recent Badges */}
        <Card className="p-6 space-y-4 border-2">
          <h3 className="text-xl font-bold">Recent Achievements 🏆</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {["Quick Responder", "Detailed Analyst", "Event Enthusiast", "Feedback Streak"].map((badge) => (
              <div key={badge} className="flex-shrink-0 p-4 border-2 rounded-lg text-center space-y-2 hover:bg-muted/50 transition-colors">
                <div className="h-12 w-12 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-semibold">{badge}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
