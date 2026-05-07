gms = {
    'Mikhail Tal': 0,
    'Garry Kasparov': 0,
    'Magnus Carlsen': 0,
    'Anatoly Karpov': 0,
    'Bobby Fischer': 0,
    'Vladimir Kramnik': 0,
    'Hikaru Nakamura': 0,
    'Judit Polgar': 0,
    'Viswanathan Anand': 0,
    'Fabiano Caruana': 0,
    'Ding Liren': 0,
    'Alireza Firouzja': 0,
    'Wesley So': 0,
    'Tigran Petrosian': 0,
    'Hou Yifan': 0
}

const pesosPergunta = [
    1,
    2,
    2,
    1,
    3,
    2,
    2,
    3,
    2,
    1,
    1,
    2,
    2,
    3,
    2,
    3
];

const pesoGm = {
    'Mikhail Tal': 1.15,
    'Garry Kasparov': 0.9,
    'Magnus Carlsen': 0.75,
    'Anatoly Karpov': 1.1,
    'Bobby Fischer': 1,
    'Vladimir Kramnik': 1.05,
    'Hikaru Nakamura': 1,
    'Judit Polgar': 1.1,
    'Viswanathan Anand': 1,
    'Fabiano Caruana': 1,
    'Ding Liren': 1.05,
    'Alireza Firouzja': 1,
    'Wesley So': 1.1,
    'Tigran Petrosian': 1.15,
    'Hou Yifan': 1.2
};

estilo = {
    'agressivo': 0,
    'fechado': 0,
    'estrategico': 0
}

const perguntas = {
    'No início da partida, você prefere:': [
        'buscar ataque rapidamente',
        'desenvolver as peças com calma',
        'fortalecer sua defesa antes de atacar',
        'adaptar sua abertura ao adversário'
    ],

    'Quando encontra uma oportunidade tática, você costuma:': [
        'sacrificar peças sem medo',
        'calcular todas as variantes antes',
        'evitar riscos desnecessários',
        'testar ideias inesperadas'
    ],

    'Como você gosta de organizar suas peças?': [
        'de forma espalhada, explorando pontos fracos do oponente.',
        'de forma equilibrada, equilibrando ataque e defesa.',
        'de forma sólida, focando totalmente na defesa.',
        'de forma dinâmica, se adaptando ao jogo do oponente.'
    ],

    'Ao jogar contra alguém mais experiente, você prefere:': [
        'pressionar desde o começo',
        'jogar de forma precisa',
        'segurar a posição e esperar erros',
        'mudar o estilo durante a partida'
    ],

    'Qual aspecto do xadrez você mais valoriza?': [
        'ataque ao rei',
        'planejamento estratégico',
        'segurança das peças',
        'criatividade'
    ],

    'Quando está em vantagem, você geralmente:': [
        'parte para finalizar rápido',
        'converte a vantagem com técnica',
        'simplifica para evitar riscos',
        'mantém pressão constante'
    ],

    'Quando está em desvantagem, você tende a:': [
        'buscar complicações táticas',
        'procurar recursos estratégicos',
        'defender pacientemente',
        'mudar completamente o plano'
    ],

    'Qual abertura mais combina com você?': [
        'gambitos agressivos',
        'aberturas clássicas',
        'sistemas sólidos',
        'linhas flexíveis'
    ],

    'No meio-jogo, você prefere:': [
        'iniciativa e ataque',
        'controle posicional',
        'estrutura sólida',
        'improvisar conforme a posição'
    ],

    'Em finais, você costuma:': [
        'forçar chances rapidamente',
        'calcular com precisão',
        'jogar de forma segura',
        'buscar ideias diferentes'
    ],

    'O que mais te incomoda em uma partida?': [
        'jogo lento',
        'erros estratégicos',
        'posições arriscadas',
        'posições previsíveis'
    ],

    'Quando vê um sacrifício possível, você:': [
        'faz imediatamente',
        'calcula profundamente',
        'prefere manter material',
        'decide conforme a posição'
    ],

    'Contra ataques fortes do adversário, você:': [
        'contra-ataca',
        'procura a melhor defesa',
        'fecha completamente a posição',
        'adapta o plano rapidamente'
    ],

    'Qual frase mais combina com seu estilo?': [
        'o ataque resolve tudo',
        'precisão vence partidas',
        'defesa sólida é essencial',
        'xadrez é adaptação'
    ],

    'Em partidas, você prefere vencer:': [
        'com jogadas brilhantes',
        'com consistência estratégica',
        'com poucos erros',
        'surpreendendo adversários'
    ],

    'Qual característica define melhor seu xadrez?': [
        'agressividade',
        'estratégia',
        'solidez',
        'versatilidade'
    ]
}

