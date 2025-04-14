
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, Mic, FileImage, Check, Loader2 } from "lucide-react";

const UploadDictation = () => {
  const [uploadType, setUploadType] = useState("text");
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Dictation uploaded successfully",
        description: "Your template has been added to your library.",
      });
      // Reset form
      setSelectedFile(null);
      e.currentTarget.reset();
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Upload Dictation Template</h1>
          <p className="text-muted-foreground">
            Add past operative notes to build your personalized template library.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload Method</CardTitle>
            <CardDescription>
              Choose how you want to add your previous dictation to the system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              defaultValue="text" 
              value={uploadType}
              onValueChange={setUploadType}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className={`border rounded-lg p-4 ${uploadType === "text" ? "border-primary bg-primary/5" : ""}`}>
                <RadioGroupItem value="text" id="text" className="sr-only" />
                <Label htmlFor="text" className="flex items-center gap-2 cursor-pointer">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Text Input</div>
                    <div className="text-sm text-muted-foreground">
                      Paste or type your operative note
                    </div>
                  </div>
                  {uploadType === "text" && (
                    <Check className="h-5 w-5 text-primary ml-auto" />
                  )}
                </Label>
              </div>
              
              <div className={`border rounded-lg p-4 ${uploadType === "file" ? "border-primary bg-primary/5" : ""}`}>
                <RadioGroupItem value="file" id="file" className="sr-only" />
                <Label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
                  <Upload className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">File Upload</div>
                    <div className="text-sm text-muted-foreground">
                      Upload a document (PDF, DOCX)
                    </div>
                  </div>
                  {uploadType === "file" && (
                    <Check className="h-5 w-5 text-primary ml-auto" />
                  )}
                </Label>
              </div>
              
              <div className={`border rounded-lg p-4 ${uploadType === "audio" ? "border-primary bg-primary/5" : ""}`}>
                <RadioGroupItem value="audio" id="audio" className="sr-only" />
                <Label htmlFor="audio" className="flex items-center gap-2 cursor-pointer">
                  <Mic className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Audio Recording</div>
                    <div className="text-sm text-muted-foreground">
                      Upload an audio dictation (MP3, WAV)
                    </div>
                  </div>
                  {uploadType === "audio" && (
                    <Check className="h-5 w-5 text-primary ml-auto" />
                  )}
                </Label>
              </div>
              
              <div className={`border rounded-lg p-4 ${uploadType === "image" ? "border-primary bg-primary/5" : ""}`}>
                <RadioGroupItem value="image" id="image" className="sr-only" />
                <Label htmlFor="image" className="flex items-center gap-2 cursor-pointer">
                  <FileImage className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Image Scan</div>
                    <div className="text-sm text-muted-foreground">
                      Upload a scanned document (JPG, PNG)
                    </div>
                  </div>
                  {uploadType === "image" && (
                    <Check className="h-5 w-5 text-primary ml-auto" />
                  )}
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Dictation Details</CardTitle>
            <CardDescription>
              Provide information about this dictation template.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="procedure-type">Procedure Type</Label>
                  <Select required>
                    <SelectTrigger id="procedure-type">
                      <SelectValue placeholder="Select procedure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="total-knee-arthroplasty">Total Knee Arthroplasty</SelectItem>
                      <SelectItem value="laparoscopic-cholecystectomy">Laparoscopic Cholecystectomy</SelectItem>
                      <SelectItem value="appendectomy">Appendectomy</SelectItem>
                      <SelectItem value="carpal-tunnel-release">Carpal Tunnel Release</SelectItem>
                      <SelectItem value="hernia-repair">Hernia Repair</SelectItem>
                      <SelectItem value="other">Other (specify)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialty">Specialty</Label>
                  <Select required>
                    <SelectTrigger id="specialty">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="general-surgery">General Surgery</SelectItem>
                      <SelectItem value="neurosurgery">Neurosurgery</SelectItem>
                      <SelectItem value="cardiothoracic">Cardiothoracic</SelectItem>
                      <SelectItem value="vascular">Vascular</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="template-name">Template Name</Label>
                <Input id="template-name" placeholder="Standard Right TKA" required />
              </div>

              {uploadType === "text" ? (
                <div className="space-y-2">
                  <Label htmlFor="dictation-text">Dictation Text</Label>
                  <Textarea
                    id="dictation-text"
                    placeholder="Paste your operative note here..."
                    className="min-h-[300px]"
                    required
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <Label htmlFor="file-upload">Upload {uploadType === "file" ? "Document" : uploadType === "audio" ? "Audio" : "Image"}</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your {uploadType === "file" ? "document" : uploadType === "audio" ? "audio file" : "image"} here, or click to browse
                    </p>
                    <Input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept={
                        uploadType === "file" 
                          ? ".pdf,.docx,.doc,.txt" 
                          : uploadType === "audio"
                            ? ".mp3,.wav,.m4a"
                            : ".jpg,.jpeg,.png,.tiff"
                      }
                      onChange={handleFileChange}
                    />
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => document.getElementById("file-upload")?.click()}
                    >
                      Browse Files
                    </Button>
                    {selectedFile && (
                      <div className="mt-4 text-sm">
                        Selected: <span className="font-medium">{selectedFile.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit" disabled={isUploading}>
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Dictation
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UploadDictation;
