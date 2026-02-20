const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 bg-gradient-to-tr from-blue-900 via-blue-950 to-blue-950">
      {/* Background gradient
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" /> */}

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl animate-fade-in-up text-balance">
          SolHub convierte{" "}
          <span className="text-primary">caos en control</span> para centros de
          salud y laboratorios.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Toda la operación en un solo flujo: pacientes, casos, informes y
          cobros, con roles, auditoría y visibilidad operativa en tiempo real.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <span className="chip">Trazabilidad</span>
          <span className="chip">Control operativo</span>
          <span className="chip">Continuidad clínica</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
