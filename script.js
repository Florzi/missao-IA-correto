const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
            {
                enunciado: "Qual País tem mais índice de pobreza?",
                alternativas :[
                {
                    texto: "Afríca",
                    afirmação: "afirmação"
                },
                {   texto: "Somália",
                    afirmação: "afirmação"
                },
                {   texto: "Suíça",
                    afirmação: "afirmação"
                },
                {   texto: "Cuba",
                    afirmação: "afirmação"
                }]
            },
            
            {
                enunciado: "Qual estado brasileiro mais racista?",
                alternativas :[
                    {
                        texto: "São Paulo",
                        afirmação: "afirmação"
                    },
                    {   texto: "paraná",
                        afirmação: "afirmação"
                    },
                    {   texto: "Rio Grande Do Sul",
                        afirmação: "afirmação"
                    },
                    {   texto: "Santa Catarina",
                        afirmação: "afirmação"
                    
            }]
        },
            
            {
                enunciado: "Qual dos fatores é mais frequentemente citado como uma causa primaria de desigualdade social em sociedades modernas?",
            alternativas :[
                {
                    texto: "Destribuição desigual de riqueza e renda",
                    afirmação: "afirmação"
                },
                {   texto: "Localização geagráfica",
                    afirmação: "afirmação"
                },
                {   texto: "Preferencias culturais",
                    afirmação: "afirmação"
                },
                {   texto: "Condições climatica",
                    afirmação: "afirmação"
                }]},
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
    caixaPerguntas.textContent = "As perguntas abordam temas relevantes sobre desigualdade social: o primeiro questiona qual país possui o maior índice de pobreza e o segundo busca identificar o estado brasileiro mais racista. A última questão se concentra em investigar qual dos fatores, dentre os apresentados, é mais frequentemente apontado como causa primária da desigualdade social em sociedades modernas.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
