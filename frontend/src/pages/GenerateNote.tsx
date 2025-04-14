
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Loader2, Sparkles, ArrowRight, Calendar, Brain } from "lucide-react";

const GenerateNote = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedNote, setGeneratedNote] = useState("");
  const { toast } = useToast();

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedNote(`PREOPERATIVE DIAGNOSIS:
Right knee medial meniscus tear.

POSTOPERATIVE DIAGNOSIS:
Right knee medial meniscus tear.

PROCEDURE PERFORMED:
Right knee arthroscopy with partial medial meniscectomy.

ANESTHESIA:
General endotracheal.

ESTIMATED BLOOD LOSS:
Minimal.

COMPLICATIONS:
None.

IMPLANTS:
None.

INDICATIONS:
The patient is a 45-year-old male who has had persistent right knee pain and mechanical symptoms. MRI demonstrated a complex tear of the posterior horn of the medial meniscus. Conservative measures have failed, and the patient has elected to proceed with arthroscopic treatment.

DESCRIPTION OF PROCEDURE:
The patient was brought to the operating room and placed supine on the operating table. After the induction of general anesthesia, a time-out was performed confirming the correct patient, procedure, and surgical site. The right lower extremity was prepped and draped in the usual sterile fashion.

A standard lateral parapatellar portal was established, and the arthroscope was introduced. A thorough diagnostic arthroscopy revealed the following:

1. Patellofemoral joint: The articular surfaces of the patella and trochlea showed grade I chondromalacia with minimal fissuring but overall well-preserved cartilage.

2. Medial compartment: There was a complex, displaced tear of the posterior horn of the medial meniscus. The medial femoral condyle and tibial plateau demonstrated grade I chondromalacia.

3. Lateral compartment: The lateral meniscus was intact. The lateral femoral condyle and tibial plateau showed normal articular cartilage.

4. Intercondylar notch: The ACL and PCL were intact with no evidence of injury.

A standard medial parapatellar portal was established under direct visualization. Using a combination of arthroscopic basket forceps and shaver, the unstable portion of the medial meniscus was carefully debrided back to a stable rim, preserving as much functional meniscal tissue as possible. The remaining meniscus was probed and found to be stable.

The knee was then thoroughly irrigated to remove any loose debris. The instruments were removed, and the portals were closed with 4-0 nylon sutures. Sterile dressings were applied. The patient tolerated the procedure well and was transferred to the recovery room in stable condition.

POSTOPERATIVE PLAN:
The patient will be discharged home today with appropriate pain medications. Weight-bearing as tolerated is permitted with the use of crutches for comfort only. Physical therapy will begin in 3-5 days. The patient will follow up in clinic in 10-14 days for suture removal and further recommendations.`);
      
      toast({
        title: "Note generated successfully",
        description: "Your operative note is ready for review.",
      });
    }, 3000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Generate Operative Note</h1>
          <p className="text-muted-foreground">
            Create a new note based on your templates and custom details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Procedure Details</CardTitle>
                <CardDescription>
                  Provide information about the procedure to generate a customized note.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGenerate} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="template">Select Template</Label>
                    <Select required>
                      <SelectTrigger id="template">
                        <SelectValue placeholder="Choose a procedure template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="right-knee-arthroscopy">Right Knee Arthroscopy</SelectItem>
                        <SelectItem value="left-knee-arthroscopy">Left Knee Arthroscopy</SelectItem>
                        <SelectItem value="laparoscopic-cholecystectomy">Laparoscopic Cholecystectomy</SelectItem>
                        <SelectItem value="carpal-tunnel-release">Carpal Tunnel Release</SelectItem>
                        <SelectItem value="appendectomy">Appendectomy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="procedure-date">Procedure Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="procedure-date" 
                          type="date" 
                          className="pl-10" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ai-model">AI Model</Label>
                      <Select defaultValue="gpt-4">
                        <SelectTrigger id="ai-model">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-4">GPT-4 (Recommended)</SelectItem>
                          <SelectItem value="claude">Claude</SelectItem>
                          <SelectItem value="mistral">Mistral</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="patient-details">Patient Details</Label>
                    <Textarea 
                      id="patient-details" 
                      placeholder="45-year-old male, BMI 28, no significant medical history"
                    />
                    <p className="text-xs text-muted-foreground">
                      Only include relevant, de-identified information.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="procedure-modifications">
                      Procedure Modifications or Special Notes
                    </Label>
                    <Textarea 
                      id="procedure-modifications" 
                      placeholder="Any modifications from your standard approach or unusual findings"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Note...
                      </>
                    ) : (
                      <>
                        <Brain className="mr-2 h-4 w-4" />
                        Generate Operative Note
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" /> 
                  Generated Note
                </CardTitle>
                <CardDescription>
                  Your AI-generated operative note will appear here.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                {generatedNote ? (
                  <div className="relative flex-grow">
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Sparkles className="h-5 w-5 text-primary animate-pulse-subtle" />
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-md h-full overflow-y-auto whitespace-pre-line text-sm">
                      {generatedNote}
                    </div>
                    <div className="mt-4 flex justify-end space-x-3">
                      <Button variant="outline" size="sm">
                        Copy
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                      <Button size="sm">
                        Edit Note <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 p-8 bg-muted rounded-md">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Ready to Generate</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Fill out the procedure details and click "Generate Operative Note" to create your AI-powered dictation.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GenerateNote;
