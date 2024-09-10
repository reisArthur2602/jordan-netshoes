const HeroSection = () => {
  return (
    <section className="bg-hero-section flex h-[21.875rem] w-full items-center bg-cover bg-center px-6 text-dark-20">
      <div className="space-y-10">
        <img src="/logo.png" className="h-6 w-[8.875rem]" />
        <div className="space-y-3">
          <h1 className="text-2xl font-medium">A melhor loja de Jordan</h1>
          <p>
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
