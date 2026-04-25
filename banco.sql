CREATE DATABASE chess;
USE chess;

CREATE TABLE abertura (
    idabertura INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    descricao VARCHAR(150)
);

CREATE TABLE gm (
    idgm INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    descricao VARCHAR(150),
    abertura_idabertura INT,
    CONSTRAINT fk_gm_abertura FOREIGN KEY (abertura_idabertura) REFERENCES abertura(idabertura)
);

CREATE TABLE estilo (
    idestilo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    descricao VARCHAR(150),
    gm_idgm INT,
    CONSTRAINT fk_estilo_gm FOREIGN KEY (gm_idgm) REFERENCES gm(idgm)
);

CREATE TABLE usuario (
    idusuario INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(45),
    nome VARCHAR(45),
    senha VARCHAR(45),
    estilo_idestilo INT,
    CONSTRAINT fk_usuario_estilo FOREIGN KEY (estilo_idestilo) REFERENCES estilo(idestilo)
);