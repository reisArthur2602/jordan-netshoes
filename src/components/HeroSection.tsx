import Container from "./Container";

const HeroSection = () => {
  return (
    <section className="bg-hero-section flex h-[21.875rem] w-full items-center bg-cover bg-center lg:bg-top px-6 text-dark-20">
      <Container>
        <div className="w-full max-w-[34.8125rem] space-y-10">
          <img src="/logo.png" className="h-6 w-[8.875rem]" />
          <div className="space-y-3 md:space-y-5">
            <h1 className="text-2xl font-medium md:text-[2rem]">
              A melhor loja de Jordan
            </h1>
            <p className="sm:text-lg md:text-2xl">
              O tênis Jordan é fruto de uma velha e forte parceria entre a Nike
              e o jogador Michael Jordan.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
