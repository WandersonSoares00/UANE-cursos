// Banner Principal
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
         7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 
         0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const Banner = () => (
  <section className="relative bg-purple-800 text-white h-[60vh] flex items-center justify-center text-center">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0')",
      }}
    ></div>

    <div className="relative z-10 p-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Universidade Aberta do Nordeste
      </h1>

      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Cursos de extensão e capacitação para transformar o seu futuro
        profissional.
      </p>

      <a
        href="#cursos"
        className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition duration-300 inline-flex items-center"
      >
        Conheça os Cursos
        <ChevronRightIcon />
      </a>
    </div>
  </section>
);

export default Banner;
