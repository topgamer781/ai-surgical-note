
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft, Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const AllNotes = () => {
  // Sample notes data - in a real app this would come from an API or database
  const notes = [
    {
      id: "1",
      title: "Right total knee arthroplasty",
      date: "Apr 12, 2025",
      status: "final",
      summary: "TKA performed on right knee with excellent alignment and stability.",
    },
    {
      id: "2",
      title: "Laparoscopic cholecystectomy",
      date: "Apr 10, 2025",
      status: "final",
      summary: "Uncomplicated lap chole with 4-port technique. No bile leakage noted.",
    },
    {
      id: "3",
      title: "Left carpal tunnel release",
      date: "Apr 8, 2025",
      status: "draft",
      summary: "Open CTR with complete dissection of transverse carpal ligament.",
    },
    {
      id: "4",
      title: "Appendectomy",
      date: "Apr 5, 2025",
      status: "final",
      summary: "Acute appendicitis. Uncomplicated appendectomy performed.",
    },
    {
      id: "5",
      title: "Colonoscopy with polypectomy",
      date: "Apr 3, 2025",
      status: "final",
      summary: "Three polyps removed from sigmoid colon. Sent for pathology.",
    },
    {
      id: "6",
      title: "Right inguinal hernia repair",
      date: "Mar 30, 2025",
      status: "draft",
      summary: "Tension-free mesh repair of right inguinal hernia.",
    },
  ];

  const handleDeleteNote = (id: string) => {
    // In a real app, this would call an API to delete the note
    toast({
      title: "Note deleted",
      description: `Note ID ${id} has been deleted.`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <Link 
              to="/dashboard" 
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">All Operative Notes</h1>
            <p className="text-muted-foreground">
              View and manage all your operative notes in one place.
            </p>
          </div>
          <Link to="/generate">
            <Button className="hover-lift">
              <FileText className="h-4 w-4 mr-2" />
              New Note
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium">
                <div className="col-span-5">Title</div>
                <div className="col-span-3">Date</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-right">Actions</div>
              </div>
              {notes.map((note, index) => (
                <div 
                  key={note.id} 
                  className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="col-span-5 font-medium">{note.title}</div>
                  <div className="col-span-3 text-muted-foreground">{note.date}</div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      note.status === "draft" 
                        ? "bg-yellow-100 text-yellow-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {note.status === "draft" ? "Draft" : "Final"}
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-end gap-2">
                    <Link to={`/edit/${note.id}`}>
                      <Button variant="ghost" size="sm" className="hover-scale h-8 w-8 p-0">
                        {note.status === "draft" ? (
                          <Pencil className="h-4 w-4 text-primary" />
                        ) : (
                          <Eye className="h-4 w-4 text-primary" />
                        )}
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover-scale h-8 w-8 p-0 hover:text-destructive"
                      onClick={() => handleDeleteNote(note.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AllNotes;
