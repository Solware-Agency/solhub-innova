import { ArrowRight, Mail, Phone, Globe } from "lucide-react";

const VisionClose = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
            Lo próximo
          </h2>

          <div className="glass-card mt-10 p-8 md:p-10 glow-blue">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Hoy les mostramos el control del laboratorio.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Lo próximo es conectar todo el ecosistema:{" "}
              <span className="font-semibold text-foreground">
                pacientes, médicos, clínicas, farmacias, proveedores y seguros.
              </span>
            </p>

            <div className="mx-auto mt-8 flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-primary animate-pulse-glow" />
            </div>
          </div>

          {/* Footer signature */}
          <div className="mt-16 space-y-4">
            <p className="text-base font-semibold text-foreground">
              Jesús Freites · Eugenio Andreone
            </p>
            <p className="text-sm font-medium text-primary">Solhub</p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:ventas@solware.agency" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Mail className="h-3.5 w-3.5" /> ventas@solware.agency
              </a>
              <a href="tel:+584129974533" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Phone className="h-3.5 w-3.5" /> +58 412 997 4533
              </a>
              <a href="https://www.solware.agency" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Globe className="h-3.5 w-3.5" /> solware.agency
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground/50">
              © {new Date().getFullYear()} Solware. Documento confidencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionClose;
