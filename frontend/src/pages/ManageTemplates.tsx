
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, History, PlusCircle, Pencil, Trash2, ChevronsUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const ManageTemplates = () => {
  // Sample templates data - in a real app this would come from an API or database
  const [templates, setTemplates] = useState([
    {
      id: "1",
      name: "Total knee arthroplasty",
      count: 24,
      lastUsed: "Apr 10, 2025",
    },
    {
      id: "2",
      name: "Laparoscopic cholecystectomy",
      count: 18,
      lastUsed: "Apr 8, 2025",
    },
    {
      id: "3",
      name: "Carpal tunnel release",
      count: 15,
      lastUsed: "Apr 5, 2025",
    },
    {
      id: "4",
      name: "Appendectomy",
      count: 12,
      lastUsed: "Mar 30, 2025",
    },
    {
      id: "5",
      name: "Colonoscopy with polypectomy",
      count: 10,
      lastUsed: "Mar 28, 2025",
    },
    {
      id: "6",
      name: "Inguinal hernia repair",
      count: 9,
      lastUsed: "Mar 25, 2025",
    },
  ]);

  const handleDeleteTemplate = (id: string) => {
    // In a real app, this would call an API to delete the template
    setTemplates(templates.filter(template => template.id !== id));
    toast({
      title: "Template deleted",
      description: `Template ID ${id} has been deleted.`,
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
            <h1 className="text-2xl font-bold tracking-tight">Template Management</h1>
            <p className="text-muted-foreground">
              Create and manage your procedure templates.
            </p>
          </div>
          <Button className="hover-lift">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Template
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Templates</CardTitle>
            <CardDescription>
              Templates are created from your frequently used operative notes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium">
                <div className="col-span-5">Template Name</div>
                <div className="col-span-3">Notes Created</div>
                <div className="col-span-2">Last Used</div>
                <div className="col-span-2 text-right">Actions</div>
              </div>
              {templates.map((template, index) => (
                <div 
                  key={template.id} 
                  className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="col-span-5 font-medium flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <History className="h-4 w-4 text-primary" />
                    </div>
                    {template.name}
                  </div>
                  <div className="col-span-3 text-muted-foreground">{template.count} notes</div>
                  <div className="col-span-2 text-muted-foreground">{template.lastUsed}</div>
                  <div className="col-span-2 flex justify-end gap-2">
                    <Button variant="ghost" size="sm" className="hover-scale h-8 w-8 p-0">
                      <Pencil className="h-4 w-4 text-primary" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover-scale h-8 w-8 p-0 hover:text-destructive"
                      onClick={() => handleDeleteTemplate(template.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Template Order</CardTitle>
            <CardDescription>
              Drag and drop to reorder your templates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              {templates.map((template, index) => (
                <div 
                  key={template.id} 
                  className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/20 transition-colors cursor-move animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center">
                    <div className="p-2 text-muted-foreground">
                      <ChevronsUpDown className="h-4 w-4" />
                    </div>
                    <div className="font-medium">{template.name}</div>
                  </div>
                  <div className="text-muted-foreground text-sm">{template.count} notes</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ManageTemplates;
