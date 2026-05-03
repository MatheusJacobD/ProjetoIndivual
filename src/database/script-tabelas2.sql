CREATE DATABASE chess;
USE chess;

CREATE USER 'chess_user'@'localhost' IDENTIFIED BY 'Sptech#2024';
GRANT ALL PRIVILEGES ON chess.* TO 'chess_user'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE estilo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    descricao TEXT
);

CREATE TABLE abertura (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    descricao TEXT,
    estiloId INT,
    CONSTRAINT fk_abertura_estilo FOREIGN KEY (estiloId) REFERENCES estilo(id)
);

CREATE TABLE gm (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    descricao TEXT
);

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(45),
    nome VARCHAR(45),
    senha VARCHAR(45),
    estiloId INT,
    gmId INT,
    aberturaId int,
    CONSTRAINT fk_usuario_estilo FOREIGN KEY (estiloId) REFERENCES estilo(id),
    CONSTRAINT fk_usuario_gm FOREIGN KEY (gmId) REFERENCES gm(id),
	CONSTRAINT fk_usuario_abertura FOREIGN KEY (aberturaId) REFERENCES abertura(id)
);
select * from usuario;
INSERT INTO estilo (nome, descricao) VALUES
('Agressivo', 'Busca ataque cedo, iniciativa e complicações táticas.'),
('Estrategista', 'Constrói vantagem com calma, precisão e domínio posicional.'),
('Fechado', 'Prioriza solidez, segurança e poucas fraquezas estruturais.');

INSERT INTO abertura (nome, descricao, estiloId) VALUES
('Gambito do Rei', 'Abertura romântica e explosiva, focada em iniciativa imediata, ataques rápidos ao rei e sacrifícios agressivos. Ideal para jogadores que gostam de pressão constante e partidas intensas.', 1),
('Defesa Siciliana Najdorf', 'Abertura extremamente dinâmica e complexa, oferecendo fortes chances de contra-ataque e posições táticas ricas. Muito utilizada por jogadores agressivos e criativos.', 1),
('Defesa Índia do Rei', 'Defesa agressiva e assimétrica, perfeita para criar desequilíbrios e buscar ataques diretos no rei adversário. Excelente para quem prefere partidas combativas.', 1),
('Defesa Siciliana', 'Abertura combativa e tática, conhecida por gerar posições abertas e oportunidades ofensivas para ambos os lados. Muito popular entre jogadores que gostam de iniciativa.', 1),
('Defesa Grünfeld', 'Defesa moderna e ativa, baseada em pressão dinâmica sobre o centro e jogo de peças agressivo. Ideal para quem prefere posições complexas e ativas.', 1),

('Abertura Ruy López', 'Abertura clássica e estratégica, famosa por seus planos profundos e desenvolvimento harmonioso das peças. Excelente para jogadores posicionais e pacientes.', 2),
('Gambito da Rainha', 'Abertura sólida e posicional, baseada em controle central e desenvolvimento seguro. Muito utilizada em partidas estratégicas de alto nível.', 2),
('Defesa Nimzo-Índia', 'Abertura flexível e estratégica, que combina pressão posicional com possibilidades táticas. Ótima para jogadores que gostam de controle e adaptação.', 2),
('Abertura Inglesa', 'Abertura flexível e sofisticada, rica em manobras e planos de longo prazo. Ideal para quem prefere construir vantagem de forma gradual.', 2),
('Defesa Índia da Dama', 'Defesa elegante e estratégica, focada em desenvolvimento seguro e controle posicional. Muito eficiente para jogadores pacientes e calculistas.', 2),

('Defesa Caro-Kann', 'Defesa extremamente sólida e confiável, focada em estruturas resistentes e segurança do rei. Excelente para jogadores técnicos e cautelosos.', 3),
('Defesa Berlim', 'Defesa técnica e fria, famosa por neutralizar rapidamente iniciativas agressivas e levar a posições equilibradas e estratégicas.', 3),
('Defesa Eslava', 'Defesa robusta e equilibrada, conhecida por sua estabilidade estrutural e grande confiabilidade em partidas longas.', 3),
('Defesa Petroff', 'Defesa objetiva e segura, baseada em simplicidade, precisão e redução de riscos. Ideal para jogadores sólidos e consistentes.', 3),
('Defesa Francesa', 'Estrutura fechada e estratégica, focada em paciência, planejamento e contra-ataques graduais ao longo da partida.', 3);

select a.nome, e.nome from estilo e
join abertura a on e.id = a.estiloId;

