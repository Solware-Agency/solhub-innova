const RealityHook = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
            La frase más peligrosa de la mañana
          </h2>

          <div className="glass-card mt-10 p-8 md:p-10 glow-blue">
            <p className="text-2xl font-semibold italic text-primary md:text-3xl">
              "¿Dónde está esa muestra?"
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              El caso existe. La orden existe. El paciente espera. Pero el
              tracking se pierde entre correos, PDFs y agendas.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Cuando la data está fragmentada, se vuelve{" "}
              <span className="font-semibold text-foreground">ruido</span> y el
              centro opera a ciegas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealityHook;
