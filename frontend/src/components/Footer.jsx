// Footer

const Footer = () => (
  <footer id="sobre" className="bg-gray-800 text-white py-10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* 1. Contato */}
      <div>
        <h3 className="text-lg font-bold mb-4">Fale Conosco</h3>
        <p className="text-gray-400">WhatsApp</p>
        <p className="text-gray-400">(85) 9123-1327</p>
      </div>

      {/* 2. Redes Sociais */}
      <div>
        <h3 className="text-lg font-bold mb-4">Nos acompanhe nas redes sociais</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 1.5c1.933 0 3.5 1.567 3.5 3.5S18.933 10.5 17 10.5 13.5 8.933 13.5 7 15.067 3.5 17 3.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white" aria-label="YouTube">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-1.372-.912-7.615-.912-7.615-.912s-6.243 0-7.615.912C2.646 4.07 2 6.154 2 12s.646 7.93 2.385 8.816c1.372.912 7.615.912 7.615.912s6.243 0 7.615-.912C21.354 19.93 22 17.846 22 12s-.646-7.93-2.385-8.816zM10 15V9l5 3-5 3z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 3. Informações */}
      <div>
        <h3 className="text-lg font-bold mb-4">UANE</h3>
        <p className="text-gray-400">Transformando o futuro através da educação.</p>
      </div>

    </div>

    <div className="mt-10 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} UANE. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
