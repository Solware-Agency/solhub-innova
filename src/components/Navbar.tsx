import { FileText, Play, CalendarDays } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Sol<span className="text-primary">Hub</span>
          </span>
          <span className="hidden sm:inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Confidencial
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-all hover:bg-white/10"
          >
            <FileText className="h-3.5 w-3.5" />
            View Deck
          </a>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-all hover:bg-white/10"
          >
            <Play className="h-3.5 w-3.5" />
            Demo 60s
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110 glow-blue-hover"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Schedule Meeting</span>
            <span className="sm:hidden">Agendar</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
