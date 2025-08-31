CREATE DATABASE IF NOT EXISTS uane_cursos;
USE uane_cursos;

CREATE TABLE IF NOT EXISTS areas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    categoria ENUM('Técnico', 'Extensão', 'Livre', 'Curta Duração') NOT NULL,
    carga_horaria INT NOT NULL,
    modalidade ENUM('Presencial', 'EAD', 'Híbrido') NOT NULL,
    area_id INT NOT NULL,
    FOREIGN KEY (area_id) REFERENCES areas(id)
);

INSERT INTO areas (nome) VALUES
('Bem-viver'),
('Tecnologia e Profissão'),
('Negócios');

INSERT INTO cursos (nome, descricao, imagem, categoria, carga_horaria, modalidade, area_id) VALUES
('Design Digital',
 'Explore a criação de interfaces, experiência do usuário (UX/UI) e comunicação visual.',
 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
 'Extensão', 60, 'EAD', 2),

('Educação Ambiental para um Presente Sustentável',
 'Curso de extensão gratuito e totalmente online, com 72 horas/aula, voltado para jovens e adultos interessados em compreender e agir diante dos desafios ambientais. Oferece videoaulas, podcasts, materiais de apoio e certificação pela Fundação Demócrito Rocha e pela Universidade Estadual do Ceará.',
 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
 'Extensão', 72, 'EAD', 1),

('Bullying: conhecer para combater',
 'Curso gratuito da UECE e FDR para capacitar educadores, pais e estudantes a identificar, prevenir e combater o bullying no ambiente escolar. Totalmente online, com 60 horas de carga horária.',
 'https://images.unsplash.com/photo-1529070538774-1843cb3265df',
 'Extensão', 60, 'EAD', 1),

('Secretaria Escolar',
 'Capacitação para profissionais da área administrativa escolar. Curso online, 60 horas, com conteúdos sobre gestão de documentos, atendimento ao público e organização de arquivos.',
 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
 'Extensão', 60, 'EAD', 2),

('Gestão Fiscal Interfederativa',
 'Capacita profissionais da área pública e privada na gestão fiscal, abordando legislação tributária, planejamento e controle financeiro. Curso online, 60 horas.',
 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62',
 'Extensão', 60, 'EAD', 3),

('Marketing Digital',
 'Curso para empreendedores e profissionais aprenderem estratégias de marketing digital: SEO, redes sociais, email marketing e mais. Online, 60 horas.',
 'https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'Extensão', 60, 'EAD', 3);
