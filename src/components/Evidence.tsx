import { TrendingDown, Clock, Zap, Building2, FileText, Users } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "2:00 → 0:30",
    label: "por tarea (−75%)",
  },
  {
    icon: Clock,
    value: "12–15 → 6–9 min",
    label: "por flujo completo",
  },
  {
    icon: Zap,
    value: "195 hrs/mes",
    label: "recuperadas por centro",
  },
];

const traction = [
  { icon: Building2, value: "4", label: "centros activos" },
  { icon: FileText, value: "+60.000", label: "informes procesados" },
  { icon: Users, value: "+50.000", label: "registros de pacientes" },
];

const Evidence = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
            No es teoría. Ya está en producción.
          </h2>
          <p className="mt-2 text-muted-foreground">
            Validado en centros reales.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {metrics.map((m, i) => (
            <div key={i} className="metric-card">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <m.icon className="h-6 w-6" />
              </div>
              <p className="text-2xl font-bold text-foreground md:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-6 md:gap-10">
          {traction.map((t, i) => (
            <div key={i} className="flex items-center gap-3 text-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <t.icon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-foreground">{t.value}</p>
                <p className="text-xs text-muted-foreground">{t.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evidence;
