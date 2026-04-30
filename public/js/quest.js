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

    'O que melhor te representa?:': ['intensidade', 'precisão', 'segurança', 'versatilidade']
}

let perguntaCount = 0;
let respAtual = false;
let exec = false;

carregarPergunta();

function carregarPergunta() {
    if (!exec){
        respAtual = true;
        exec = true;
    }

    if (!respAtual) {
        return;
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
    respAtual = resposta;
}