const resultadoPerguntas = [
    [
        ['agressivo', 'Hikaru Nakamura'],
        ['estrategico', 'Bobby Fischer'],
        ['fechado', 'Vladimir Kramnik'],
        ['estrategico', 'Viswanathan Anand']
    ],

    [
        ['agressivo', 'Mikhail Tal'],
        ['estrategico', 'Fabiano Caruana'],
        ['fechado', 'Tigran Petrosian'],
        ['agressivo', 'Garry Kasparov']
    ],

    [
        ['agressivo', 'Judit Polgar'],
        ['estrategico', 'Ding Liren'],
        ['fechado', 'Wesley So'],
        ['fechado', 'Hou Yifan']
    ],

    [
        ['agressivo', 'Alireza Firouzja'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Anatoly Karpov'],
        ['estrategico', 'Fabiano Caruana']
    ],

    [
        ['agressivo', 'Garry Kasparov'],
        ['estrategico', 'Viswanathan Anand'],
        ['fechado', 'Vladimir Kramnik'],
        ['agressivo', 'Hikaru Nakamura']
    ],

    [
        ['agressivo', 'Judit Polgar'],
        ['estrategico', 'Ding Liren'],
        ['fechado', 'Tigran Petrosian'],
        ['fechado', 'Bobby Fischer']
    ],

    [
        ['agressivo', 'Mikhail Tal'],
        ['estrategico', 'Fabiano Caruana'],
        ['fechado', 'Wesley So'],
        ['fechado', 'Hou Yifan']
    ],

    [
        ['agressivo', 'Alireza Firouzja'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Anatoly Karpov'],
        ['estrategico', 'Viswanathan Anand']
    ],

    [
        ['agressivo', 'Garry Kasparov'],
        ['estrategico', 'Ding Liren'],
        ['fechado', 'Vladimir Kramnik'],
        ['estrategico', 'Fabiano Caruana']
    ],

    [
        ['agressivo', 'Hikaru Nakamura'],
        ['estrategico', 'Bobby Fischer'],
        ['fechado', 'Wesley So'],
        ['agressivo', 'Mikhail Tal']
    ],

    [
        ['agressivo', 'Judit Polgar'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Tigran Petrosian'],
        ['fechado', 'Alireza Firouzja']
    ],

    [
        ['agressivo', 'Garry Kasparov'],
        ['estrategico', 'Fabiano Caruana'],
        ['fechado', 'Anatoly Karpov'],
        ['fechado', 'Hou Yifan']
    ],

    [
        ['agressivo', 'Hikaru Nakamura'],
        ['estrategico', 'Ding Liren'],
        ['fechado', 'Vladimir Kramnik'],
        ['estrategico', 'Viswanathan Anand']
    ],

    [
        ['agressivo', 'Mikhail Tal'],
        ['estrategico', 'Bobby Fischer'],
        ['fechado', 'Wesley So'],
        ['agressivo', 'Judit Polgar']
    ],

    [
        ['agressivo', 'Alireza Firouzja'],
        ['estrategico', 'Fabiano Caruana'],
        ['fechado', 'Tigran Petrosian'],
        ['agressivo', 'Hou Yifan']
    ],

    [
        ['agressivo', 'Garry Kasparov'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Anatoly Karpov'],
        ['fechado', 'Viswanathan Anand']
    ]
];

const idEstilo = {
    agressivo: 1,
    estrategico: 2,
    fechado: 3
};

const idGm = {
    'Mikhail Tal': 1,
    'Garry Kasparov': 2,
    'Magnus Carlsen': 3,
    'Anatoly Karpov': 4,
    'Bobby Fischer': 5,
    'Vladimir Kramnik': 6,
    'Hikaru Nakamura': 7,
    'Judit Polgar': 8,
    'Viswanathan Anand': 9,
    'Fabiano Caruana': 10,
    'Ding Liren': 11,
    'Alireza Firouzja': 12,
    'Wesley So': 13,
    'Tigran Petrosian': 14,
    'Hou Yifan': 15
};

let perguntaCount = 0;
let respAtual = true;
let progresso = document.getElementById('progressoPorc');
let ultBotao;
let exec = false;
let porc = 0;
let respostaEscolhida;

carregarPergunta();

if (!sessionStorage.ID_USUARIO) {
    alert('Por favor, faça seu login antes de responder o questionário');
    window.location.href = 'login.html';
}

function carregarPergunta() {
    if (perguntaCount == 16) {
        let estiloFinal = maiorPontuacao(estilo);
        let gmFinal = maiorPontuacao(gms);

        let estiloId = idEstilo[estiloFinal];
        let gmId = idGm[gmFinal];

        let aberturaId;

        if (estiloFinal == 'agressivo') {
            estiloId = 1;

            aberturaId = parseInt(Math.random() * 5) + 1;

        } else if (estiloFinal == 'estrategico') {
            estiloId = 2;

            aberturaId = parseInt(Math.random() * 5) + 6;

        } else {
            estiloId = 3;

            aberturaId = parseInt(Math.random() * 5) + 11;
        }

        fetch("/quiz/salvarResultado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: sessionStorage.ID_USUARIO,
                estiloServer: estiloId,
                gmServer: gmId,
                aberturaServer: aberturaId
            })
        })
            .then(function (resposta) {

                if (resposta.ok) {
                    window.location.href = "resultado.html";
                } else {
                    alert("Erro ao salvar resultado");
                }

            })
            .catch(function (erro) {
                console.log(erro);
            });

        return;
    }

    if (!respAtual) {
        return;
    }

    if (exec) {
        ultBotao.style.color = 'white';
        porc += 6.25;
        progresso.style.width = porc + '%';

        let dadosResposta = resultadoPerguntas[perguntaCount - 1][respostaEscolhida - 1];
        let estiloEscolhido = dadosResposta[0];
        let gmEscolhido = dadosResposta[1];

        let peso = pesosPergunta[perguntaCount - 1];
        estilo[estiloEscolhido] += peso;
        gms[gmEscolhido] += peso * pesoGm[gmEscolhido];
    }

    let titulos = Object.keys(perguntas);

    document.getElementById('pergunta').textContent = titulos[perguntaCount];

    document.getElementById('primeiraQuestao').textContent = perguntas[titulos[perguntaCount]][0];
    document.getElementById('segundaQuestao').textContent = perguntas[titulos[perguntaCount]][1];
    document.getElementById('terceiraQuestao').textContent = perguntas[titulos[perguntaCount]][2];
    document.getElementById('quartaQuestao').textContent = perguntas[titulos[perguntaCount]][3];

    perguntaCount++;
    respAtual = false;
}

function responder(resposta) {
    if (exec) {
        ultBotao.style.color = 'white';
    }

    respostaEscolhida = resposta;

    respAtual = true;

    let botoes = document.querySelectorAll('.questNumberText');

    ultBotao = botoes[resposta - 1];

    botoes[resposta - 1].style.color = '#2A2A2A';

    exec = true;
}

function maiorPontuacao(indice) {
    let nomes = Object.keys(indice);

    let maior = nomes[0];

    for (let i = 1; i < nomes.length; i++) {
        if (indice[nomes[i]] > indice[maior]) {
            maior = nomes[i];
        }
    }

    return maior;
}


