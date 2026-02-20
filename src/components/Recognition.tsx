import { Trophy } from "lucide-react";

const Recognition = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          Reconocimientos
        </h2>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="glass-card-strong p-8 md:p-10 glow-blue">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Hackathon IESA
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  Instituto de Estudios Superiores de Administración
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Reconocidos por nuestra innovación en salud digital, elevando la
                  calidad y eficiencia de clínicas y laboratorios en Venezuela.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-3xl font-extrabold text-foreground">1°</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Lugar
                </p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-3xl font-extrabold text-primary">2025</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Año
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
