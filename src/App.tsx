import Container from "./components/Container";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Container classname="flex flex-col gap-10 md:gap-[4.5rem] py-14 md:px-20">
        <div className="w-full max-w-[37.0625rem] space-y-3 self-center text-center md:space-y-6">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-[2rem]">
            Os melhores em só lugar
          </h2>
          <p className="font-sm sm:text-base md:text-2xl">
            A marca Jordan na JordanShoes é a escolha certa para os amantes de
            sneakers que buscam estilo e conforto.
          </p>
        </div>
      </Container>
    </>
  );
};

export default App;
