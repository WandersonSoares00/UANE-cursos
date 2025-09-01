// Destaques

const Highlights = () => {
  const destaques = [
    { title: "Certificação Universitária", description: "Validade acadêmica e profissional para o seu currículo." },
    { title: "Curadoria de Excelência", description: "Conteúdos elaborados pelos melhores especialistas do mercado." },
    { title: "Flexibilidade", description: "Estude no seu ritmo, de onde estiver e quando quiser." },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Nossos Diferenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {destaques.map(item => (
            <div key={item.title} className="p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;