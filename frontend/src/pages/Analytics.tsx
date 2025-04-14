
import { useState } from "react";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Download, BarChart2, PieChart as PieChartIcon, Calendar } from "lucide-react";

// Sample data - this would come from the backend in a real app
const notesData = [
  { month: "Jan", count: 12 },
  { month: "Feb", count: 19 },
  { month: "Mar", count: 14 },
  { month: "Apr", count: 22 },
  { month: "May", count: 25 },
  { month: "Jun", count: 18 },
  { month: "Jul", count: 30 },
  { month: "Aug", count: 28 },
  { month: "Sep", count: 21 },
  { month: "Oct", count: 32 },
  { month: "Nov", count: 24 },
  { month: "Dec", count: 19 },
];

const procedureTypeData = [
  { name: "Knee Arthroscopy", value: 45 },
  { name: "Appendectomy", value: 25 },
  { name: "Cholecystectomy", value: 30 },
  { name: "Carpal Tunnel", value: 15 },
  { name: "Other", value: 10 },
];

const COLORS = ["#0284c7", "#7dd3fc", "#38bdf8", "#0ea5e9", "#075985"];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("year");

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your dictation metrics and optimize your workflow.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select
              defaultValue={timeRange}
              onValueChange={setTimeRange}
            >
              <SelectTrigger className="w-[180px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Past Week</SelectItem>
                <SelectItem value="month">Past Month</SelectItem>
                <SelectItem value="quarter">Past Quarter</SelectItem>
                <SelectItem value="year">Past Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="procedures">Procedures</TabsTrigger>
            <TabsTrigger value="time-saved">Time Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Notes</CardTitle>
                  <CardDescription>All dictations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">245</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500 font-medium">↑ 14%</span> from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">AI-Generated</CardTitle>
                  <CardDescription>Using templates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">198</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500 font-medium">↑ 23%</span> from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Time Saved</CardTitle>
                  <CardDescription>Estimated hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42.5</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Based on avg. 15 min per dictation
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="h-5 w-5 mr-2" />
                    Notes Generated Over Time
                  </CardTitle>
                  <CardDescription>
                    Monthly breakdown of dictations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={notesData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChartIcon className="h-5 w-5 mr-2" />
                    Procedure Types
                  </CardTitle>
                  <CardDescription>
                    Distribution by procedure category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={procedureTypeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {procedureTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="procedures" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Procedure Analysis</CardTitle>
                <CardDescription>
                  Detailed breakdown of procedure types and generation metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-12">
                  Detailed procedure analytics will appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="time-saved" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Time Savings Analysis</CardTitle>
                <CardDescription>
                  Estimated time saved from using AI-generated dictations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-12">
                  Detailed time savings analytics will appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
