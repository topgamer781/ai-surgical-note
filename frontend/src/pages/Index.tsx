
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Brain, Clock, FileText, Sparkles, Shield, Upload } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  <span className="animate-pulse-subtle">New</span> HIPAA-Compliant AI Dictation
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  AI-Powered Operative Notes in <span className="text-primary">Seconds</span>
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Transform your surgical dictation workflow. Upload your past notes, and our AI creates consistent, personalized operative dictations that match your style.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      See Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 [mask-image:radial-gradient(transparent_65%,white)] rounded-xl"></div>
                <div className="glass-card rounded-xl overflow-hidden shadow-xl">
                  <div className="p-4 border-b bg-secondary/30">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="space-y-4">
                      <div className="rounded bg-secondary/50 p-3 text-sm text-left">
                        <div className="text-primary font-medium mb-1">Input</div>
                        <p>• Right knee arthroscopy with partial medial meniscectomy</p>
                        <p>• Patient: 45-year-old male</p>
                        <p>• Anesthesia: General</p>
                      </div>
                      <div className="flex justify-center my-2">
                        <div className="bg-primary/10 rounded-full p-2">
                          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                        </div>
                      </div>
                      <div className="rounded bg-secondary/50 p-3 text-sm text-left">
                        <div className="text-primary font-medium mb-1">Generated Note</div>
                        <p className="font-medium">PREOPERATIVE DIAGNOSIS:</p>
                        <p>Right medial meniscus tear</p>
                        <p className="font-medium mt-2">POSTOPERATIVE DIAGNOSIS:</p>
                        <p>Right medial meniscus tear, confirmed</p>
                        <p className="font-medium mt-2">PROCEDURE PERFORMED:</p>
                        <p>Right knee arthroscopy with partial medial meniscectomy</p>
                        <div className="bg-secondary/30 p-2 rounded mt-2 text-xs italic">
                          Complete note generated - 450 words
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                Spend Less Time on Documentation
              </h2>
              <p className="text-muted-foreground mt-4">
                MedNoteScribe helps you focus on what matters most - patient care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">AI-Powered Generation</h3>
                <p className="mt-2 text-muted-foreground">
                  Advanced language models learn your dictation style and apply it to new cases with remarkable accuracy.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Multi-Format Input</h3>
                <p className="mt-2 text-muted-foreground">
                  Upload existing notes as text, PDFs, or even voice recordings to build your personalized template library.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Time-Saving Workflow</h3>
                <p className="mt-2 text-muted-foreground">
                  Generate complete operative notes in seconds instead of spending hours on manual dictation.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Consistent Formatting</h3>
                <p className="mt-2 text-muted-foreground">
                  Every note follows your preferred structure and format, ensuring documentation consistency.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Continuous Learning</h3>
                <p className="mt-2 text-muted-foreground">
                  The system learns from your edits and corrections, becoming more personalized with each use.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">HIPAA Compliant</h3>
                <p className="mt-2 text-muted-foreground">
                  Enterprise-grade security with full encryption, access controls, and audit logging built in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="medical-gradient rounded-xl p-8 md:p-12 shadow-lg text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Ready to Transform Your Documentation Workflow?
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  Join leading medical professionals who save hours every week with MedNoteScribe.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/signup">
                    <Button variant="secondary" size="lg">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                      Schedule Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                Trusted by Medical Professionals
              </h2>
              <p className="text-muted-foreground mt-4">
                Hear from surgeons who have transformed their documentation process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">JS</span>
                  </div>
                  <div>
                    <p className="font-medium">Dr. James Smith</p>
                    <p className="text-sm text-muted-foreground">Orthopedic Surgeon</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "MedNoteScribe has cut my documentation time by 75%. The notes are consistently high quality and match my dictation style perfectly."
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">AR</span>
                  </div>
                  <div>
                    <p className="font-medium">Dr. Amanda Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Neurosurgeon</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "I was skeptical at first, but now I can't imagine going back to traditional dictation. The AI understands the complexities of neurosurgical procedures remarkably well."
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">MT</span>
                  </div>
                  <div>
                    <p className="font-medium">Dr. Michael Thompson</p>
                    <p className="text-sm text-muted-foreground">Cardiothoracic Surgeon</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "The consistency in my operative notes has improved significantly. My team appreciates the standardized format, making it easier to extract key information."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
