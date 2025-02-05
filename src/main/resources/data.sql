CREATE TABLE IF NOT EXISTS livros (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    ano INT NOT NULL
);

REPLACE INTO livros (id, titulo, autor, ano) VALUES 
(1, 'Dom Casmurro', 'Machado de Assis', 1899),
(2, 'O Hobbit', 'J.R.R. Tolkien', 1937);
