CREATE DATABASE chess;
USE chess;

CREATE USER 'chess_user'@'localhost' IDENTIFIED BY 'Sptech#2024';
GRANT ALL PRIVILEGES ON chess.* TO 'chess_user'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE abertura (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    descricao TEXT
);

CREATE TABLE gm (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    descricao TEXT,
    aberturaId INT,
    CONSTRAINT fk_gm_abertura FOREIGN KEY (aberturaId) REFERENCES abertura(id)
);

CREATE TABLE estilo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    descricao TEXT,
    gmId INT,
    CONSTRAINT fk_estilo_gm FOREIGN KEY (gmId) REFERENCES gm(id)
);

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(45),
    nome VARCHAR(45),
    senha VARCHAR(45),
    estiloId INT,
    CONSTRAINT fk_usuario_estilo FOREIGN KEY (estiloId) REFERENCES estilo(id)
);

INSERT INTO abertura (nome, descricao) VALUES
('Gambito do Rei', 'Abertura romântica e explosiva, com iniciativa cedo e muita tática.'),
('Defesa Siciliana Najdorf', 'Abertura dinâmica e extremamente rica em contrajogo e ataques.'),
('Abertura Ruy López', 'Abertura clássica, profunda e muito forte em planos estratégicos.'),
('Gambito da Rainha', 'Abertura sólida e posicional, com grande controle central.'),
('Defesa Caro-Kann', 'Defesa estável e precisa, focada em estrutura e segurança.'),
('Defesa Berlim', 'Defesa técnica e fria, famosa por neutralizar a iniciativa.'),
('Defesa Índia do Rei', 'Defesa agressiva e assimétrica, ideal para complicar a posição.'),
('Defesa Siciliana', 'Abertura combativa e tática, com forte potencial ofensivo.'),
('Defesa Eslava', 'Defesa robusta, equilibrada e muito respeitada na teoria.'),
('Defesa Nimzo-Índia', 'Abertura posicional e flexível, com pressão estratégica constante.'),
('Abertura Inglesa', 'Abertura flexível, rica em manobras e planos de longo prazo.'),
('Defesa Grünfeld', 'Defesa dinâmica, moderna e com muito jogo ativo.'),
('Defesa Petroff', 'Defesa objetiva e confiável, com foco em solidez.'),
('Defesa Francesa', 'Estrutura fechada e estratégia paciente, com jogo de longo prazo.'),
('Defesa Índia da Dama', 'Defesa elegante e estratégica, com grande controle posicional.');

INSERT INTO gm (nome, descricao, aberturaId) VALUES
('Mikhail Tal', 'Letão, campeão mundial de 1960. Conhecido como o "Mago de Riga", foi um dos jogadores mais criativos e brilhantes da história, famoso por ataques devastadores e sacrifícios inesquecíveis.', 1),
('Garry Kasparov', 'Russo, campeão mundial de 1985 a 2000 e considerado por muitos o maior enxadrista da história. Dominou o ranking mundial por décadas com estilo extremamente agressivo, profundo preparo teórico e enorme capacidade de pressão.', 2),
('Magnus Carlsen', 'Norueguês, 5 vezes campeão mundial clássico, recordista do maior rating da história (2882) e frequentemente considerado o melhor jogador de todos os tempos. É universal, genial em finais e quase imbatível em pressão posicional.', 3),
('Anatoly Karpov', 'Russo, campeão mundial de 1975 a 1985. Mestre absoluto do jogo estratégico e profilático, famoso por sua precisão cirúrgica e domínio posicional refinado.', 4),
('Bobby Fischer', 'Americano, campeão mundial de 1972 e um dos maiores gênios que o xadrez já viu. Revolucionou o jogo com profundidade teórica, precisão absurda e um estilo extremamente dominante.', 5),
('Vladimir Kramnik', 'Russo, campeão mundial de 2000 a 2007, célebre por derrotar Kasparov. Conhecido por sua solidez defensiva, técnica impecável e excelente preparação estratégica.', 6),
('Hikaru Nakamura', 'Nipo-americano, 5 vezes campeão dos Estados Unidos, campeão mundial de Fischer Random e um dos maiores especialistas em blitz e rápidas da história. Extremamente tático, rápido e imprevisível.', 7),
('Judit Polgar', 'Húngara, considerada a maior enxadrista da história entre as mulheres. Conhecida por seu estilo ofensivo, coragem tática e por vencer diversos campeões mundiais.', 8),
('Viswanathan Anand', 'Indiano, 5 vezes campeão mundial e um dos jogadores mais respeitados da história. Conhecido pela velocidade de cálculo, adaptabilidade e elegância estratégica.', 9),
('Fabiano Caruana', 'Americano, ex-desafiante ao título mundial e um dos jogadores mais fortes da era moderna. Destaque por sua precisão, preparo profundo e estilo posicional muito sólido.', 10),
('Ding Liren', 'Chinês, campeão mundial e um dos maiores nomes do xadrez contemporâneo. Reconhecido por sua técnica refinada, equilíbrio e grande leitura estratégica.', 11),
('Alireza Firouzja', 'Franco-iraniano, prodígio da nova geração e um dos maiores talentos do xadrez moderno. Muito agressivo, tático e extremamente criativo.', 12),
('Wesley So', 'Filipino-americano, campeão mundial de Fischer Random e um dos jogadores mais sólidos da atualidade. Famoso por sua consistência, frieza e eficiência competitiva.', 13),
('Tigran Petrosian', 'Armênio-soviético, campeão mundial de 1963 a 1969. Lendário por sua defesa impecável, segurança e habilidade quase única de neutralizar ataques.', 14),
('Hou Yifan', 'Chinesa, múltipla campeã mundial feminina e uma das maiores jogadoras da história. Conhecida por seu estilo técnico, equilibrado e estrategicamente muito forte.', 15);

INSERT INTO estilo (nome, descricao, gmId) VALUES
('Agressivo', 'Busca ataque cedo, iniciativa e complicações táticas.', 1),
('Agressivo', 'Pressiona o adversário sem dar tempo para simplificar.', 2),
('Estrategista', 'Constrói vantagem com calma, precisão e domínio posicional.', 3),
('Estrategista', 'Joga de forma paciente, consistente e muito bem calculada.', 4),
('Estrategista', 'Universal e técnico, prefere melhor posição a riscos desnecessários.', 5),
('Fechado', 'Prioriza solidez, segurança e poucas fraquezas estruturais.', 6),
('Agressivo', 'Gosta de posições dinâmicas, táticas e com muito contrajogo.', 7),
('Agressivo', 'Joga para desestabilizar e buscar iniciativa o tempo todo.', 8),
('Estrategista', 'Valoriza estrutura, coordenação e planos de médio prazo.', 9),
('Estrategista', 'Posicional, profundo e com ótimo senso de transição para finais.', 10),
('Estrategista', 'Flexível, equilibrado e muito forte em estruturas complexas.', 11),
('Agressivo', 'Explora linhas ativas, táticas e posições de grande tensão.', 12),
('Fechado', 'Defende bem, simplifica na hora certa e minimiza riscos.', 13),
('Fechado', 'É difícil de quebrar e costuma vencer pela consistência defensiva.', 14),
('Estrategista', 'Joga com harmonia, técnica e ótimo controle do tabuleiro.', 15);

SELECT 
    e.nome AS estilo, g.nome AS gm,  a.nome AS abertura FROM estilo e
JOIN gm g ON e.gmId = g.id
JOIN abertura a ON g.aberturaId = a.id;