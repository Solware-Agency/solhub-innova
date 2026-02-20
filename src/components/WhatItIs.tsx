import { Workflow, ShieldCheck, Settings } from "lucide-react";

const bullets = [
  {
    icon: Workflow,
    text: "Pacientes + casos + informes + cobros en un solo flujo",
  },
  {
    icon: ShieldCheck,
    text: "Roles, auditoría y métricas en vivo",
  },
  {
    icon: Settings,
    text: "Personalizable por centro sin romper el sistema",
  },
];

const WhatItIs = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
            Qué hacemos
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            SolHub unifica y estandariza el flujo clínico, asegurando
            trazabilidad por roles y control operativo.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {bullets.map((b, i) => (
            <div key={i} className="glass-card p-6 text-center glow-blue-hover">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-6 w-6" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatItIs;
