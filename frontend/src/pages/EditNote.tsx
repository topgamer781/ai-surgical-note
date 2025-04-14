
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save, RotateCw, ArrowLeft, Download, Copy } from "lucide-react";

const EditNote = () => {
  const { id } = useParams();
  const [noteContent, setNoteContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isReprocessing, setIsReprocessing] = useState(false);
  const { toast } = useToast();

  // Simulate loading the note data
  useEffect(() => {
    const timeout = setTimeout(() => {
      const content = `PREOPERATIVE DIAGNOSIS:
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
The patient will be discharged home today with appropriate pain medications. Weight-bearing as tolerated is permitted with the use of crutches for comfort only. Physical therapy will begin in 3-5 days. The patient will follow up in clinic in 10-14 days for suture removal and further recommendations.`;
      
      setNoteContent(content);
      setOriginalContent(content);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, [id]);

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
      setOriginalContent(noteContent);
      toast({
        title: "Note saved",
        description: "Your changes have been saved successfully.",
      });
    }, 1000);
  };

  const handleReprocess = () => {
    setIsReprocessing(true);
    
    // Simulate reprocessing
    setTimeout(() => {
      setIsReprocessing(false);
      
      // Add some modifications to simulate AI reprocessing
      const newContent = noteContent.replace(
        "Conservative measures have failed",
        "Conservative measures including physical therapy and NSAIDs have failed"
      );
      
      setNoteContent(newContent);
      toast({
        title: "Note reprocessed",
        description: "The AI has reprocessed your note with the latest edits.",
      });
    }, 2000);
  };
  
  const hasChanges = noteContent !== originalContent;

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2" onClick={() => window.history.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Edit Operative Note</h1>
              <p className="text-muted-foreground">
                Edit details and make corrections to your generated note.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {isLoading 
                ? "Loading note..." 
                : "Right knee arthroscopy with partial medial meniscectomy"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-[600px] bg-muted animate-pulse rounded-md"></div>
            ) : (
              <Textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                className="min-h-[600px] font-mono"
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t p-6">
            <div className="text-sm text-muted-foreground">
              {hasChanges ? "Unsaved changes" : "No changes"}
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={handleReprocess}
                disabled={isLoading || isReprocessing || !hasChanges}
              >
                {isReprocessing ? "Reprocessing..." : "Reprocess with AI"}
                <RotateCw className={`ml-2 h-4 w-4 ${isReprocessing ? "animate-spin" : ""}`} />
              </Button>
              <Button 
                onClick={handleSave}
                disabled={isLoading || isSaving || !hasChanges}
              >
                {isSaving ? "Saving..." : "Save Changes"}
                <Save className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EditNote;
