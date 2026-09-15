# sistema-agendamento-backend

Database MySQL

TABELAS

clientesCREATE TABLE clientes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(50),
	data_nascimento DATE,
	id_ultimo_agendamento INT
);

CREATE TABLE usuarios(
	id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(20) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE status_agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE agendamentos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_agendamento DATE NOT NULL,
    horario TIME NOT NULL,
    id_status INT NOT NULL,
    descricao VARCHAR(300),
    img_referencia VARCHAR(2048),

    CONSTRAINT fk_id_cliente
        FOREIGN KEY (id_cliente) 
        REFERENCES clientes(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_status_agendamentos
        FOREIGN KEY (id_status) 
        REFERENCES status_agendamentos(id)
);

CREATE TABLE status_horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO status_horarios (id, descricao) VALUES 
(1, 'Livre'),
(2, 'Ocupado'),
(3, 'Bloqueado');

CREATE TABLE horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_hora DATETIME NOT NULL,
    duracao INT NOT NULL,
    id_status INT NOT NULL DEFAULT 1,

    CONSTRAINT fk_status_horarios
        FOREIGN KEY (id_status)
        REFERENCES status_horarios(id)
);

INSERT INTO status_agendamentos (id, descricao) VALUES 
(1, 'Confirmado'),
(2, 'Pendente'),
(3, 'Cancelado');

CREATE TABLE logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_tabela VARCHAR(50) NOT NULL,
    id_registro INT NOT NULL,
    acao VARCHAR(20) NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario VARCHAR(100)
);

CREATE TABLE logs_erros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo_erro VARCHAR(50),
    mensagem_erro TEXT NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP
);