import { useState } from 'react';
// Cabeçalho

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { label: "CURSOS", target: "cursos" },
    { label: "DIFERENCIAIS", target: "diferenciais" },
    { label: "DEPOIMENTOS", target: "depoimentos" },
    { label: "SOBRE", target: "sobre" }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-800">UANE</div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
          <a
            key={link.label}
            href={`#${link.target}`}
            className="text-gray-600 hover:text-purple-800 transition duration-300"
          >
            {link.label}
          </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-purple-800">
            <MenuIcon />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          {navLinks.map(link => (
          <a
            key={link.label}
            href={`#${link.target}`}
            className="block px-6 py-2 text-gray-600 hover:bg-purple-100"
          >
            {link.label}
          </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;