import { useState, useEffect } from "react";

// Card de Curso Individual
const CourseCard = ({ curso }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Card frontal */}
      {!flipped && (
        <>
          <img src={curso.imagem} alt={curso.nome} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-purple-700 font-semibold text-sm mb-2">
              {curso.categoria} • {curso.modalidade}
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">{curso.nome}</h3>
            <div className="text-gray-500 text-sm mt-auto">
              <span>{curso.carga_horaria} horas</span>
            </div>
          </div>
          <div className="p-6 bg-gray-50">
            <button
              onClick={() => setFlipped(true)}
              className="text-purple-800 font-semibold hover:underline"
            >
              Saiba mais
            </button>
          </div>
        </>
      )}

      {/* Card traseiro */}
      {flipped && (
        <div className="p-6 flex flex-col flex-grow bg-white">
          <h3 className="text-xl font-bold text-purple-800 mb-3">{curso.nome}</h3>
          <p className="text-gray-700 flex-grow">{curso.descricao}</p>
          <button
            onClick={() => setFlipped(false)}
            className="mt-4 text-purple-800 font-semibold hover:underline self-start"
          >
            Voltar
          </button>
        </div>
      )}
    </div>
  );
};


// Lista de Cursos
const CourseList = ({ cursos = [] }) => {
  const cursosAgrupados = cursos.reduce((acc, curso) => {
    const area = curso.area_nome || "Outros";
    if (!acc[area]) acc[area] = [];
    acc[area].push(curso);
    return acc;
  }, {});

  return (
    <section id="cursos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Nossos Cursos
        </h2>

        {Object.keys(cursosAgrupados).map((area) => (
          <div key={area} className="mb-16">
            <h3 className="text-2xl font-bold text-purple-800 mb-8 border-l-4 border-yellow-400 pl-4">
              {area}
            </h3>
            <ResponsiveCarousel cursos={cursosAgrupados[area]} />
          </div>
        ))}
      </div>
    </section>
  );
};

const ResponsiveCarousel = ({ cursos }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const updateVisible = () => {
      setVisible(window.innerWidth < 768 ? 1 : 2); // <768px = 1, >=768px = 2
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % cursos.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + cursos.length) % cursos.length);

  const slides = [];
  for (let i = 0; i < visible; i++) {
    slides.push(cursos[(index + i) % cursos.length]);
  }

  return (
    <div className="relative flex items-center">
      <button
        onClick={prev}
        className="absolute left-0 z-10 p-2 bg-purple-800 text-white rounded-full hover:bg-purple-700"
      >
        &#8592;
      </button>

      <div className="flex gap-6 overflow-hidden w-full">
        {slides.map((curso) => (
          <div
            key={curso.id}
            className={`flex-shrink-0 w-full md:w-1/2 transition-transform duration-300`}
          >
            <CourseCard curso={curso} />
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="absolute right-0 z-10 p-2 bg-purple-800 text-white rounded-full hover:bg-purple-700"
      >
        &#8594;
      </button>
    </div>
  );
};


export default CourseList;