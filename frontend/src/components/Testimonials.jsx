import { useState } from "react";

// Depoimentos
const Testimonials = () => {
  const depoimentos = [
    { nome: "Maria Silva", texto: "Os cursos mudaram minha carreira!", curso: "React" },
    { nome: "João Santos", texto: "Aprendi do zero e consegui meu primeiro emprego.", curso: "Python" },
    { nome: "Ana Costa", texto: "O método é prático e direto ao ponto!", curso: "Machine Learning" },
    { nome: "Pedro Lima", texto: "Excelente didática e conteúdo atualizado!", curso: "Data Science" },
    { nome: "Carla Souza", texto: "Recomendo para todos que querem evoluir profissionalmente.", curso: "JavaScript" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const prevTestimonial = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(depoimentos.length - 2, 0) : prev - 1));
  };

  const nextTestimonial = () => {
    setStartIndex((prev) => (prev + 2 >= depoimentos.length ? 0 : prev + 1));
  };

  const visibleTestimonials = depoimentos.slice(startIndex, startIndex + 2);

  return (
    <section id="depoimentos" className="bg-gray-100 py-16 px-6 relative">
      <h3 className="text-3xl font-bold text-center mb-10">O que nossos alunos dizem</h3>
      <div className="max-w-6xl mx-auto relative flex items-center">
        {/* Setas */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-2 rounded-full hover:bg-purple-700 z-10"
        >
          &#8592;
        </button>

        {/* Depoimentos Visíveis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {visibleTestimonials.map((dep, i) => (
            <div key={i} className="bg-white shadow-lg p-6 rounded-2xl text-center">
              <p className="text-gray-700 italic mb-4">“{dep.texto}”</p>
              <h4 className="font-bold text-purple-800">{dep.nome}</h4>
              <span className="text-sm text-gray-500">Curso: {dep.curso}</span>
            </div>
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-2 rounded-full hover:bg-purple-700 z-10"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