INSERT INTO gm (nome, descricao) VALUES
('Mikhail Tal', 'Letão, campeão mundial de 1960. Conhecido como o "Mago de Riga", foi um dos jogadores mais criativos e brilhantes da história, famoso por ataques devastadores e sacrifícios inesquecíveis.'),
('Garry Kasparov', 'Russo, campeão mundial de 1985 a 2000 e considerado por muitos o maior enxadrista da história. Dominou o ranking mundial por décadas com estilo extremamente agressivo, profundo preparo teórico e enorme capacidade de pressão.'),
('Magnus Carlsen', 'Norueguês, 5 vezes campeão mundial clássico, recordista do maior rating da história (2882) e frequentemente considerado o melhor jogador de todos os tempos. É universal, genial em finais e quase imbatível em pressão posicional.'),
('Anatoly Karpov', 'Russo, campeão mundial de 1975 a 1985. Mestre absoluto do jogo estratégico e profilático, famoso por sua precisão cirúrgica e domínio posicional refinado.'),
('Bobby Fischer', 'Americano, campeão mundial de 1972 e um dos maiores gênios que o xadrez já viu. Revolucionou o jogo com profundidade teórica, precisão absurda e um estilo extremamente dominante.'),
('Vladimir Kramnik', 'Russo, campeão mundial de 2000 a 2007, célebre por derrotar Kasparov. Conhecido por sua solidez defensiva, técnica impecável e excelente preparação estratégica.'),
('Hikaru Nakamura', 'Nipo-americano, 5 vezes campeão dos Estados Unidos, campeão mundial de Fischer Random e um dos maiores especialistas em blitz e rápidas da história. Extremamente tático, rápido e imprevisível.'),
('Judit Polgar', 'Húngara, considerada a maior enxadrista da história entre as mulheres. Conhecida por seu estilo ofensivo, coragem tática e por vencer diversos campeões mundiais.'),
('Viswanathan Anand', 'Indiano, 5 vezes campeão mundial e um dos jogadores mais respeitados da história. Conhecido pela velocidade de cálculo, adaptabilidade e elegância estratégica.'),
('Fabiano Caruana', 'Americano, ex-desafiante ao título mundial e um dos jogadores mais fortes da era moderna. Destaque por sua precisão, preparo profundo e estilo posicional muito sólido.'),
('Ding Liren', 'Chinês, campeão mundial e um dos maiores nomes do xadrez contemporâneo. Reconhecido por sua técnica refinada, equilíbrio e grande leitura estratégica.'),
('Alireza Firouzja', 'Franco-iraniano, prodígio da nova geração e um dos maiores talentos do xadrez moderno. Muito agressivo, tático e extremamente criativo.'),
('Wesley So', 'Filipino-americano, campeão mundial de Fischer Random e um dos jogadores mais sólidos da atualidade. Famoso por sua consistência, frieza e eficiência competitiva.'),
('Tigran Petrosian', 'Armênio-soviético, campeão mundial de 1963 a 1969. Lendário por sua defesa impecável, segurança e habilidade quase única de neutralizar ataques.'),
('Hou Yifan', 'Chinesa, múltipla campeã mundial feminina e uma das maiores jogadoras da história. Conhecida por seu estilo técnico, equilibrado e estrategicamente muito forte.');

-- select para dash
-- qtd de usuarios, estilo, qtd de cada estilo, gm, qtd de cada gm, abertura, qtd de cada abertura, % de usuarios que completaram o quest (usuario pode logar e nao responder) e os usuários que responderam (id, nome e estilo)

SELECT COUNT(*) AS totalUsuarios
FROM usuario;

SELECT COUNT(*) AS usuariosResponderam
FROM usuario
WHERE estiloId IS NOT NULL;

SELECT 
    COUNT(*) AS totalUsuarios,
    COUNT(estiloId) AS usuariosResponderam
FROM usuario;

SELECT COUNT(*) AS usuariosNaoResponderam
FROM usuario
WHERE estiloId IS NULL;

SELECT 
    e.nome AS estilo,
    COUNT(u.id) AS quantidade
FROM estilo e
LEFT JOIN usuario u 
    ON u.estiloId = e.id
GROUP BY e.id, e.nome
ORDER BY quantidade DESC;

SELECT 
    g.nome AS gm,
    COUNT(u.id) AS quantidade
FROM gm g
LEFT JOIN usuario u 
    ON u.gmId = g.id
GROUP BY g.id, g.nome
ORDER BY quantidade DESC;

SELECT 
    a.nome AS abertura,
    COUNT(u.id) AS quantidade
FROM abertura a
LEFT JOIN usuario u 
    ON u.aberturaId = a.id
GROUP BY a.id, a.nome
ORDER BY quantidade DESC;

SELECT 
    u.id,
    u.nome,
    e.nome AS estilo,
    g.nome AS gm,
    a.nome AS abertura
FROM usuario u
JOIN estilo e 
    ON u.estiloId = e.id
JOIN gm g 
    ON u.gmId = g.id
JOIN abertura a 
    ON u.aberturaId = a.id
ORDER BY u.nome;

SELECT 
    e.nome AS estiloMaisComum,
    COUNT(u.id) AS quantidade
FROM estilo e
JOIN usuario u 
    ON u.estiloId = e.id
GROUP BY e.id, e.nome
ORDER BY quantidade DESC
LIMIT 1;

SELECT 
    g.nome AS gmMaisRecebido,
    COUNT(u.id) AS quantidade
FROM gm g
JOIN usuario u 
    ON u.gmId = g.id
GROUP BY g.id, g.nome
ORDER BY quantidade DESC
LIMIT 1;

SELECT 
    a.nome AS aberturaMaisRecebida,
    COUNT(u.id) AS quantidade
FROM abertura a
JOIN usuario u 
    ON u.aberturaId = a.id
GROUP BY a.id, a.nome
ORDER BY quantidade DESC
LIMIT 1;