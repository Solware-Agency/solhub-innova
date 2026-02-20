import { LayoutDashboard, History, GitBranch, FileCheck } from "lucide-react";

const cards = [
  {
    icon: LayoutDashboard,
    title: "Visibilidad",
    desc: "Tablero operativo en tiempo real",
  },
  {
    icon: History,
    title: "Historial",
    desc: "Contexto del paciente dentro del centro",
  },
  {
    icon: GitBranch,
    title: "Trazabilidad",
    desc: "Estados y responsables por caso/muestra",
  },
  {
    icon: FileCheck,
    title: "Informes",
    desc: "Estandarización, firma y emisión sin fricción",
  },
];

const DemoSnapshot = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          El golpe: cómo se ve en vivo
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div key={i} className="glass-card p-6 glow-blue-hover group">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/10"
          >
            Ver testimonio
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSnapshot;
