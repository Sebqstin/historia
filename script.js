const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você mora em uma pequena cidade próxima a uma extensa área de floresta tropical. Nos últimos meses, tem notado um aumento alarmante no desmatamento ilegal na região. As árvores centenárias estão sendo derrubadas, e a vida selvagem que antes era abundante está diminuindo rapidamente. Preocupado com o futuro da floresta e seus impactos, você decide agir.",
        alternativas: [
            {
                texto: "Muito ruim!",
                afirmacao: "No início ficou com medo do que o desmatamento pudesse chegar pode fazer. "
            },
            {
                texto: "O que eu vou fazer agora?",
                afirmacao: "Quis saber o que fazer agora com esse problema."
            }
        ]
    },
    {
        enunciado: "Você percebe movimentos suspeitos de caminhões carregados de madeira que passam pela estrada principal da cidade. Após algumas investigações, descobre relatos preocupantes de ambientalistas locais sobre a rápida perda de cobertura florestal. Como você se informa sobre a extensão e os impactos do desmatamento na sua região? .",
        alternativas: [
            {
                texto: "Decide investigar pessoalmente, conversando com moradores locais e coletando relatos sobre as atividades de desmatamento.",
                afirmacao: "Conseguiu falar com as outras pessoas da cidade.",
            },
            {
                texto: "Reporta imediatamente às autoridades locais para investigação, baseando-se nas informações que coletou.",
                afirmacao: "Sentiu medo, do que poderia acontecer."
            }
        ]
    },
    {
        enunciado: "Ao conversar com os moradores locais, você descobre que muitos estão conscientes do problema, mas têm medo de denunciar. Você decide iniciar uma campanha de conscientização porta a porta para encorajar os moradores a relatar atividades suspeitas às autoridades ambientais e policiais. Quais são suas opções para agir contra o desmatamento ilegal?",
        alternativas: [
            {
                texto: "Inicia uma campanha de conscientização porta a porta, explicando a importância de relatar atividades suspeitas às autoridades ambientais.",
                afirmacao: "A campanha funciona e vai com mais força cada vez"
            },
            {
                texto: "Organiza um protesto na cidade para chamar a atenção das autoridades e da mídia sobre o desmatamento ilegal.",
                afirmacao: "O protesto poderia dar muito errado."
            }
        ]
    },
    {
        enunciado: "Durante uma reunião da comunidade, você ouve os relatos dos agricultores sobre as dificuldades econômicas que enfrentam. Compreendendo a necessidade de sustento, você sugere a implementação de práticas agrícolas sustentáveis e programas de agrofloresta como alternativas ao desmatamento, visando preservar tanto o ambiente quanto as fontes de renda. Como você equilibra suas preocupações ambientais com as necessidades econômicas locais?",
        alternativas: [
            {
                texto: "Propõe a implementação de práticas agrícolas sustentáveis e programas de agrofloresta como alternativas viáveis ao desmatamento.",
                afirmacao: "Notou também que cada alternativa é uma boa opção."
            },
            {
                texto: "Incentiva os agricultores a intensificarem o desmatamento controlado como medida temporária para garantir renda, enquanto buscam soluções sustentáveis a longo prazo.",
                afirmacao: "Cada agricultor é mais motivado a intensificação e da certo."
            }
        ]
    },
    {
        enunciado: "Você forma um grupo de trabalho com educadores locais e líderes comunitários para desenvolver um programa educativo sobre a importância das florestas tropicais. Juntos, organizam workshops em escolas e distribuem materiais informativos para os moradores, incentivando ações individuais e coletivas para proteger o ambiente. Quais são os passos práticos que você poderia seguir para promover a conscientização e ação dentro da sua comunidade?",
        alternativas: [
            {
                texto: "Organizam workshops educativos em escolas e eventos comunitários para informar sobre os impactos do desmatamento e as maneiras de preservar a floresta.",
                afirmacao: "Conseguem informar a todas as pessoas e sistemas educativos para o cuidado do meio ambiente"
            },
            {
                texto: "Distribuem panfletos informativos nas ruas da cidade, destacando os perigos do desmatamento e incentivando a participação ativa dos moradores na proteção ambiental.",
                afirmacao: "Que bom! você conseguiu informar á cidade toda, para salvar a floresta, parabéns!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();