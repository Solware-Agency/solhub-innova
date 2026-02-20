import { useState, useRef, useEffect } from "react";
import { Play, CalendarDays } from "lucide-react";
import { SolHubIcon } from "./icons/SolHubIcon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DEMO_VIDEO_URL =
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/DemoSolHub.mp4";

const Navbar = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!demoOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [demoOpen]);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <SolHubIcon className="h-8 w-8" />
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-all hover:bg-white/10 cursor-pointer"
          >
            <Play className="h-3.5 w-3.5" />
            Demo
          </button>
          <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
            <DialogContent className="max-w-[95vw] sm:max-w-3xl p-0 gap-0 overflow-hidden border-border/50 bg-background/95 backdrop-blur">
              <DialogHeader className="p-4 pb-0">
                <DialogTitle className="text-center sm:text-left">
                  Demo SolHub
                </DialogTitle>
              </DialogHeader>
              <div className="relative w-full aspect-video p-2 sm:p-4">
                <video
                  ref={videoRef}
                  src={DEMO_VIDEO_URL}
                  controls
                  preload="auto"
                  className="w-full h-full object-contain"
                  playsInline
                />
              </div>
            </DialogContent>
          </Dialog>
          <a
            href="https://calendar.app.google/EYruMbWpJwJ82gHr6"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110 glow-blue-hover"
            target="_blank"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            <span className="">Agendar Reunión</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
