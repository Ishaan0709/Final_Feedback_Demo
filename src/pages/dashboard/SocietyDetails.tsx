import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Plus, Users, FileText, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SocietyLogoHeader = ({ logo, name, fallbackIcon, borderColor, color }: { logo: string; name: string; fallbackIcon: string; borderColor: string; color: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`rounded-xl border-2 ${borderColor} bg-gradient-to-br ${color} p-3 h-12 w-12 flex items-center justify-center overflow-hidden relative`}>
      {imageError ? (
        <div className="text-2xl">{fallbackIcon}</div>
      ) : (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl">{fallbackIcon}</div>
            </div>
          )}
          <img
            src={logo}
            alt={name}
            className={`h-full w-auto object-contain ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
          />
        </>
      )}
    </div>
  );
};

const societiesData: Record<string, { name: string; subtitle: string; logo: string; fallbackIcon: string; color: string; borderColor: string }> = {
  saturnalia: {
    name: "Saturnalia",
    subtitle: "50th Echoes of Eternity",
    logo: "/society-logos/images-4.png",
    fallbackIcon: "🎭",
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
  },
  "food-festival": {
    name: "Food Festival",
    subtitle: "Flavoured Illusions",
    logo: "/society-logos/images-3.jpeg",
    fallbackIcon: "🍕",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
  },
  ieee: {
    name: "IEEE",
    subtitle: "Thapar Chapter",
    logo: "/society-logos/45298983.png",
    fallbackIcon: "⚡",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
  },
  iste: {
    name: "ISTE",
    subtitle: "Thapar Chapter",
    logo: "/society-logos/images-5.png",
    fallbackIcon: "🔬",
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30",
  },
  "microsoft-ambassador": {
    name: "Microsoft Learn",
    subtitle: "Student Ambassador",
    logo: "/society-logos/1722854995324.jpeg",
    fallbackIcon: "💻",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
  },
  acm: {
    name: "ACM",
    subtitle: "Thapar Chapter",
    logo: "/society-logos/images-6.png",
    fallbackIcon: "💡",
    color: "from-sky-500/20 to-cyan-500/20",
    borderColor: "border-sky-500/30",
  },
};

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  attendees: number;
  status: "upcoming" | "completed" | "ongoing";
  hasFeedbackForm: boolean;
}

const SocietyDetails = () => {
  const { societyId } = useParams<{ societyId: string }>();
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    questions: [""],
  });

  const society = societyId ? societiesData[societyId] : null;

  if (!society) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Society not found</h1>
          <Button onClick={() => navigate("/dashboard/society")}>Go back</Button>
        </div>
      </div>
    );
  }

  const handleAddEvent = () => {
    const newEvent: Event = {
      id: `event-${Date.now()}`,
      title: prompt("Event Title:") || "New Event",
      description: prompt("Event Description:") || "Event description will be provided by the user",
      date: prompt("Event Date (e.g., 2024-12-15):") || new Date().toISOString().split("T")[0],
      time: prompt("Event Time (e.g., 10:00 AM):") || "10:00 AM",
      venue: prompt("Venue:") || "TBD",
      attendees: parseInt(prompt("Expected Attendees:") || "0"),
      status: "upcoming",
      hasFeedbackForm: false,
    };
    setEvents([...events, newEvent]);
  };

  const handleCreateFeedbackForm = (eventId: string) => {
    setSelectedEventId(eventId);
    setIsFormDialogOpen(true);
  };

  const handleSubmitForm = () => {
    if (!selectedEventId || !formData.title) return;

    setEvents(
      events.map((event) =>
        event.id === selectedEventId ? { ...event, hasFeedbackForm: true } : event
      )
    );
    setIsFormDialogOpen(false);
    setFormData({ title: "", description: "", questions: [""] });
    setSelectedEventId(null);
    alert("Feedback form created successfully!");
  };

  const handleAddQuestion = () => {
    setFormData({
      ...formData,
      questions: [...formData.questions, ""],
    });
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...formData.questions];
    newQuestions[index] = value;
    setFormData({
      ...formData,
      questions: newQuestions,
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="glowing-orb absolute -top-20 left-0" />
      <div className="glowing-orb absolute bottom-0 right-0 delay-[1500ms]" />

      <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white"
              onClick={() => navigate("/dashboard/society")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <SocietyLogoHeader 
                logo={society.logo}
                name={society.name}
                fallbackIcon={society.fallbackIcon}
                borderColor={society.borderColor}
                color={society.color}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Society</p>
                <p className="text-lg font-semibold">{society.name}</p>
                <p className="text-sm text-white/70">{society.subtitle}</p>
              </div>
            </div>
          </div>
          <Button className="rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg shadow-violet-500/30" onClick={() => navigate("/")}>
            Exit stage
          </Button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-10 px-6 py-10">
        <section className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-4">
            <Badge className="border-white/30 bg-white/10 text-white/80 backdrop-blur">
              {society.name} Events
            </Badge>
            <div>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Recent Events & Feedback
              </h1>
            </div>
            <p className="max-w-2xl text-white/70 text-lg md:text-xl">
              Manage events and collect feedback from participants. Create feedback forms to gather insights and improve future events.
            </p>
          </div>
          <Button
            className="gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 font-semibold shadow-lg shadow-primary/30 transition hover:-translate-y-1 hover:shadow-primary/50"
            onClick={handleAddEvent}
          >
            <Plus className="h-5 w-5" />
            Add New Event
          </Button>
        </section>

        {events.length === 0 ? (
          <Card className="border-white/10 bg-white/5 p-12 text-center text-white shadow-2xl shadow-primary/20">
            <Calendar className="h-16 w-16 mx-auto mb-4 text-white/40" />
            <h3 className="text-2xl font-semibold mb-2">No events yet</h3>
            <p className="text-white/70 mb-6">Add your first event to get started with feedback collection.</p>
            <Button
              className="rounded-full bg-gradient-to-r from-primary to-accent font-semibold shadow-lg shadow-primary/40"
              onClick={handleAddEvent}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </Card>
        ) : (
          <section className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <Card
                key={event.id}
                className="group border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-black/30 transition hover:-translate-y-2 hover:border-primary/60"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    className={
                      event.status === "completed"
                        ? "border-green-500/30 bg-green-500/10 text-green-300"
                        : event.status === "ongoing"
                        ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                        : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                    }
                  >
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </Badge>
                  {event.hasFeedbackForm && (
                    <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Form Created
                    </Badge>
                  )}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-white/70 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <MapPin className="h-4 w-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                {!event.hasFeedbackForm ? (
                  <Button
                    className="w-full rounded-full bg-gradient-to-r from-primary to-accent font-semibold shadow-lg shadow-primary/40 transition hover:-translate-y-1"
                    onClick={() => handleCreateFeedbackForm(event.id)}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Create Feedback Form
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button
                      className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold shadow-lg shadow-emerald-500/40 transition hover:-translate-y-1"
                      onClick={() => alert("View form responses")}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Form Responses
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-white/30 text-white/80 hover:text-white"
                      onClick={() => handleCreateFeedbackForm(event.id)}
                    >
                      Edit Form
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </section>
        )}
      </main>

      <Dialog open={isFormDialogOpen} onOpenChange={setIsFormDialogOpen}>
        <DialogContent className="bg-[#020617] border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Create Feedback Form</DialogTitle>
            <DialogDescription className="text-white/70">
              Create a feedback form for this event. Add questions to gather participant insights.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="form-title" className="text-white/80">
                Form Title
              </Label>
              <Input
                id="form-title"
                placeholder="e.g., Event Feedback Form"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-black/20 border-white/20 text-white placeholder:text-white/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-description" className="text-white/80">
                Form Description
              </Label>
              <Textarea
                id="form-description"
                placeholder="Brief description of the feedback form..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-black/20 border-white/20 text-white placeholder:text-white/40 min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-white/80">Questions</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white/80 hover:text-white"
                  onClick={handleAddQuestion}
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add Question
                </Button>
              </div>
              <div className="space-y-2">
                {formData.questions.map((question, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Question ${index + 1}`}
                      value={question}
                      onChange={(e) => handleQuestionChange(index, e.target.value)}
                      className="bg-black/20 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              className="border-white/30 text-white/80 hover:text-white"
              onClick={() => {
                setIsFormDialogOpen(false);
                setFormData({ title: "", description: "", questions: [""] });
                setSelectedEventId(null);
              }}
            >
              Cancel
            </Button>
            <Button
              className="rounded-full bg-gradient-to-r from-primary to-accent font-semibold shadow-lg shadow-primary/40"
              onClick={handleSubmitForm}
              disabled={!formData.title}
            >
              Create Form
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SocietyDetails;

