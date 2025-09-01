import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CourseList from './components/CourseList';
import Banner from './components/Banner';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


// --- Componente Principal da Aplicação ---
function App() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/cursos');
        //const response = await axios.get('http://localhost:8000/api/cursos', {
        //  responseType: 'json',
        //  responseEncoding: 'utf8', // não obrigatório, mas garante
        //});
        setCursos(response.data);
      } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        setError('Não foi possível carregar os cursos. Verifique se o backend está a correr.');
      } finally {
        setLoading(false);
      }
    };
    fetchCursos();
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Banner />
        {loading && <p className="text-center py-20">A carregar cursos...</p>}
        {error && <p className="text-center py-20 text-red-500">{error}</p>}
        {!loading && !error && <CourseList cursos={cursos} />}
        <Highlights />
        <Testimonials />
      </main>
      <Footer id="sobre" />
    </div>
  );
}

export default App;
