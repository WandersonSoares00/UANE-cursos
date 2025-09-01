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
    categoria ENUM('Tecnico', 'Extensao', 'Livre', 'Curta Duracao') NOT NULL,
    carga_horaria INT NOT NULL,
    modalidade ENUM('Presencial', 'EAD', 'Hibrido') NOT NULL,
    area_id INT NOT NULL,
    FOREIGN KEY (area_id) REFERENCES areas(id)
);

INSERT INTO areas (nome) VALUES
('Bem-viver'),
('Tecnologia e Profissao'),
('Negocios');

INSERT INTO cursos (nome, descricao, imagem, categoria, carga_horaria, modalidade, area_id) VALUES
('Design Digital',
 'Explore a criacao de interfaces, experiencia do usuario (UX/UI) e comunicacao visual.',
 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
 'Extensao', 60, 'EAD', 2),

('Educacao Ambiental para um Presente Sustentavel',
 'Curso de extensao gratuito e totalmente online, com 72 horas/aula, voltado para jovens e adultos interessados em compreender e agir diante dos desafios ambientais. Oferece videoaulas, podcasts, materiais de apoio e certificacao pela Fundacao Democrito Rocha e pela Universidade Estadual do Ceara.',
 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
 'Extensao', 72, 'EAD', 1),

('Bullying: conhecer para combater',
 'Curso gratuito da UECE e FDR para capacitar educadores, pais e estudantes a identificar, prevenir e combater o bullying no ambiente escolar. Totalmente online, com 60 horas de carga horaria.',
 'https://images.unsplash.com/photo-1529070538774-1843cb3265df',
 'Extensao', 60, 'EAD', 1),

('Secretaria Escolar',
 'Capacitacao para profissionais da area administrativa escolar. Curso online, 60 horas, com conteudos sobre gestao de documentos, atendimento ao publico e organizacao de arquivos.',
 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
 'Extensao', 60, 'EAD', 2),

('Gestao Fiscal Interfederativa',
 'Capacita profissionais da area publica e privada na gestao fiscal, abordando legislacao tributaria, planejamento e controle financeiro. Curso online, 60 horas.',
 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62',
 'Extensao', 60, 'EAD', 3),

('Marketing Digital',
 'Curso para empreendedores e profissionais aprenderem estrategias de marketing digital: SEO, redes sociais, email marketing e mais. Online, 60 horas.',
 'https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'Extensao', 60, 'EAD', 3),

('Gestao de Redes Sociais Corporativas',
 'Aprenda a gerenciar perfis corporativos em redes sociais e criar conteudo estrategico.',
 'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
 'Extensao', 60, 'EAD', 2),

('Seguranca Digital e Protecao de Dados',
 'Curso introdutorio sobre seguranca digital, boas praticas e protecao de informacoes pessoais e corporativas.',
 'https://unsplash.com/pt-br/fotografias/um-monitor-de-computador-sentado-em-cima-de-uma-mesa-UiW8V3djY8A',
 'Livre', 40, 'EAD', 2),

('Produtividade e Ferramentas Digitais',
 'Aprenda a usar ferramentas de produtividade e organizacao no dia a dia profissional.',
 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
 'Livre', 35, 'Hibrido', 2),

('Marketing Digital para Iniciantes',
 'Fundamentos de marketing digital, estrategias de conteudo e analise de metricas.',
 'https://unsplash.com/pt-br/fotografias/arte-de-marketing-digital-na-superficie-de-madeira-marrom-SB0WARG16HI',
 'Extensao', 50, 'EAD', 2),

('Tecnologia no Bem-viver',
 'Como a tecnologia pode ser usada para melhorar a qualidade de vida e bem-estar pessoal.',
 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
 'Livre', 30, 'EAD', 2);
