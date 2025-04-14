
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, Clock, History, BarChart2, Files, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample data for the dashboard
  const recentNotes = [
    {
      id: "1",
      title: "Right total knee arthroplasty",
      date: "Apr 12, 2025",
      status: "final",
    },
    {
      id: "2",
      title: "Laparoscopic cholecystectomy",
      date: "Apr 10, 2025",
      status: "final",
    },
    {
      id: "3",
      title: "Left carpal tunnel release",
      date: "Apr 8, 2025",
      status: "draft",
    },
  ];

  const templates = [
    {
      id: "1",
      name: "Total knee arthroplasty",
      count: 24,
    },
    {
      id: "2",
      name: "Laparoscopic cholecystectomy",
      count: 18,
    },
    {
      id: "3",
      name: "Carpal tunnel release",
      count: 15,
    },
    {
      id: "4",
      name: "Appendectomy",
      count: 12,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Welcome message */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back, Dr. Smith</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your notes and templates.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Link to="/upload">
              <Button className="hover-lift">
                <Upload className="h-4 w-4 mr-2" />
                Upload Dictation
              </Button>
            </Link>
            <Link to="/generate">
              <Button variant="secondary" className="hover-lift">
                <FileText className="h-4 w-4 mr-2" />
                Generate Note
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover-scale transition-all duration-300 hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Notes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">52</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="hover-scale transition-all duration-300 hover:shadow-md animate-delay-100">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Templates</CardTitle>
              <History className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                4 templates added this month
              </p>
            </CardContent>
          </Card>
          <Card className="hover-scale transition-all duration-300 hover:shadow-md animate-delay-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18.5 hrs</div>
              <p className="text-xs text-muted-foreground">
                Based on average dictation time
              </p>
            </CardContent>
          </Card>
          <Card className="hover-scale transition-all duration-300 hover:shadow-md animate-delay-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96.8%</div>
              <p className="text-xs text-muted-foreground">
                Minimal edits required
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main content grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent notes */}
          <Card className="col-span-1 hover-lift transition-all duration-300">
            <CardHeader>
              <CardTitle>Recent Notes</CardTitle>
              <CardDescription>
                Your recently generated operative notes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentNotes.map((note, index) => (
                  <div
                    key={note.id}
                    className={`flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{note.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {note.date}
                        </p>
                      </div>
                    </div>
                    <Link to={`/edit/${note.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-colors"
                      >
                        {note.status === "draft" ? "Edit Draft" : "View"}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
              <Link to="/all-notes">
                <Button variant="outline" className="w-full mt-4 hover-lift">
                  <Files className="h-4 w-4 mr-2" />
                  View All Notes
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Templates */}
          <Card className="col-span-1 hover-lift transition-all duration-300">
            <CardHeader>
              <CardTitle>Your Templates</CardTitle>
              <CardDescription>
                Procedure templates built from your dictations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {templates.map((template, index) => (
                  <div
                    key={template.id}
                    className={`flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <History className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{template.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {template.count} notes
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-colors"
                    >
                      Use
                    </Button>
                  </div>
                ))}
              </div>
              <Link to="/manage-templates">
                <Button variant="outline" className="w-full mt-4 hover-lift">
                  <Settings2 className="h-4 w-4 mr-2" />
                  Manage Templates
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
