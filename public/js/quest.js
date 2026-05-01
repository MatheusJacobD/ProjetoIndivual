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

estilo = {
    'agressivo': 0,
    'fechado': 0,
    'estrategico': 0
}

const perguntas = {
    'Quando aparece um problema inesperado, você geralmente:': ['resolve na hora, mesmo sem pensar muito', 'para e analisa as opções', 'espera entender melhor antes de agir', 'tenta algo e ajusta no caminho'],

    'Em situações de pressão, você tende a:': ['agir rápido', 'manter a calma e calcular', 'reduzir riscos', 'mudar de estratégia conforme a situação'],

    'Quando precisa tomar uma decisão importante, você:': ['segue seu instinto', 'pensa nas consequências a longo prazo', 'escolhe a opção mais segura', 'mistura lógica com intuição'],

    'Você se considera uma pessoa mais:': ['ousada', 'analítica', 'cautelosa', 'flexível'],

    'Ao enfrentar um desafio difícil, você prefere:': ['encarar de frente', 'entender primeiro como ele funciona', 'agir com calma e segurança', 'testar diferentes caminhos'],

    'Quando algo dá errado, sua primeira reação é:': ['tentar resolver imediatamente', 'entender o motivo do erro', 'evitar piorar a situação', 'mudar completamente a abordagem'],

    'Em trabalhos em grupo, você costuma:': ['tomar a frente', 'organizar a estratégia', 'garantir que tudo saia sem problemas', 'se adaptar ao papel necessário'],

    'O que você valoriza mais?': ['iniciativa', 'inteligência', 'estabilidade', 'versatilidade'],

    'Quando percebe uma oportunidade, você:': ['aproveita na hora', 'avalia se é a melhor escolha', 'espera um momento mais seguro', 'adapta a oportunidade ao seu plano'],

    'Você costuma aprender melhor:': ['fazendo', 'estudando antes', 'repetindo com segurança', 'testando métodos diferentes'],

    'O que mais te incomoda?': ['lentidão', 'falta de lógica', 'imprevisibilidade', 'rotina'],

    'Em geral, você prefere:': ['agir primeiro', 'planejar primeiro', 'proteger o que já tem', 'mudar conforme o contexto'],

    'Quando alguém discorda de você, você:': ['rebate na hora', 'tenta entender o ponto', 'evita conflito', 'muda o argumento conforme a conversa'],

    'Você costuma tomar decisões:': ['rapidamente', 'de forma planejada', 'com cautela', 'adaptando ao momento'],

    'Em um ambiente competitivo, você:': ['quer se destacar', 'quer vencer pela estratégia', 'quer evitar erros', 'quer se adaptar melhor que os outros'],

    'O que melhor te representa?': ['intensidade', 'precisão', 'segurança', 'versatilidade']
}

const resultadoPerguntas = [
    [
        ['agressivo', 'Hikaru Nakamura'],
        ['estrategico', 'Magnus Carlsen'],
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
        ['estrategico', 'Bobby Fischer'],
        ['fechado', 'Wesley So'],
        ['estrategico', 'Ding Liren']
    ],

    [
        ['agressivo', 'Alireza Firouzja'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Anatoly Karpov'],
        ['estrategico', 'Hou Yifan']
    ],

    [
        ['agressivo', 'Garry Kasparov'],
        ['estrategico', 'Fabiano Caruana'],
        ['fechado', 'Vladimir Kramnik'],
        ['agressivo', 'Hikaru Nakamura']
    ],

    [
        ['agressivo', 'Judit Polgar'],
        ['estrategico', 'Ding Liren'],
        ['fechado', 'Tigran Petrosian'],
        ['estrategico', 'Viswanathan Anand']
    ],

    [
        ['agressivo', 'Garry Kasparov'],
        ['estrategico', 'Bobby Fischer'],
        ['fechado', 'Wesley So'],
        ['estrategico', 'Hou Yifan']
    ],

    [
        ['agressivo', 'Mikhail Tal'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Anatoly Karpov'],
        ['estrategico', 'Viswanathan Anand']
    ],

    [
        ['agressivo', 'Alireza Firouzja'],
        ['estrategico', 'Fabiano Caruana'],
        ['fechado', 'Vladimir Kramnik'],
        ['estrategico', 'Ding Liren']
    ],

    [
        ['agressivo', 'Hikaru Nakamura'],
        ['estrategico', 'Bobby Fischer'],
        ['fechado', 'Wesley So'],
        ['agressivo', 'Mikhail Tal']
    ],

    [
        ['agressivo', 'Garry Kasparov'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Tigran Petrosian'],
        ['agressivo', 'Alireza Firouzja']
    ],

    [
        ['agressivo', 'Judit Polgar'],
        ['estrategico', 'Fabiano Caruana'],
        ['fechado', 'Anatoly Karpov'],
        ['estrategico', 'Hou Yifan']
    ],

    [
        ['agressivo', 'Garry Kasparov'],
        ['estrategico', 'Ding Liren'],
        ['fechado', 'Vladimir Kramnik'],
        ['estrategico', 'Viswanathan Anand']
    ],

    [
        ['agressivo', 'Hikaru Nakamura'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Wesley So'],
        ['agressivo', 'Mikhail Tal']
    ],

    [
        ['agressivo', 'Alireza Firouzja'],
        ['estrategico', 'Bobby Fischer'],
        ['fechado', 'Tigran Petrosian'],
        ['estrategico', 'Hou Yifan']
    ],

    [
        ['agressivo', 'Mikhail Tal'],
        ['estrategico', 'Magnus Carlsen'],
        ['fechado', 'Anatoly Karpov'],
        ['estrategico', 'Viswanathan Anand']
    ]
]

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

        fetch("/quiz/salvarResultado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: sessionStorage.ID_USUARIO,
                estiloServer: estiloId,
                gmServer: gmId
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

        estilo[estiloEscolhido]++;
        gms[gmEscolhido]++;
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


